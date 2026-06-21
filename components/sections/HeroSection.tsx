import Image from "next/image";
import { BadgeCheck, CheckCircle2, ClipboardList, LayoutGrid, WandSparkles } from "lucide-react";

const instructions = [
  "Figma MCP link-ийг аваад дизайн context-ийг нь шууд унш.",
  "Typography-г Figma-с автоматаар уншаад Google font-оор шууд тааруул.",
  "Токенуудыг app/globals.css болон tailwind.config.ts дээр map хий.",
  "Section бүрийг components/sections дотор нэг нэгээр нь хэрэгжүүл.",
  "Локал asset, Cal.com, byl.mn тохиргоог .env.local болон public/assets дээр холбо.",
];

const workflowSteps = [
  {
    title: "1. Figma link хүлээн авах",
    text: "Оюутан зөвхөн Figma design MCP link өгнө. Design context, node structure, screenshot-ийг тэндээс уншина.",
  },
  {
    title: "2. Токен, layout-аа тааруулах",
    text: "Өнгө, spacing, radius, typography-г global token layer дээр нэг дор map хийнэ.",
  },
  {
    title: "3. Section-by-section implement хийх",
    text: "Hero, feature, pricing, booking зэрэг хэсгийг жижиг бүрэлдэхүүн болгож дарааллаар нь кодлоно.",
  },
  {
    title: "4. Asset болон integration дуусгах",
    text: "Зураг, лого, icon-оо public/assets дотор байршуулж, Cal.com болон byl.mn холбоосуудаа солино.",
  },
];

export function HeroSection() {
  return (
    <section className="section-shell container-px py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.15fr,0.85fr] lg:items-stretch">
        <div className="surface-card-strong relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,166,217,0.12),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(255,154,51,0.12),transparent_34%)]" />
          <div className="relative z-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-muted-foreground shadow-sm">
              <BadgeCheck className="h-4 w-4 text-primary" />
              New Nomads Academy Team Boilerplate
            </p>

            <h1 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              Figma MCP link-ээс эхлээд студентийн код хэрэгжилт хүртэл нэг мөрөөр ойлгогдох зааврын төв.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
              Оюутан зөвхөн Figma-ийн design MCP link өгмөгц design context, layout, token, asset, integration-ийн
              дарааллыг шууд уншаад хэрэгжүүлэхээр энэ хуудсыг зохион байгуулсан.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "MCP link first",
                "Token driven",
                "Section by section",
                "Asset ready",
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-border/70 bg-white/70 px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {instructions.map((instruction) => (
                <div
                  key={instruction}
                  className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/72 p-4 shadow-[0_8px_24px_-20px_rgba(15,23,42,0.55)] backdrop-blur"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-6 text-foreground/90">{instruction}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-3xl border border-primary/15 bg-gradient-to-br from-white/90 to-white/70 p-5 shadow-[0_18px_40px_-28px_rgba(2,132,199,0.45)] backdrop-blur">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <ClipboardList className="h-4 w-4 text-primary" />
                Хэрэглэх дараалал
              </div>
              <div className="grid gap-3">
                {workflowSteps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-border/70 bg-white/80 p-4 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <h2 className="text-sm font-semibold text-foreground">{step.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="surface-card relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-secondary/18 blur-2xl" />
          <div className="relative z-10">
            <div className="mb-5 flex items-center gap-3">
              <Image
                src="/assets/logos/newnomads-mark.svg"
                alt="New Nomads Academy logo mark"
                className="h-12 w-12"
                width={48}
                height={48}
              />
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                  MCP Ready
                </p>
                <p className="text-sm text-muted-foreground">Link-ийг шууд action plan болгоно</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: LayoutGrid, title: "Design context", text: "Figma link-ээс node, hierarchy, хэмжээс, layout-ыг ойлго." },
                { icon: WandSparkles, title: "Implementation", text: "Token-first, section-first, component-first зарчмаар кодло." },
                { icon: CheckCircle2, title: "Validation", text: "Responsive, asset, booking, payment-аа нэг бүрчлэн шалга." },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/72 p-4 shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold">{item.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-3xl border border-border/70 bg-gradient-to-br from-primary/10 to-secondary/10 p-4 shadow-[0_18px_40px_-28px_rgba(6,166,217,0.45)]">
              <p className="text-sm font-semibold text-foreground">Оюутанд өгөх хамгийн энгийн заавар</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                &ldquo;Figma link-ээ явуул. Би design context-ийг уншаад token, layout, sections, asset, integration-ийг
                нэг мөр workflow-оор хэрэгжүүлнэ.&rdquo; гэж хэлэхэд хангалттай.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
