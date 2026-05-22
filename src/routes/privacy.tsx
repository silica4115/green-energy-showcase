import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import privacyText from "@/content/privacy.txt?raw";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "개인정보처리방침 - 그린에너지㈜" },
      { name: "description", content: "그린에너지㈜ 개인정보처리방침" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHero title="개인정보처리방침" breadcrumb={["HOME", "개인정보처리방침"]} />
      <main className="container mx-auto px-6 py-16 max-w-4xl flex-1">
        <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-foreground/90">
{privacyText}
        </pre>
      </main>
      <Footer />
    </div>
  );
}
