import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import termsText from "@/content/terms.txt?raw";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "이용약관 - 그린에너지㈜" },
      { name: "description", content: "그린에너지㈜ 이용약관" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHero title="이용약관" breadcrumb={["HOME", "이용약관"]} />
      <main className="container mx-auto px-6 py-16 max-w-4xl flex-1">
        <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-foreground/90">
{termsText}
        </pre>
      </main>
      <Footer />
    </div>
  );
}
