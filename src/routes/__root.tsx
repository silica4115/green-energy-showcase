import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">페이지를 찾을 수 없습니다</h2>
        <p className="mt-2 text-sm text-muted-foreground">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          홈으로
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">페이지를 불러오지 못했습니다</h1>
        <p className="mt-2 text-sm text-muted-foreground">잠시 후 다시 시도해 주세요.</p>
        <div className="mt-6 flex gap-2 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">다시 시도</button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm font-medium">홈으로</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "화성 태양광 그린신재생에너지 태양광 전문기업" },
      { name: "description", content: "그린에너지㈜는 태양광 발전, O&M, RE100, RPS, 정부지원사업을 전문으로 하는 신재생에너지 기업입니다." },
      { property: "og:title", content: "화성 태양광 그린신재생에너지 태양광 전문기업" },
      { property: "og:description", content: "그린에너지㈜는 태양광 발전, O&M, RE100, RPS, 정부지원사업을 전문으로 하는 신재생에너지 기업입니다." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "화성 태양광 그린신재생에너지 태양광 전문기업" },
      { name: "twitter:description", content: "그린에너지㈜는 태양광 발전, O&M, RE100, RPS, 정부지원사업을 전문으로 하는 신재생에너지 기업입니다." },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
