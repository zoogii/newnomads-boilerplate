import { NextResponse } from "next/server";

import { parseBylCallbackPayload, verifyBylCallbackSignature } from "@/lib/byl";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const signatureHeader =
      request.headers.get("x-byl-signature") || request.headers.get("x-signature");

    const isValidSignature = verifyBylCallbackSignature(signatureHeader);

    if (!isValidSignature) {
      return NextResponse.json({ error: "Callback гарын үсэг буруу байна" }, { status: 401 });
    }

    const callbackPayload = parseBylCallbackPayload(body);

    if (!callbackPayload.invoiceId || !callbackPayload.orderId) {
      return NextResponse.json(
        { error: "Callback өгөгдөлд invoiceId эсвэл orderId алга" },
        { status: 400 },
      );
    }

    // Persist callback updates in your database here.
    return NextResponse.json(
      {
        ok: true,
        invoiceId: callbackPayload.invoiceId,
        orderId: callbackPayload.orderId,
        status: callbackPayload.status,
      },
      { status: 200 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Тодорхойгүй алдаа";

    return NextResponse.json(
      {
        error: "Callback боловсруулах үед алдаа гарлаа",
        message,
      },
      { status: 500 },
    );
  }
}
