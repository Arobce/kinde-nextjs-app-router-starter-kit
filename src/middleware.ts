import {
  withAuth,
} from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware(req: import('next/server').NextRequest) {
  },
  {
    publicPaths: ["/", "/api/public", "/terms", "/privacy" ],
  }
);

export const config = {
  matcher: [
    // Run on everything but Next internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)"
  ],
};
