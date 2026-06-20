"use client";

import { Loader2, QrCode, ShieldCheck, XCircle } from "lucide-react";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { BylInvoiceCreateResponse, PaymentStatus } from "@/types/payment";

interface CheckoutState {
  status: "idle" | "loading" | "ready" | "error";
  message?: string;
  invoice?: BylInvoiceCreateResponse;
}

export function CheckoutForm() {
  const [amount, setAmount] = useState<number>(59000);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [state, setState] = useState<CheckoutState>({ status: "idle" });

  const orderSeed = useId().replace(/:/g, "");
  const orderId = `order_${orderSeed}`;

  const paymentLabelMap: Record<PaymentStatus, string> = {
    draft: "Ноорог",
    open: "Нээлттэй",
    paid: "Төлөгдсөн",
    void: "Хүчингүй",
    failed: "Амжилтгүй",
    cancelled: "Цуцлагдсан",
  };

  async function handleCreateInvoice(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading" });

    try {
      const response = await fetch("/api/payment/create-invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency: "MNT",
          orderId,
          customerEmail: email || undefined,
          customerPhone: phone || undefined,
          description: "New Nomads Academy менторшип төлбөр",
        }),
      });

      const result = (await response.json()) as BylInvoiceCreateResponse | { error?: string; message?: string };

      if (!response.ok) {
        const message =
          "message" in result && result.message
            ? result.message
            : "error" in result && result.error
              ? result.error
              : "Нэхэмжлэл үүсгэх боломжгүй байна";
        throw new Error(message);
      }

      setState({
        status: "ready",
        invoice: result as BylInvoiceCreateResponse,
      });
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "Төлбөрийн урсгал дээр алдаа гарлаа",
      });
    }
  }

  return (
    <div className="surface-card-strong p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold sm:text-2xl">byl.mn Төлбөр Туршилт</h2>
      </div>

      <form onSubmit={handleCreateInvoice} className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium">Дүн (MNT)</label>
          <Input
            type="number"
            min={1}
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value || 0))}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">И-мэйл (заавал биш)</label>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="student@example.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Утас (заавал биш)</label>
          <Input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+976 99112233"
          />
        </div>

        <div className="sm:col-span-2">
          <Button type="submit" className="w-full sm:w-auto" disabled={state.status === "loading"}>
            {state.status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Нэхэмжлэл үүсгэж байна...
              </>
            ) : (
              "Нэхэмжлэл Үүсгэх"
            )}
          </Button>
        </div>
      </form>

      {state.status === "error" ? (
        <div className="mt-5 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <p className="flex items-center gap-2">
            <XCircle className="h-4 w-4" />
            {state.message}
          </p>
        </div>
      ) : null}

      {state.status === "ready" && state.invoice ? (
        <div className="mt-6 rounded-lg border border-border bg-gradient-to-b from-white to-background p-4">
          {state.invoice.modeMessage ? (
            <div className="mb-3 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700">
              {state.invoice.modeMessage}
            </div>
          ) : null}

          {state.invoice.mode ? (
            <p className="text-sm text-muted-foreground">
              Горим: <span className="font-medium uppercase text-foreground">{state.invoice.mode}</span>
            </p>
          ) : null}

          {typeof state.invoice.normalizedAmount === "number" ? (
            <p className="mt-1 text-sm text-muted-foreground">
              Баталгаажсан дүн: <span className="font-medium text-foreground">{state.invoice.normalizedAmount} ₮</span>
            </p>
          ) : null}

          <p className="text-sm text-muted-foreground">
            Нэхэмжлэлийн ID: <span className="font-mono text-foreground">{state.invoice.invoiceId}</span>
          </p>
          {state.invoice.invoiceNumber ? (
            <p className="mt-1 text-sm text-muted-foreground">
              Нэхэмжлэлийн дугаар: <span className="font-mono text-foreground">{state.invoice.invoiceNumber}</span>
            </p>
          ) : null}
          <p className="mt-1 text-sm text-muted-foreground">
            Төлөв: <span className="font-medium text-foreground">{paymentLabelMap[state.invoice.status]}</span>
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            {state.invoice.redirectUrl ? (
              <a href={state.invoice.redirectUrl} target="_blank" rel="noopener noreferrer">
                <Button>Төлбөрийн Хуудас Нээх</Button>
              </a>
            ) : null}

            {state.invoice.qrCodeUrl ? (
              <a href={state.invoice.qrCodeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button variant="outline">
                  <QrCode className="h-4 w-4" />
                  QR Код Нээх
                </Button>
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
