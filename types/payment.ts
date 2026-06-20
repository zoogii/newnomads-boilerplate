export type PaymentStatus = "draft" | "open" | "paid" | "void" | "failed" | "cancelled";

export type BylMode = "test" | "live";

export interface BylInvoiceCreateRequest {
  amount: number;
  currency: "MNT";
  orderId: string;
  customerEmail?: string;
  customerPhone?: string;
  description?: string;
}

export interface BylInvoiceCreateResponse {
  invoiceId: string;
  invoiceNumber?: string;
  status: PaymentStatus;
  redirectUrl?: string;
  qrCodeUrl?: string;
  expiresAt?: string;
  mode?: BylMode;
  normalizedAmount?: number;
  modeMessage?: string;
  raw?: unknown;
}

export interface BylPaymentCallbackPayload {
  invoiceId: string;
  orderId: string;
  status: PaymentStatus;
  amount: number;
  currency: string;
  signature?: string;
  raw?: unknown;
}
