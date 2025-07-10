import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  onlyForUnAuthUser,
  protectedRoutes,
  ROUTES,
} from "./lib/routes/routes";
import { supabaseServer } from "./lib/supabaseServer";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();
  const isLoggedIn = session != null;

  const pathname = req.nextUrl.pathname || "";

  if (isLoggedIn) {
    const hasRequestForAuth = onlyForUnAuthUser.includes(pathname);
    if (hasRequestForAuth) {
      return NextResponse.redirect(new URL(ROUTES.DASHBOARD, req.url));
    }
  } else {
    const isProtected = protectedRoutes.some((e) => pathname.startsWith(e));
    if (isProtected) {
      return NextResponse.redirect(new URL(ROUTES.LOGIN, req.url));
    }
  }

  return res;
}

export const config = {
  matcher: [
    ROUTES.LOGIN,
    ROUTES.REGISTER,
    ROUTES.FORGET_PASSWORD,
    ROUTES.DASHBOARD,
  ],
};
