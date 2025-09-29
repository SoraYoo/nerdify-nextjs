import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

const COOKIE_NAME = 'session';

export async function POST(req: Request) {
  const { id, password } = await req.json();
  if (!id || !password) return NextResponse.json({ error: 'Missing id or password' }, { status: 400 });

  const artist = await prisma.artist.findFirst({ where: { id, isDel: 'N' } });
  if (!artist) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const ok = await bcrypt.compare(password, artist.password);
  if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  await prisma.artist.update({ where: { artistNo: artist.artistNo }, data: { loginDate: new Date() } });

  cookies().set(COOKIE_NAME, String(artist.artistNo), { httpOnly: true, sameSite: 'lax', path: '/' });

  return NextResponse.json({ ok: true });
}
