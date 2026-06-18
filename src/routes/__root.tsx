import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const mainNavItems = [
  { href: "/#", en: "Home", tc: "首頁" },
  { href: "/#client-journey", en: "Client Journey", tc: "客戶故事" },
  { href: "/#mandate", en: "Mandate", tc: "委託" },
  { href: "/faq", en: "Common Question", tc: "常見問題" },
  { href: "/#about", en: "About Us", tc: "關於我們" },
];

const serviceNavItems = [
  { href: "/property-management", en: "Property Management", tc: "房源管理" },
  { href: "/#resell", en: "Resell", tc: "中古房" },
  { href: "/#rental", en: "Rental", tc: "出租" },
  { href: "/#presell", en: "PreSell", tc: "預售/新成屋" },
];

const lineAddUrl = "https://line.me/R/ti/p/@256ttfky";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
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
      { title: "Lovable App" },
      { name: "description", content: "A premium bilingual real estate website for KHANTHAROS PROPERTY, offering property sales, management, and investment services in Thailand." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "A premium bilingual real estate website for KHANTHAROS PROPERTY, offering property sales, management, and investment services in Thailand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "A premium bilingual real estate website for KHANTHAROS PROPERTY, offering property sales, management, and investment services in Thailand." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6d77de92-2741-4f46-9ca5-97091b0fdf58/id-preview-5d264156--b5aeddf7-3728-45fa-9e77-b11abe4aa646.lovable.app-1781690723375.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6d77de92-2741-4f46-9ca5-97091b0fdf58/id-preview-5d264156--b5aeddf7-3728-45fa-9e77-b11abe4aa646.lovable.app-1781690723375.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Inter:wght@300;400;500;600&family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;500;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteNavigation() {
  return (
    <nav className="fixed top-0 inset-x-0 z-[60] bg-background/95 backdrop-blur-xl border-b border-border/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between gap-4">
        <a href="/#" className="flex flex-col leading-none shrink-0" aria-label="KHANTHAROS PROPERTY home">
          <span className="font-display text-lg md:text-xl tracking-[0.2em] font-medium text-brand-ink">
            KHANTHAROS
          </span>
          <span className="text-[10px] tracking-[0.35em] uppercase text-brand-clay mt-1">
            Property · 泰式安居
          </span>
        </a>

        <div className="hidden xl:flex items-center gap-5 text-[10px] uppercase tracking-[0.16em] font-medium">
          {mainNavItems.slice(0, 2).map((item) => (
            <a key={item.en} href={item.href} className="text-brand-ink/80 hover:text-brand-forest transition-colors whitespace-nowrap">
              {item.en}
              <span className="ml-2 font-serif-tc text-brand-clay/75 normal-case tracking-normal">{item.tc}</span>
            </a>
          ))}

          <div className="relative group">
            <a href="/#services" className="text-brand-ink/80 hover:text-brand-forest transition-colors whitespace-nowrap py-8 inline-flex">
              Service
              <span className="ml-2 font-serif-tc text-brand-clay/75 normal-case tracking-normal">服務項目</span>
            </a>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-1/2 top-full w-72 -translate-x-1/2 border border-border bg-background shadow-xl transition-all duration-200">
              {serviceNavItems.map((item) => (
                <a
                  key={item.en}
                  href={item.href}
                  className="block px-5 py-4 border-b border-border/60 last:border-b-0 text-brand-ink hover:bg-brand-cream hover:text-brand-forest transition-colors"
                >
                  <span className="block text-[10px] uppercase tracking-[0.18em]">{item.en}</span>
                  <span className="mt-1 block font-serif-tc text-sm tracking-normal text-brand-clay">{item.tc}</span>
                </a>
              ))}
            </div>
          </div>

          {mainNavItems.slice(2).map((item) => (
            <a key={item.en} href={item.href} className="text-brand-ink/80 hover:text-brand-forest transition-colors whitespace-nowrap">
              {item.en}
              <span className="ml-2 font-serif-tc text-brand-clay/75 normal-case tracking-normal">{item.tc}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/#services"
            className="hidden sm:inline-flex xl:hidden text-[10px] uppercase tracking-[0.18em] text-brand-ink/80 hover:text-brand-forest transition-colors"
          >
            Menu
          </a>
          <a
            href={lineAddUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Add KHANTHAROS PROPERTY on LINE"
            className="inline-flex h-10 items-center justify-center bg-[#06C755] px-4 md:px-5 text-[11px] uppercase tracking-[0.18em] font-semibold text-white transition-colors hover:bg-[#05b34d]"
          >
            LINE
          </a>
        </div>
      </div>
    </nav>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteNavigation />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
