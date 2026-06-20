import { NextResponse } from "next/server";

import { createBylInvoice } from "@/lib/byl";
import type { BylInvoiceCreateRequest } from "@/types/payment";

export const runtime = "nodejs";

function validateInvoiceInput(payload: Partial<BylInvoiceCreateRequest>) {
  if (!payload.amount || payload.amount <= 0) {
    return "Дүн 0-ээс их байх ёстой.";
  }

  if (!payload.orderId) {
    return "orderId заавал шаардлагатай.";
  }

  if (payload.currency !== "MNT") {
    return "Одоогоор зөвхөн MNT валютаар төлбөр хүлээн авна.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<BylInvoiceCreateRequest>;
    const validationError = validateInvoiceInput(payload);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const response = await createBylInvoice({
      amount: payload.amount as number,
      currency: payload.currency as "MNT",
      orderId: payload.orderId as string,
      customerEmail: payload.customerEmail,
      customerPhone: payload.customerPhone,
      description: payload.description,
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Тодорхойгүй алдаа";

    return NextResponse.json(
      {
        error: "Нэхэмжлэл үүсгэж чадсангүй",
        message,
      },
      { status: 500 },
    );
  }
}
