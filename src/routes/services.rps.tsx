import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/service-rps.jpg";

export const Route = createFileRoute("/services/rps")({ component: () => (
  <ServicePage
    title="태양광 발전사업 (RPS)"
    subtitle="신재생에너지 공급의무화 제도 기반 발전사업"
    image={img}
    intro="RPS(Renewable Portfolio Standard)는 일정 규모(500MW) 이상의 발전설비를 보유한 발전사업자에게 총 발전량의 일정 비율 이상을 신재생에너지로 공급하도록 의무화한 제도입니다. 그린에너지는 RPS 사업 진입부터 운영까지 모든 과정을 지원합니다."
    bullets={["부지 발굴 및 사업성 검토", "인허가 일괄 대행", "EPC 시공 (설계·조달·시공)", "한전 계통 연계 지원", "SMP+REC 판매 대행", "장기 O&M 운영"]}
    sections={[{ heading: "안정적인 장기 수익", body: "RPS 발전사업은 SMP와 REC 판매를 통해 20년 이상 안정적인 수익을 창출할 수 있는 사업입니다. 그린에너지의 전문 컨설팅과 시공 노하우로 수익성을 극대화하세요." }]}
  />
) });
