import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

async function getArtistNoFromSession(): Promise<number | null> {
  const store = await cookies();
  const v = store.get('session')?.value;
  if (!v) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

export async function GET() {
  const artistNo = await getArtistNoFromSession();
  if (!artistNo) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const site = await prisma.site.findUnique({ where: { artistNo } });
  return NextResponse.json(site);
}

export async function POST(req: Request) {
  const artistNo = await getArtistNoFromSession();
  if (!artistNo) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await req.json();

  // Allow partial updates; when creating first time, fill required fields with safe defaults
  const existing = await prisma.site.findUnique({ where: { artistNo } });
  let saved;
  if (existing) {
    saved = await prisma.site.update({ where: { artistNo }, data });
  } else {
    saved = await prisma.site.create({
      data: {
        artistNo,
        artistName: data.artistName ?? 'Artist',
        email: data.email ?? '',
        instagramLink: data.instagramLink ?? null,
        youtubeLink: data.youtubeLink ?? null,
        spotifyLink: data.spotifyLink ?? null,
        spotifyAlbumLink: data.spotifyAlbumLink ?? null,
        patreonLink: data.patreonLink ?? null,
        patreonProfileImageUrl: data.patreonProfileImageUrl ?? null,
        mainImageUrl: data.mainImageUrl ?? null,
        mainTitle: data.mainTitle ?? null,
        mainDescription: data.mainDescription ?? null,
        mainVideoLink: data.mainVideoLink ?? null,
        youtubeProfileLink: data.youtubeProfileLink ?? null,
        shorts1: data.shorts1 ?? null,
        shorts2: data.shorts2 ?? null,
        shorts3: data.shorts3 ?? null,
        shorts4: data.shorts4 ?? null,
        galleryImageUrls: data.galleryImageUrls ?? null,
      },
    });
  }
  return NextResponse.json(saved);
}
