import { Code2, Palette, Rocket, WalletCards } from "lucide-react";

const features = [
  {
    title: "Figma Токен Холболт",
    description: "Нэг төвлөрсөн токеноор өнгө, radius, зай хэмжээ, үсгийн стилийг удирдана.",
    icon: Palette,
  },
  {
    title: "Section Төвтэй Архитектур",
    description: "Section бүр тусдаа засварлагддаг тул Copilot, Claude Code-оор өргөтгөхөд тохиромжтой.",
    icon: Code2,
  },
  {
    title: "Cal.com Цаг Захиалга",
    description: "Цаг захиалгын холбоосоо оруулаад ландинг хуудсаасаа шууд захиалга авна.",
    icon: Rocket,
  },
  {
    title: "byl.mn Төлбөр",
    description: "Монгол зах зээлд зориулсан сервер API болон callback боловсруулалттай төлбөрийн бүтэц.",
    icon: WalletCards,
  },
];

export function FeaturesSection() {
  return (
    <section className="section-shell container-px py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold sm:text-3xl">Суурь Төслийн Гол Боломжууд</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Үйлдвэрлэлийн орчинд ашиглахад бэлэн атлаа оюутнууд хэрэглэгчийн төсөл дээрээ шууд суралцаж хэрэгжүүлэхэд хялбар бүтэцтэй.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="surface-card rounded-lg p-5 transition-transform duration-200 hover:-translate-y-1">
                <div className="inline-flex rounded-md border border-primary/20 bg-primary/10 p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
