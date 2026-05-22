import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Users, Wallet, Award, Sun, Leaf, Zap, ClipboardCheck, Home, Building2, Sprout, Wrench, BarChart3, Phone, Search, FileText, FileCheck, HardHat, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { COMPANY } from "@/lib/company";
import heroImg from "@/assets/hero-solar.jpg";
import aboutPanels from "@/assets/about-panels.jpg";
import svcOm from "@/assets/service-om.jpg";
import svcRe from "@/assets/service-re100.jpg";
import svcRps from "@/assets/service-rps.jpg";
import prodModule from "@/assets/product-module.jpg";
import prodInverter from "@/assets/product-inverter.jpg";
import prodEss from "@/assets/product-ess.jpg";
import prodStructure from "@/assets/product-structure.jpg";


export const Route = createFileRoute("/")({ component: Index });

const FEATURES = [
  { icon: Award, n: "01", title: "전문 시공 경험", desc: "다년간의 태양광 발전소 시공 노하우로 모든 단계에서 뛰어난 전문성을 보장합니다." },
  { icon: Users, n: "02", title: "맞춤형 서비스", desc: "고객의 비즈니스 목표에 맞춘 맞춤형 설계와 설비 전략으로 최대 효율을 실현합니다." },
  { icon: ShieldCheck, n: "03", title: "고객 중심 운영", desc: "고객 의견을 존중하고 신속한 피드백으로 신뢰 관계를 구축합니다." },
  { icon: Wallet, n: "04", title: "경제적인 비용", desc: "경쟁력 있는 가격으로 비용 대비 최고의 효율을 보장합니다." },
];

const SERVICES = [
  { icon: Home, title: "주택용 태양광", desc: "단독주택, 아파트, 전원주택 등 다양한 주거형태에 맞는 소형 태양광 시스템을 설치합니다.", items: ["3kW ~ 10kW 소형 시스템", "지붕형 / 건물 일체형", "자가 소비 + 여유분 판매", "신재생에너지 보조금 신청 대행"] },
  { icon: Building2, title: "상업용 태양광", desc: "공장, 창고, 상가, 물류센터 등 상업용 건물의 유휴 옥상을 활용한 중대형 태양광 발전 시스템을 구축합니다.", items: ["10kW ~ 500kW 중형 시스템", "전력 판매 수익 극대화", "REC 발급 및 판매 지원", "시설 전기료 절감 컨설팅"] },
  { icon: Sprout, title: "영농형 태양광", desc: "농지 위에 태양광 패널을 설치하여 농업과 발전을 동시에 진행하는 영농형 태양광 시스템을 공급합니다.", items: ["영농형 특화 설계", "농업 생산성 유지", "농업인 보조금 연계", "이중 수익 구조 실현"] },
  { icon: Zap, title: "ESS 에너지 저장장치", desc: "태양광 발전과 연계한 에너지 저장장치(ESS)를 도입하여 안정적인 전력 공급이 가능합니다.", items: ["리튬인산철 배터리 적용", "계통 연계 / 독립형 선택", "피크 제어 및 요금 절감", "원격 모니터링 시스템"] },
  { icon: Wrench, title: "유지보수 & AS", desc: "타사 설치 제품을 포함한 모든 태양광 시스템의 점검, 세척, 부품 교체, 고장 수리 서비스를 제공합니다.", items: ["정기 점검 계약 서비스", "패널 클리닝 서비스", "인버터 교체 및 수리", "발전량 이상 진단"] },
  { icon: BarChart3, title: "발전사업 컨설팅", desc: "태양광 발전소 부지 발굴부터 사업성 분석, 인허가, 계통 연계, 운영까지 전 과정을 전문 컨설팅합니다.", items: ["부지 타당성 분석", "수익성 시뮬레이션", "전기사업 허가 대행", "한전 계통 연계 지원"] },
];

