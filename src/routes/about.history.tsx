import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/history")({ component: History });

const HISTORY = [
  { year: "2024", items: ["대형 발전소 다수 준공", "정부지원사업 확대"] },
  { year: "2023", items: ["RE100 컨설팅 사업 진출", "누적 시공 용량 50MW 돌파"] },
  { year: "2022", items: ["O&M 전문 인력 확충", "ISO 인증 취득"] },
  { year: "2021", items: ["화성 본사 이전", "RPS 발전소 시공 본격화"] },
  { year: "2020", items: ["그린에너지㈜ 설립"] },
];

function History() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold">연혁</h2>
      <p className="mt-3 text-muted-foreground">그린에너지가 걸어온 길</p>
      <ol className="mt-12 relative border-l-2 border-primary/30 space-y-10 pl-8">
        {HISTORY.map((h) => (
          <li key={h.year} className="relative">
            <span className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-primary/20" />
            <div className="text-3xl font-bold text-primary">{h.year}</div>
            <ul className="mt-2 space-y-1 text-foreground/90">
              {h.items.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
