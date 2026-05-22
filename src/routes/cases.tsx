import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import caseRoof from "@/assets/case-rooftop.jpg";
import caseLand from "@/assets/case-land.jpg";

export const Route = createFileRoute("/cases")({
  component: Cases,
  head: () => ({ meta: [{ title: "시공사례 - 그린에너지㈜" }] }),
});

const ALL = [
  { img: caseRoof, title: "삼양1 태양광 발전소", cat: "건물형", capacity: "500kW" },
  { img: caseRoof, title: "미래1호 태양광 발전소", cat: "건물형", capacity: "300kW" },
  { img: caseRoof, title: "미래2호 태양광 발전소", cat: "건물형", capacity: "400kW" },
  { img: caseRoof, title: "부일엠테크 태양광 발전소", cat: "건물형", capacity: "250kW" },
  { img: caseRoof, title: "한성정공 태양광 발전소", cat: "건물형", capacity: "350kW" },
  { img: caseLand, title: "대동솔라팩 1호/2호", cat: "토지형", capacity: "1MW" },
  { img: caseLand, title: "평두메 태양광 발전소", cat: "토지형", capacity: "800kW" },
  { img: caseLand, title: "신당동 태양광 발전소", cat: "토지형", capacity: "600kW" },
  { img: caseLand, title: "우인정 태양광 발전소", cat: "토지형", capacity: "700kW" },
];

function Cases() {
  const [filter, setFilter] = useState<"all" | "건물형" | "토지형">("all");
  const list = ALL.filter((c) => filter === "all" || c.cat === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHero title="시공사례" subtitle="그린에너지가 시공한 태양광 발전소를 소개합니다." breadcrumb={["HOME", "Cases"]} />
      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="flex gap-2 justify-center mb-10">
          {(["all", "건물형", "토지형"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition ${
                filter === t ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {t === "all" ? "전체" : t}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((c, i) => (
            <article key={i} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-soft transition">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
                  {c.cat}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg group-hover:text-primary transition">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">설비 용량 · {c.capacity}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
