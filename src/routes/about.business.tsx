import { createFileRoute } from "@tanstack/react-router";
import { Sun, Wrench, FileCheck, Building2, BarChart3, Zap } from "lucide-react";

export const Route = createFileRoute("/about/business")({ component: Business });

const ITEMS = [
  { icon: Sun, title: "태양광 발전소 설계", desc: "현장 환경에 최적화된 발전소 설계" },
  { icon: Wrench, title: "EPC 시공", desc: "설계부터 조달, 시공까지 일괄 수행" },
  { icon: FileCheck, title: "인허가 대행", desc: "복잡한 인허가 절차를 빠르게" },
  { icon: Building2, title: "O&M 유지보수", desc: "장기적인 발전 효율 보장" },
  { icon: BarChart3, title: "사업성 검토", desc: "데이터 기반 수익성 분석" },
  { icon: Zap, title: "RE100 컨설팅", desc: "기업 재생에너지 100% 전환 지원" },
];

function Business() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold">주요업무</h2>
      <p className="mt-3 text-muted-foreground">태양광 발전사업의 모든 단계를 책임집니다.</p>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ITEMS.map((it) => (
          <div key={it.title} className="bg-card border border-border rounded-2xl p-6 hover:shadow-soft transition">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <it.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">{it.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
