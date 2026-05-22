import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Train } from "lucide-react";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/about/location")({ component: Location });

function Location() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed`;
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold">오시는 길</h2>
      <p className="mt-3 text-muted-foreground">그린에너지 본사로 오시는 길을 안내해드립니다.</p>

      <div className="mt-10 rounded-2xl overflow-hidden border border-border shadow-card aspect-[16/9]">
        <iframe src={mapSrc} className="w-full h-full" loading="lazy" title="그린에너지 위치" />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-5">
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 text-primary font-bold"><MapPin className="w-5 h-5" /> 주소</div>
          <p className="mt-2 font-semibold">{COMPANY.address}</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 text-primary font-bold"><Phone className="w-5 h-5" /> 연락처</div>
          <p className="mt-2 font-semibold">{COMPANY.phoneDisplay}</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 text-primary font-bold"><Mail className="w-5 h-5" /> 이메일</div>
          <p className="mt-2 font-semibold">{COMPANY.email}</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 text-primary font-bold"><Train className="w-5 h-5" /> 교통</div>
          <p className="mt-2 text-sm">경기도 화성시 남양읍 일대 · 주차 가능</p>
        </div>
      </div>
    </div>
  );
}
