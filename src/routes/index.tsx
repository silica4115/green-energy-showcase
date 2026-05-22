import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Users, Wallet, Award, Sun, Leaf, Zap, ClipboardCheck } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { COMPANY } from "@/lib/company";
import heroImg from "@/assets/hero-solar.jpg";
import aboutPanels from "@/assets/about-panels.jpg";
import svcOm from "@/assets/service-om.jpg";
import svcRe from "@/assets/service-re100.jpg";
import svcRps from "@/assets/service-rps.jpg";

export const Route = createFileRoute("/")({ component: Index });

const FEATURES = [
  { icon: Award, n: "01", title: "전문 시공 경험", desc: "다년간의 태양광 발전소 시공 노하우로 모든 단계에서 뛰어난 전문성을 보장합니다." },
  { icon: Users, n: "02", title: "맞춤형 서비스", desc: "고객의 비즈니스 목표에 맞춘 맞춤형 설계와 설비 전략으로 최대 효율을 실현합니다." },
  { icon: ShieldCheck, n: "03", title: "고객 중심 운영", desc: "고객 의견을 존중하고 신속한 피드백으로 신뢰 관계를 구축합니다." },
  { icon: Wallet, n: "04", title: "경제적인 비용", desc: "경쟁력 있는 가격으로 비용 대비 최고의 효율을 보장합니다." },
];

const SERVICES = [
  { img: svcOm, title: "O&M", subtitle: "유지관리 서비스", to: "/services/om", icon: ShieldCheck },
  { img: svcRe, title: "RE100", subtitle: "2050년까지 100% 재생에너지 사용 글로벌 캠페인", to: "/services/re100", icon: Leaf },
  { img: svcRps, title: "태양광발전사업 (RPS)", subtitle: "신재생에너지 공급 의무화 제도", to: "/services/rps", icon: Sun },
];

const CASES = [
  { img: caseRoof, title: "삼양1 태양광 발전소", cat: "건물형" },
  { img: caseRoof, title: "미래1호 태양광 발전소", cat: "건물형" },
  { img: caseLand, title: "대동솔라팩 발전소", cat: "토지형" },
  { img: caseLand, title: "평두메 태양광 발전소", cat: "토지형" },
  { img: caseRoof, title: "한성정공 태양광 발전소", cat: "건물형" },
  { img: caseLand, title: "신당동 태양광 발전소", cat: "토지형" },
];

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={heroImg} alt="태양광 발전소" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container mx-auto px-6 text-white pt-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-sm font-semibold mb-6">
            ☀ {COMPANY.tagline}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] drop-shadow-xl">
            태양광으로<br />
            <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">지속가능한 미래</span>를
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-2xl">{COMPANY.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-white text-primary font-bold shadow-xl hover:scale-105 transition flex items-center gap-2">
              무료 상담 신청 <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/cases" className="px-8 py-4 rounded-full border-2 border-white/70 text-white font-bold hover:bg-white/10 transition">
              시공사례 보기
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur text-primary-foreground">
          <div className="container mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm">
              <div className="opacity-80">평일 · 공휴일 · 24시간 상담</div>
              <a href={`tel:${COMPANY.phone}`} className="text-2xl font-bold tracking-wider">{COMPANY.phoneDisplay}</a>
            </div>
            <Link to="/contact" className="px-6 py-3 bg-white text-primary rounded-full font-bold text-sm hover:scale-105 transition">
              무료상담 신청하기 →
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">About {COMPANY.name}</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            신재생에너지 전문기업<br />
            환경 + 인간의 삶을 가치로 하는 기업
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            그린에너지㈜는 태양광 발전소 설계·시공·운영 전 과정에서<br className="hidden md:block" />
            검증된 기술력과 책임감으로 고객의 가치를 실현합니다.
          </p>
        </div>
      </section>

      {/* CASES */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-widest">Cases</span>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold">그린에너지의 시공사례</h2>
            </div>
            <Link to="/cases" className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              더보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES.map((c, i) => (
              <Link
                key={i}
                to="/cases"
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-card hover:shadow-soft transition-all"
              >
                <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-xs px-2 py-0.5 rounded bg-primary/90 font-semibold">{c.cat}</span>
                  <h3 className="mt-2 text-lg font-bold">{c.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Service</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold">그린에너지의 주요사업</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.title} to={s.to} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-soft hover:-translate-y-1 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                    <s.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.subtitle}</p>
                  <div className="mt-4 text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    자세히 보기 <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary-glow font-bold text-sm uppercase tracking-widest">Why Us</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold">그린에너지는 다릅니다</h2>
            <p className="mt-4 text-background/70">수많은 노하우로 완성하는 신재생 에너지 태양광사업</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div key={f.n} className="bg-background/5 backdrop-blur p-7 rounded-2xl border border-background/10 hover:bg-background/10 transition">
                <div className="text-primary-glow font-bold text-sm mb-3">{f.n}</div>
                <f.icon className="w-10 h-10 text-primary-glow mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-background/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Contact</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold">태양광 견적 문의</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              궁금한 사항은 전화나 온라인으로 문의해 주시면<br />
              친절히 안내해드리겠습니다.
            </p>
            <div className="mt-8 space-y-5">
              <a href={`tel:${COMPANY.phone}`} className="block text-4xl md:text-5xl font-bold text-primary hover:opacity-80 transition">
                {COMPANY.phoneDisplay}
              </a>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-secondary p-4 rounded-xl">
                  <div className="text-xs text-muted-foreground">상담 가능시간</div>
                  <div className="font-bold text-foreground mt-1">{COMPANY.hours.consult}</div>
                </div>
                <div className="bg-secondary p-4 rounded-xl">
                  <div className="text-xs text-muted-foreground">작업 가능시간</div>
                  <div className="font-bold text-foreground mt-1">{COMPANY.hours.work}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
            <h3 className="text-2xl font-bold mb-1">무료 상담 신청</h3>
            <p className="text-sm text-muted-foreground mb-6">간단한 정보를 남겨주시면 빠르게 연락드립니다.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
