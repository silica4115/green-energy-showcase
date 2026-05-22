import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/case-land.jpg";

export const Route = createFileRoute("/services/review")({ component: () => (
  <ServicePage
    title="사업성 검토"
    subtitle="데이터 기반의 정확한 수익성 분석"
    image={img}
    intro="태양광 발전사업의 성공은 정확한 사업성 검토에서 시작됩니다. 그린에너지는 부지 환경, 일사량, SMP/REC 가격, 인허가 가능성을 종합 분석하여 최적의 투자 판단을 도와드립니다."
    bullets={["부지 일사량 시뮬레이션", "예상 발전량 산출", "투자 회수 기간 분석", "20년 손익 시뮬레이션", "인허가 가능성 검토", "금융 조달 상담"]}
  />
) });
