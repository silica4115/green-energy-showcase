import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/service-re100.jpg";

export const Route = createFileRoute("/services/re100")({ component: () => (
  <ServicePage
    title="RE100"
    subtitle="기업의 100% 재생에너지 전환을 지원합니다"
    image={img}
    intro="RE100은 2050년까지 기업들이 필요한 전력을 100% 재생에너지로 사용하겠다는 자발적인 글로벌 캠페인입니다. 그린에너지는 RE100 가입 컨설팅부터 PPA, 자가발전 설치까지 통합 솔루션을 제공합니다."
    bullets={["RE100 이행 전략 컨설팅", "PPA(전력구매계약) 중개", "자가소비형 태양광 설치", "REC 구매 대행", "탄소중립 로드맵 수립", "ESG 보고 지원"]}
    sections={[{ heading: "RE100의 가치", body: "RE100 가입은 단순한 친환경 활동을 넘어 글로벌 공급망에서의 경쟁력 확보, 투자 유치, 브랜드 가치 향상으로 이어집니다. Apple, Google 등 글로벌 기업들은 협력사에도 재생에너지 사용을 요구하고 있어 선제적 대응이 필수입니다." }]}
  />
) });
