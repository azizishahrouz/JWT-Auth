import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {decrypt} from "../app/lib/session"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("session")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    await decrypt(token); // بررسی می‌کنه توکن معتبره یا نه
    return NextResponse.next(); // اوکی، بذار صفحه لود بشه
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"], // فقط برای مسیرهای داشبورد اعمال میشه
};
