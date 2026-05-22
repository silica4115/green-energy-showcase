import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/case-rooftop.jpg";

export const Route = createFileRoute("/services/gov")({ component: () => (
  <ServicePage
    title="정부지원사업"
    subtitle="다양한 정부 보조금과 지원 사업을 활용하세요"
    image={img}
    intro="정부와 지자체는 신재생에너지 보급 확대를 위해 다양한 지원 사업을 운영하고 있습니다. 그린에너지는 보조금 신청부터 시공, 사후관리까지 원스톱 서비스를 제공합니다."
    bullets={["주택지원사업", "건물지원사업", "융복합지원사업", "지역지원사업", "농어촌 태양광 보급", "에너지자립마을 사업"]}
    sections={[{ heading: "복잡한 절차, 그린에너지가 해결합니다", body: "정부지원사업은 신청 시기, 자격 요건, 서류 준비 등이 복잡합니다. 풍부한 경험을 가진 전담 인력이 까다로운 절차를 대행해 드립니다." }]}
  />
) });
