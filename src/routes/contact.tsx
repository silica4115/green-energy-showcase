import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "문의하기 - 그린에너지㈜" }, { name: "description", content: "태양광 설치 무료 상담 신청. 그린에너지㈜에 문의하세요." }] }),
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHero title="문의하기" subtitle="궁금한 점이 있으시면 언제든 문의해 주세요." breadcrumb={["HOME", "Contact"]} />
      <main className="flex-1 container mx-auto px-6 py-20 grid lg:grid-cols-5 gap-10">
        <aside className="lg:col-span-2 space-y-5">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <h3 className="text-xl font-bold mb-5">연락처 안내</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-muted-foreground">전화</div>
                  <a href={`tel:${COMPANY.phone}`} className="font-bold text-foreground hover:text-primary">{COMPANY.phoneDisplay}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-muted-foreground">이메일</div>
                  <div className="font-bold">{COMPANY.email}</div>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-muted-foreground">주소</div>
                  <div className="font-bold">{COMPANY.address}</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-muted-foreground">상담 가능시간</div>
                  <div className="font-bold">{COMPANY.hours.consult}</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 text-primary-foreground shadow-soft" style={{ background: "var(--gradient-primary)" }}>
            <div className="text-sm opacity-90">24시간 상담 가능</div>
            <a href={`tel:${COMPANY.phone}`} className="block text-3xl font-bold mt-1">{COMPANY.phoneDisplay}</a>
            <p className="text-sm mt-3 opacity-90">전화로도 빠른 상담이 가능합니다.</p>
          </div>
        </aside>
        <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-2">상담 신청</h2>
          <p className="text-sm text-muted-foreground mb-6">필수 정보를 입력하고 신청해 주세요. 영업일 기준 24시간 이내에 답변드립니다.</p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
