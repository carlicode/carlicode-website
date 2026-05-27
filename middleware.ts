import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-pathname", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/es", request.url));
  }

  if (pathname === "/influencer") {
    return NextResponse.redirect(new URL("/es/media-kit", request.url));
  }

  if (pathname === "/hobbies") {
    return NextResponse.redirect(new URL("/es/hobbies", request.url));
  }

  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
