import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/service-rps.jpg";

export const Route = createFileRoute("/services/module")({ component: () => (
  <ServicePage
    title="모듈 · 인버터"
    subtitle="검증된 글로벌 브랜드의 고효율 모듈과 인버터"
    image={img}
    intro="태양광 발전소의 핵심 부품인 모듈과 인버터의 품질은 발전 효율과 수명에 직결됩니다. 그린에너지는 국내외 1티어 브랜드 제품만을 공급하여 최고의 성능을 보장합니다."
    bullets={["국내·해외 1티어 모듈 공급", "고효율 N-Type 모듈", "스트링·마이크로 인버터", "25년 출력 보증", "한국에너지공단 인증 제품", "AS 네트워크 완비"]}
  />
) });
