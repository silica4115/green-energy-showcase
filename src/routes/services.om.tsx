import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/service-om.jpg";

export const Route = createFileRoute("/services/om")({ component: () => (
  <ServicePage
    title="O&M 유지관리 서비스"
    subtitle="발전소의 안정적 운영과 최대 발전량을 보장합니다"
    image={img}
    intro="O&M(Operation & Maintenance)은 태양광 발전소의 운영과 유지보수를 체계적으로 관리하여 장기적으로 안정적인 발전 효율과 수익을 유지하기 위한 핵심 서비스입니다. 그린에너지는 정기 점검부터 긴급 대응까지 전문 인력과 모니터링 시스템으로 완벽하게 관리합니다."
    bullets={["실시간 발전량 모니터링", "정기 점검 및 청소", "고장 발생 시 신속 대응", "성능 분석 리포트 제공", "예방 정비 프로그램", "원격 진단 시스템"]}
    sections={[{ heading: "왜 O&M이 중요한가요?", body: "태양광 모듈은 시간이 지나면서 오염, 음영, 인버터 고장 등으로 발전량이 저하될 수 있습니다. 체계적인 O&M을 통해 발전 효율을 평균 5~15% 향상시킬 수 있으며, 수익성을 극대화할 수 있습니다." }]}
  />
) });
