import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'session';

export async function POST(req: Request) {
  const store = await cookies();
  store.set(COOKIE_NAME, '', { path: '/', maxAge: 0 });
  const url = new URL(req.url);
  const to = url.searchParams.get('to') || '/';
  return NextResponse.redirect(new URL(to, req.url));
}