const PROCESS = [
  { n: "01", icon: Phone, title: "무료 상담 및 현장 방문", desc: "전화 또는 온라인 상담 후 전문 엔지니어가 현장을 방문하여 설치 가능 여부 및 최적 용량을 진단합니다." },
  { n: "02", icon: Search, title: "맞춤 설계 및 견적", desc: "현장 조건에 맞는 최적의 시스템을 설계하고 상세 견적서를 제공합니다." },
  { n: "03", icon: FileText, title: "인허가 및 계통 신청", desc: "한국전력 계통 연계 신청, 건축 신고, 전기공사 허가 등 모든 행정절차를 대행 처리합니다." },
  { n: "04", icon: HardHat, title: "전문 시공", desc: "숙련된 시공팀이 안전하고 꼼꼼하게 설치합니다. 전기공사 및 구조물 설치 모두 자체 인력으로 진행합니다." },
  { n: "05", icon: FileCheck, title: "준공 검사 및 사후관리", desc: "설치 완료 후 성능 테스트와 사용 방법 안내를 드리며, 정기 점검 및 AS 서비스를 제공합니다." },
];

const PRODUCTS = [
  { img: prodModule, title: "고효율 단결정 태양광 모듈", desc: "최신 PERC 셀 기술을 적용한 고효율 단결정 태양광 모듈로, 모듈 효율 21% 이상을 달성합니다.", specs: ["효율 21% 이상", "25년 성능 보증", "KC 인증"] },
  { img: prodInverter, title: "스트링 / 마이크로 인버터", desc: "국내외 주요 브랜드의 인버터를 취급합니다. 설치 환경에 맞는 최적의 인버터를 선정·공급하며 MPPT 효율 99% 이상을 보장합니다.", specs: ["MPPT 99% 이상", "원격 모니터링", "10년 AS"] },
  { img: prodEss, title: "ESS 배터리 시스템", desc: "리튬인산철(LFP) 배터리 기반의 안전하고 수명이 긴 에너지 저장장치입니다. 잉여 전력을 저장하고 야간이나 비상시에 활용합니다.", specs: ["LFP 배터리", "6kWh ~ 20kWh", "10년 보증"] },
  { img: prodStructure, title: "태양광 구조물 시스템", desc: "지붕형, 지상형, 카포트형 등 다양한 환경에 맞는 알루미늄 및 용융아연도금 스틸 구조물을 설계·제작합니다.", specs: ["지붕형 / 지상형", "카포트형", "구조 계산 포함"] },
];

const ABOUT_FEATURES = [
  { icon: Zap, title: "고효율 태양광 모듈", desc: "최신 고효율 모노크리스탈 태양전지를 사용하여 최대 발전 효율을 실현합니다." },
  { icon: ShieldCheck, title: "체계적 사후관리", desc: "설치 완료 후에도 정기 점검 및 AS 서비스를 통해 안정적인 발전을 보장합니다." },
  { icon: ClipboardCheck, title: "인허가 원스톱 대행", desc: "전기 사업 허가부터 한전 계통 연계, 각종 보조금 신청까지 모두 대행합니다." },
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

      {/* ABOUT / INTRO */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-soft">
              <img
                src={aboutPanels}
                alt="태양광 모듈 설치 전경"
                loading="lazy"
                width={1280}
                height={1280}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-2 md:right-6 px-8 py-6 rounded-2xl shadow-xl text-primary-foreground text-center"
              style={{ background: "var(--gradient-primary)" }}
            >
              <div className="text-4xl md:text-5xl font-extrabold leading-none">20+</div>
              <div className="mt-1 text-xs font-bold tracking-widest">YEARS EXPERIENCE</div>
            </div>
          </div>

          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-widest">회사 소개</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              신뢰와 기술로<br />
              만드는 에너지 미래
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              주식회사 그린에너지는 경기도 화성시를 중심으로 태양광 발전 사업의 모든 분야를 아우르는
              종합 에너지 솔루션 기업입니다. 최신 기술과 풍부한 시공 경험을 바탕으로 고객 맞춤형
              최적의 태양광 시스템을 제안합니다.
            </p>

            <div className="mt-8 space-y-5">
              {ABOUT_FEATURES.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
