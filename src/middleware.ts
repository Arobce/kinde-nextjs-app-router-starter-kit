import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    if (pathname === "/dashboard" && !req.kindeAuth?.isAuthenticated) {
      const loginUrl = new URL("/api/auth/login", req.url);
      loginUrl.searchParams.set("prompt", "none");
      loginUrl.searchParams.set("post_login_redirect_url", "/dashboard");

      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  },
  {
    publicPaths: ["/", "/api/public", "/terms", "/privacy"],
    isReturnToCurrentPage: true,
  }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};