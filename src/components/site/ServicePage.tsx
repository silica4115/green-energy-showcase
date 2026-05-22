import { CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ServicePage({ title, subtitle, image, intro, bullets, sections }: {
  title: string;
  subtitle: string;
  image: string;
  intro: string;
  bullets: string[];
  sections?: { heading: string; body: string }[];
}) {
  return (
    <article className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Service</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
          <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>
          <p className="mt-6 text-base leading-relaxed text-foreground/90">{intro}</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3]">
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      <div className="mt-14 bg-secondary/50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-5">주요 특징</h3>
        <ul className="grid md:grid-cols-2 gap-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 bg-background p-4 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {sections?.map((s) => (
        <section key={s.heading} className="mt-12">
          <h3 className="text-2xl font-bold mb-3">{s.heading}</h3>
          <p className="text-foreground/85 leading-relaxed">{s.body}</p>
        </section>
      ))}

      <div className="mt-14 p-8 rounded-2xl text-primary-foreground text-center shadow-soft" style={{ background: "var(--gradient-primary)" }}>
        <h3 className="text-2xl font-bold">전문 상담이 필요하신가요?</h3>
        <p className="mt-2 opacity-90">그린에너지 전문가가 친절하게 안내해 드립니다.</p>
        <Link to="/contact" className="mt-5 inline-block px-7 py-3 rounded-full bg-white text-primary font-bold hover:scale-105 transition">
          무료 상담 신청 →
        </Link>
      </div>
    </article>
  );
}
