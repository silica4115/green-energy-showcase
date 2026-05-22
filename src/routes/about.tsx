import { createFileRoute, Outlet, Link, useLocation } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  component: AboutLayout,
  head: () => ({ meta: [{ title: "회사소개 - 그린에너지㈜" }] }),
});

const TABS = [
  { to: "/about", label: "인사말" },
  { to: "/about/business", label: "주요업무" },
  { to: "/about/history", label: "연혁" },
  { to: "/about/location", label: "오시는길" },
];

function AboutLayout() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHero title="회사소개" subtitle="그린에너지㈜는 신재생에너지 전문기업입니다." breadcrumb={["HOME", "About"]} />
      <nav className="border-b border-border bg-background sticky top-20 z-30">
        <div className="container mx-auto px-6 flex overflow-x-auto">
          {TABS.map((t) => {
            const active = pathname === t.to;
            return (
              <Link
                key={t.to}
                to={t.to}
                className={`px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition ${
                  active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
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
