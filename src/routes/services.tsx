import { createFileRoute, Outlet, Link, useLocation } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({ component: ServicesLayout });

const TABS = [
  { to: "/services/om", label: "O&M" },
  { to: "/services/re100", label: "RE100" },
  { to: "/services/rps", label: "RPS" },
  { to: "/services/gov", label: "정부지원사업" },
  { to: "/services/module", label: "모듈인버터" },
  { to: "/services/review", label: "사업성 검토" },
];

function ServicesLayout() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHero title="사업소개" subtitle="태양광 사업 전 영역의 전문 서비스" breadcrumb={["HOME", "Service"]} />
      <nav className="border-b border-border bg-background sticky top-20 z-30">
        <div className="container mx-auto px-6 flex overflow-x-auto">
          {TABS.map((t) => {
            const active = pathname === t.to;
            return (
              <Link key={t.to} to={t.to} className={`px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition ${active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                {t.label}
              </Link>
            );
          })}
        </div>
      </nav>
      <main className="flex-1 container mx-auto px-6 py-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
