import { NextRequest, NextResponse } from "next/server";
import { authenticated } from "./utils/auth-server-utils";
import { FetchUserAttributesOutput } from "aws-amplify/auth";

export type UserRole = "user" | "admin" | "hr" | "tl";

const authRoutes = ["/sign-in"];

const userRoutes = ["/user"];

const adminRoutes = ["/admin"];

const hrRoutes = ["/hr"];

const tlRoutes = ["/tl"];

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();
  const { nextUrl } = request;

  console.log("middleware");

  const user: FetchUserAttributesOutput = await authenticated({
    request,
    response,
  });

  if (!user) {
    return NextResponse.redirect(new URL("/sign-in", nextUrl));
  }

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isUserRoute = userRoutes.includes(nextUrl.pathname);
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname);
  const isHrRoute = hrRoutes.includes(nextUrl.pathname);
  const isTlRoute = tlRoutes.includes(nextUrl.pathname);

  if (user && isAuthRoute) {
    return NextResponse.redirect(new URL("/user", nextUrl));
  }
};

export const config = {
  macther: ["/((?!.*\\..*|_next|amplify).*)", "/", "/(api|trpc)(.*)"],
};
