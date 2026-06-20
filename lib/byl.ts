import { randomUUID } from "crypto";

import type {
  BylMode,
  BylInvoiceCreateRequest,
  BylInvoiceCreateResponse,
  BylPaymentCallbackPayload,
} from "@/types/payment";

interface BylProviderInvoiceRequest {
  amount: number;
  description?: string;
  auto_advance?: boolean;
}

interface BylProviderInvoiceData {
  id: number;
  status: "draft" | "open" | "paid" | "void";
  amount: number;
  description?: string;
  number?: string;
  project_id: number;
  due_date?: string;
  created_at?: string;
  updated_at?: string;
  url?: string;
}

interface BylProviderInvoiceResponse {
  data: BylProviderInvoiceData;
}

interface BylEnvConfig {
  apiBaseUrl: string;
  apiToken: string;
  projectId: string;
  mode: BylMode;
  webhookSecret: string;
}

function getBylEnv(): BylEnvConfig {
  const configuredMode = (process.env.BYL_MODE || "test").toLowerCase();
  const mode: BylMode = configuredMode === "live" ? "live" : "test";

  return {
    apiBaseUrl: process.env.BYL_API_BASE_URL || "https://byl.mn/api",
    apiToken: process.env.BYL_API_TOKEN || "",
    projectId: process.env.BYL_PROJECT_ID || "",
    mode,
    webhookSecret: process.env.BYL_WEBHOOK_SECRET || "",
  };
}

export function hasBylCredentials() {
  const { apiToken } = getBylEnv();
  return Boolean(apiToken);
}

function mapToProviderPayload(
  payload: BylInvoiceCreateRequest,
): BylProviderInvoiceRequest {
  return {
    amount: payload.amount,
    description: payload.description,
    auto_advance: true,
  };
}

function normalizeAmountByMode(amount: number, mode: BylMode) {
  if (mode === "test") {
    return 50;
  }

  return amount;
}

export async function createBylInvoice(
  payload: BylInvoiceCreateRequest,
): Promise<BylInvoiceCreateResponse> {
  const { apiBaseUrl, apiToken, projectId, mode } = getBylEnv();
  const invoiceId = randomUUID();
  const normalizedAmount = normalizeAmountByMode(payload.amount, mode);
  const modeMessage =
    mode === "test"
      ? "Test горимд гүйлгээ 50₮-өөр хязгаарлагдсан тул дүнг 50₮ болголоо."
      : undefined;

  if (!apiToken || !projectId) {
    const mockUrl = `https://byl.mn/h/invoice/mock/${invoiceId}`;

    return {
      invoiceId,
      status: "open",
      redirectUrl: mockUrl,
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(mockUrl)}`,
      mode,
      normalizedAmount,
      modeMessage,
      raw: {
        mode: "mock",
        reason: "BYL_API_TOKEN эсвэл BYL_PROJECT_ID тохируулагдаагүй байна",
      },
    };
  }

  const providerPayload = mapToProviderPayload(
    {
      ...payload,
      amount: normalizedAmount,
    },
  );

  const response = await fetch(`${apiBaseUrl}/v1/projects/${projectId}/invoices`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
    body: JSON.stringify(providerPayload),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`BYL нэхэмжлэл үүсгэхэд алдаа гарлаа: ${response.status} ${errorText}`);
  }

  const result = (await response.json()) as BylProviderInvoiceResponse;
  const invoiceData = result.data;
  const redirectUrl = invoiceData.url;

  return {
    invoiceId: String(invoiceData.id),
    invoiceNumber: invoiceData.number,
    status: invoiceData.status,
    redirectUrl,
    qrCodeUrl: redirectUrl
      ? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(redirectUrl)}`
      : undefined,
    expiresAt: invoiceData.due_date,
    mode,
    normalizedAmount,
    modeMessage,
    raw: result,
  };
}

export function verifyBylCallbackSignature(
  signature: string | null,
): boolean {
  const { webhookSecret } = getBylEnv();

  if (!webhookSecret) {
    return true;
  }

  if (!signature) {
    return false;
  }

  return signature === webhookSecret;
}

export function parseBylCallbackPayload(payload: unknown): BylPaymentCallbackPayload {
  const body = payload as Record<string, unknown>;
  const data = (body.data || body) as Record<string, unknown>;

  return {
    invoiceId: String(data.invoice_id || data.invoiceId || data.id || ""),
    orderId: String(data.order_id || data.orderId || data.number || ""),
    status: (data.status as BylPaymentCallbackPayload["status"]) || "open",
    amount: Number(data.amount || 0),
    currency: String(data.currency || "MNT"),
    signature: typeof body.signature === "string" ? body.signature : undefined,
    raw: payload,
  };
}
