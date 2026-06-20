import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute right-[-5rem] top-[18rem] h-96 w-96 rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute left-1/2 top-[36rem] h-80 w-80 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
      </div>

      <HeroSection />
    </main>
  );
}
