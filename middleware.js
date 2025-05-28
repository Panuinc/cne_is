import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(request) {
  const token = await getToken({ req: request, secret });
  const url = request.nextUrl;
  const pathname = url.pathname;

  if (!token) {
    return NextResponse.redirect(new URL("/", url));
  }

  const roleName = token?.user?.roleName;
  const divisionName = token?.user?.divisionName;

  const isAdmin = roleName === "ผู้ดูแลระบบ";
  const isHR = divisionName === "ทรัพยากรบุคคล";

  if (isAdmin || isHR) {
    return NextResponse.next();
  }

  const isRestricted =
    pathname === "/role/create" ||
    pathname.match(/^\/role\/\d+$/) ||
    pathname === "/division/create" ||
    pathname.match(/^\/division\/\d+$/) ||
    pathname === "/department/create" ||
    pathname.match(/^\/department\/\d+$/);

  if (isRestricted) {
    return NextResponse.redirect(new URL("/unauthorized", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/role/:path*", "/division/:path*", "/department/:path*"],
};
