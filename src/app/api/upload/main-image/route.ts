import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { promises as fs } from 'fs';
import path from 'path';

async function getArtistNo(): Promise<number | null> {
  const store = await cookies();
  const v = store.get('session')?.value;
  if (!v) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

export async function POST(req: Request) {
  const artistNo = await getArtistNo();
  if (!artistNo) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const form = await req.formData();
  const file = form.get('file') as File | null;
  console.log(file);
  if (!file) return NextResponse.json({ error: 'file is required' }, { status: 400 });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();

  const publicDir = path.join(process.cwd(), 'public', 'img');
  await fs.mkdir(publicDir, { recursive: true });

  const filename = `main-img-${artistNo}.${ext}`;
  const filepath = path.join(publicDir, filename);
  await fs.writeFile(filepath, buffer);

  const url = `/img/${filename}`;
  return NextResponse.json({ url });
}
