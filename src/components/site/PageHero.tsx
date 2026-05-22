import heroImg from "@/assets/hero-solar.jpg";

export function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb?: string[] }) {
  return (
    <section className="relative h-[55vh] min-h-[360px] flex items-end overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative container mx-auto px-6 pb-16 text-white">
        {breadcrumb && (
          <p className="text-sm text-white/70 mb-3">{breadcrumb.join(" · ")}</p>
        )}
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-white/85 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
