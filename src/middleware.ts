import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ROUTES } from "./lib/routes/routes";
import { supabaseServer } from "./lib/supabaseServer";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();
  const isLoggedIn = session != null;

  const pathname = req.nextUrl.pathname || "";

  if (isLoggedIn) {
    const hasRequestForAuth =
      ROUTES.AUTH.LOGIN == pathname || ROUTES.AUTH.REGISTER == pathname;
    if (hasRequestForAuth) {
      return NextResponse.redirect(new URL(ROUTES.DASHBOARD, req.url));
    }
  } else {
    const isProtected = ROUTES.DASHBOARD.includes(pathname);
    if (isProtected) {
      return NextResponse.redirect(new URL(ROUTES.AUTH.LOGIN, req.url));
    }
  }

  return res;
}

// export const config = {
//   matcher: [
//     ROUTES.LOGIN,
//     ROUTES.REGISTER,
//     ROUTES.FORGET_PASSWORD,
//     ROUTES.DASHBOARD,
//   ],
// };
