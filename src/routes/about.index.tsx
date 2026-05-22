import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/about/")({ component: Greeting });

function Greeting() {
  return (
    <article className="max-w-4xl mx-auto">
      <span className="text-primary font-bold text-sm uppercase tracking-widest">CEO Message</span>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
        환경과 인간의 삶을 가치로 하는<br />
        <span className="text-primary">정직한 기업</span>이 되겠습니다.
      </h2>
      <div className="mt-10 space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
        <p>
          안녕하십니까. {COMPANY.fullName} 홈페이지를 방문해주신 모든 분들께 진심으로 감사드립니다.
        </p>
        <p>
          저희 그린에너지는 태양광 발전소의 설계, 시공, 운영(O&M)에 이르는 전 과정을 책임지고 있는 신재생에너지 전문기업입니다.
          기후 위기와 에너지 전환의 시대에 친환경 에너지의 가치를 실현하고, 고객과 함께 지속가능한 미래를 만들어 가는 것이 저희의 사명입니다.
        </p>
        <p>
          오랜 시간 축적한 기술력과 책임감으로 RPS, RE100, 정부지원사업 등 다양한 분야에서 최고 수준의 서비스를 제공하고 있으며,
          앞으로도 끊임없는 혁신과 노력을 통해 고객 여러분의 신뢰에 보답하겠습니다.
        </p>
        <p className="font-semibold pt-4">{COMPANY.fullName} 대표이사 최은성 드림</p>
      </div>
    </article>
  );
}
