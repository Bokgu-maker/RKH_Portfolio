import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isLocale } from "./lib/i18n";

/**
 * Proxy (formerly "middleware" in older Next.js) — runs before routes render.
 * Redirects locale-less paths (e.g. "/") to a locale prefix ("/ko"),
 * picking the best match from the visitor's Accept-Language header.
 */

function pickLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (header) {
    // e.g. "ko-KR,ko;q=0.9,en;q=0.8" -> ["ko-kr", "ko", "en"]
    const preferred = header
      .split(",")
      .map((part) => part.split(";")[0].trim().toLowerCase());
    for (const lang of preferred) {
      const base = lang.split("-")[0];
      if (isLocale(base)) return base;
    }
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = pickLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals, API routes, and files with an extension (assets).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
