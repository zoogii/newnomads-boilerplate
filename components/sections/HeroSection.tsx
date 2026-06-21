import Image from "next/image";
import { Box, Facebook, Instagram, Youtube } from "lucide-react";

const navItems = ["Хуучин дүрэм", "Шийдэл", "Гарах өөрчлөлт"];

const steps = [
  {
    title: "Номоо ав.",
    text: "Эхний ухаалаг шийдвэрээ гарга.",
  },
  {
    title: "Хуучин дүрмээ хая.",
    text: "Үр дүнгүй зуршлаасаа зоригтой татгалз.",
  },
  {
    title: "Өөрөөр ажилла.",
    text: "Өөрөөр ажиллаж, илүүг бүтээ.",
  },
];

const socialLinks = [Facebook, Instagram, Youtube];

export function HeroSection() {
  return (
    <div className="min-h-screen bg-[#f8fbf8] text-[#0c0d0c]">
      <header className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-5 sm:px-6 lg:px-16 lg:py-6">
        <Image
          src="/assets/logos/newnomads-mark.svg"
          alt="Logo"
          width={84}
          height={36}
          className="h-9 w-[84px]"
          priority
        />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-sm font-normal text-[#0c0d0c] transition-opacity hover:opacity-70">
              {item}
            </a>
          ))}
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-[6px] border border-[#242524] border-t-[1.5px] border-r-[1.5px] border-l-[1.5px] border-b-4 bg-[#0c0d0c] px-5 py-2 text-sm font-medium text-white shadow-[0_2px_0_0_rgba(36,37,36,1)] transition-transform hover:-translate-y-0.5"
          >
            Ном захиалах
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 pb-20 pt-14 text-center sm:px-6 sm:pb-24 sm:pt-18 lg:px-16 lg:pb-28 lg:pt-20">
          <div className="max-w-[760px]">
            <h1 className="text-[clamp(3rem,8vw,4.5rem)] font-medium leading-[1.2] tracking-[-0.03em] sm:text-[clamp(3.5rem,7vw,4.5rem)]">
              ӨӨРӨӨР АЖИЛЛАЯ
            </h1>
            <p className="mx-auto mt-4 max-w-[560px] text-base leading-7 text-[#0c0d0c]/80 sm:text-lg">
              Амьдралаа золиослолгүйгээр амжилтад хүрэх арга.
              <br />
              Дэлхийн бестселлер — «Өөрөөр ажиллая» (Rework).
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-[6px] border border-[#242524] border-t-[1.5px] border-r-[1.5px] border-l-[1.5px] border-b-4 bg-[#0c0d0c] px-6 py-2.5 text-sm font-medium text-white shadow-[0_2px_0_0_rgba(36,37,36,1)] transition-transform hover:-translate-y-0.5"
              >
                Одоо захиалах
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-[6px] border border-[#242524]/15 border-t-[1.5px] border-r-[1.5px] border-l-[1.5px] border-b-4 bg-white px-6 py-2.5 text-sm font-medium text-[#0c0d0c] shadow-[0_2px_0_0_rgba(12,13,12,0.08)] transition-transform hover:-translate-y-0.5"
              >
                Номын хэсгээс
              </a>
            </div>
          </div>

          <div className="mt-12 w-full overflow-hidden rounded-[16px] border border-black/5 bg-white shadow-[0_24px_60px_-42px_rgba(12,13,12,0.35)] sm:mt-14 lg:mt-16">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/assets/images/rework-book-cover.png"
                alt="ӨӨРӨӨР АЖИЛЛАЯ номын зураг"
                fill
                sizes="(max-width: 1024px) 100vw, 1280px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="grid gap-12 bg-white px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:px-14 lg:py-20">
            <div className="max-w-[430px]">
              <p className="text-sm font-semibold text-[#0c0d0c]">Энгийн. Гэхдээ үр дүнтэй.</p>
              <h2 className="mt-4 text-[clamp(2.3rem,5vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.04em]">
                Өөрөөр бас ухаалгаар эхлэх 3 алхам
              </h2>
            </div>

            <div className="relative pl-8 lg:pl-10">
              <div className="absolute left-[23px] top-4 h-[calc(100%-2rem)] w-px bg-[#0c0d0c]/15" />
              <div className="space-y-10">
                {steps.map((step) => (
                  <div key={step.title} className="relative flex gap-6">
                    <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <Box className="h-5 w-5 text-[#0c0d0c]" strokeWidth={2.2} />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-medium leading-6 tracking-[-0.02em]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#0c0d0c]/75">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-[1400px] px-4 pb-6 sm:px-6 lg:px-16 lg:pb-8">
        <div className="bg-[#f8fbf8] px-0 py-10 sm:py-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:gap-16">
            <div>
              <Image src="/assets/logos/newnomads-mark.svg" alt="Logo" width={84} height={36} className="h-9 w-[84px]" />
              <div className="mt-8 space-y-6 text-sm leading-6">
                <div>
                  <p className="font-semibold">Байршил</p>
                  <p className="mt-1 max-w-xs text-[#0c0d0c]/75">
                    Rokmon building, 3rd floor, Ulaanbaatar, Mongolia, 16050
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Утасны дугаар</p>
                  <a href="tel:+97688062224" className="mt-1 inline-block underline underline-offset-2">
                    +976 88062224
                  </a>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                {socialLinks.map((Icon) => (
                  <a
                    key={Icon.displayName ?? Icon.name}
                    href="#"
                    aria-label={Icon.displayName ?? Icon.name}
                    className="inline-flex h-6 w-6 items-center justify-center text-[#0c0d0c] transition-opacity hover:opacity-70"
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold">Link One</p>
              </div>
              <div className="space-y-6 text-sm font-semibold leading-6">
                <div>
                  <p>Даваа - Баасан</p>
                  <p>9:30 AM - 17:30 PM</p>
                </div>
                <div>
                  <p>Ням</p>
                  <p>10:30 AM - 13:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-[#0c0d0c]/10 pt-6 sm:mt-16 lg:mt-20">
            <p className="text-center text-[clamp(3.6rem,10vw,8.4rem)] font-bold leading-[0.95] tracking-[-0.05em] sm:tracking-[-0.06em]">
              ӨӨРӨӨР АЖИЛЛАЯ
            </p>

            <div className="mt-8 flex flex-col gap-4 border-t border-[#0c0d0c]/10 pt-4 text-xs text-[#0c0d0c]/75 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Dino Clinic. Бүх эрх хуулиар хамгаалагдсан.</p>
              <div className="flex flex-wrap gap-5">
                <a href="#" className="hover:text-[#0c0d0c]">
                  Privacy policy
                </a>
                <a href="#" className="hover:text-[#0c0d0c]">
                  Terms of service
                </a>
                <a href="#" className="hover:text-[#0c0d0c]">
                  Cookie settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
