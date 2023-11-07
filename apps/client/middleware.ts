import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { i18n } from './i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';

function getLocale(request: NextRequest): string | undefined {
  const { defaultLocale, locales } = i18n;
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is no locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Redirect the client to the path with locale
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/` or file with extensions
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
