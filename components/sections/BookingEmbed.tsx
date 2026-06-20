"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { CalendarDays } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { getCalLink } from "@/lib/cal";
import type { BookingWidgetState } from "@/types/booking";

export function BookingEmbed() {
  const calLink = useMemo(() => getCalLink(), []);
  const [state, setState] = useState<BookingWidgetState>("loading");

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const cal = await getCalApi();

        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          styles: {
            branding: {
              brandColor: "#06a6d9",
            },
          },
        });

        if (mounted) {
          setState("ready");
        }
      } catch {
        if (mounted) {
          setState("error");
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="surface-card-strong p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold sm:text-2xl">Танилцах Уулзалтын Цаг Захиалах</h2>
      </div>

      {state === "loading" ? (
        <div className="space-y-3" aria-live="polite" aria-busy="true">
          <div className="h-6 w-1/3 animate-pulse rounded bg-muted/80" />
          <div className="h-72 animate-pulse rounded-lg bg-gradient-to-br from-muted to-background" />
        </div>
      ) : null}

      {state === "error" ? (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Цаг захиалгын виджет ачаалагдсангүй. NEXT_PUBLIC_CAL_LINK хувьсагчаа шалгана уу.
        </div>
      ) : null}

      <div className={state === "ready" ? "block" : "hidden"}>
        <Cal
          calLink={calLink}
          style={{ width: "100%", height: "680px", overflow: "scroll" }}
          config={{
            layout: "month_view",
            theme: "light",
          }}
        />
      </div>
    </div>
  );
}
