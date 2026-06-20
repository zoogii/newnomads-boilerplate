import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Эхлэл",
    price: "59,000 MNT",
    tagline: "Оюутны портфолио хурдан эхлүүлэхэд",
    points: ["Нэг хуудастай ландинг", "Cal.com embed", "Суурь byl.mn төлбөр"],
  },
  {
    name: "Өсөлт",
    price: "129,000 MNT",
    tagline: "Хэрэглэгчид өгөх бүрэн section-тэй сайт",
    points: ["Олон section-тэй хуудас", "Нарийвчилсан цаг захиалга", "Нэхэмжлэлийн callback хяналт"],
    featured: true,
  },
];

export function PricingSection() {
  return (
    <section className="section-shell container-px py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold sm:text-3xl">Үнийн Блок Жишээ</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Эдгээр картыг өөрийн бодит санал, багцын бүтэцтэйгээр солиход component-ийн гэрээ хэвээр үлдэнэ.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={[
                "rounded-xl border p-6 shadow-soft backdrop-blur-md",
                plan.featured
                  ? "border-primary/50 bg-gradient-to-b from-primary/10 to-secondary/10"
                  : "border-border/70 bg-white/80",
              ].join(" ")}
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{plan.name}</p>
              <h3 className="mt-2 text-3xl font-semibold">{plan.price}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>

              <ul className="mt-5 space-y-3">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a href="#checkout" className="mt-6 inline-block">
                <Button variant={plan.featured ? "primary" : "outline"}>Багц Сонгох</Button>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
