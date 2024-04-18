import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/admin-dashboard"],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
