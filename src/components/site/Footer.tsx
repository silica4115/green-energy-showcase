import { Link } from "@tanstack/react-router";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/company";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">{COMPANY.name}</span>
          </div>
          <p className="text-background/70 text-sm leading-relaxed">
            {COMPANY.tagline}
            <br />
            {COMPANY.description}
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">고객센터</h4>
          <ul className="space-y-3 text-sm text-background/80">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-primary-glow" />
              <span>{COMPANY.phoneDisplay}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-primary-glow" />
              <span>{COMPANY.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-primary-glow" />
              <span>{COMPANY.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">바로가기</h4>
          <ul className="space-y-2 text-sm text-background/80">
            <li><Link to="/about" className="hover:text-primary-glow">회사소개</Link></li>
            <li><Link to="/services/om" className="hover:text-primary-glow">사업소개</Link></li>
            <li><Link to="/cases" className="hover:text-primary-glow">시공사례</Link></li>
            <li><Link to="/contact" className="hover:text-primary-glow">문의하기</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-5 text-xs text-background/50 flex flex-col md:flex-row md:justify-between gap-2">
          <span>© {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.</span>
          <span>{COMPANY.address}</span>
        </div>
      </div>
    </footer>
  );
}
