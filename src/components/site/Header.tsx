import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { COMPANY } from "@/lib/company";

const NAV = [
  {
    label: "회사소개",
    to: "/about",
    children: [
      { label: "인사말", to: "/about" },
      { label: "주요업무", to: "/about/business" },
      { label: "연혁", to: "/about/history" },
      { label: "오시는길", to: "/about/location" },
    ],
  },
  {
    label: "사업소개",
    to: "/services/om",
    children: [
      { label: "O&M", to: "/services/om" },
      { label: "RE100", to: "/services/re100" },
      { label: "태양광발전사업(RPS)", to: "/services/rps" },
      { label: "정부지원사업", to: "/services/gov" },
      { label: "모듈인버터", to: "/services/module" },
      { label: "사업성 검토", to: "/services/review" },
    ],
  },
  {
    label: "시공사례",
    to: "/cases",
    children: [
      { label: "건물형", to: "/cases" },
      { label: "토지형", to: "/cases?type=land" },
    ],
  },
  { label: "문의하기", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
            <Leaf className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? "text-foreground" : "text-white drop-shadow"}`}>
            {COMPANY.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.to}
                className={`px-5 py-2 text-sm font-semibold transition-colors ${
                  scrolled ? "text-foreground hover:text-primary" : "text-white/95 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-card rounded-xl shadow-lg border border-border py-2 min-w-[180px]">
                    {item.children.map((c) => (
                      <Link
                        key={c.to + c.label}
                        to={c.to}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${COMPANY.phone}`}
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            {COMPANY.phoneDisplay}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="메뉴"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV.flatMap((item) =>
              item.children
                ? item.children.map((c) => (
                    <Link
                      key={c.to + c.label}
                      to={c.to}
                      onClick={() => setOpen(false)}
                      className="py-3 px-3 text-foreground hover:bg-secondary rounded-lg"
                    >
                      <span className="text-xs text-muted-foreground mr-2">{item.label}</span>
                      {c.label}
                    </Link>
                  ))
                : [
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="py-3 px-3 font-semibold text-foreground hover:bg-secondary rounded-lg"
                    >
                      {item.label}
                    </Link>,
                  ]
            )}
            <a href={`tel:${COMPANY.phone}`} className="mt-3 py-3 text-center bg-primary text-primary-foreground rounded-full font-bold">
              {COMPANY.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
