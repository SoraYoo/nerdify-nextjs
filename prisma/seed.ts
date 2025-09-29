import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Seed default artist account (id=sam)
  const passwordHash = await bcrypt.hash('whereareyou11!!', 10);
  await prisma.artist.upsert({
    where: { id: 'sam' },
    update: {},
    create: {
      id: 'sam',
      password: passwordHash,
      websiteOpenYN: 'N',
      isDel: 'N',
    },
  });

  // Seed default Site content for artistNo=1
  await prisma.site.upsert({
    where: { artistNo: 1 },
    update: {
      artistName: 'Sam, Where are you?',
      instagramLink: 'https://www.instagram.com/sam.where.are.you/?igsh=bjh2bTNxMGdueHhx#',
      youtubeLink: 'https://www.youtube.com/channel/UCXaE07gxYjqtwIyFAsnDI8Q',
      spotifyLink: 'https://open.spotify.com/artist/3dD5SbDD4n7xJLYQ2t4Ulv',
      email: 'hi@samwhereareyou.art',
      spotifyAlbumLink: 'https://open.spotify.com/embed/album/7fRKvowbTUZLc3D7oIpdOB?utm_source=generator&theme=0',
      patreonLink: 'https://www.patreon.com/cw/samwhereareyou',
      mainImageUrl: '/img/banner-img.jpg',
      mainTitle: 'Sam, Where are you?',
      mainDescription:
        'Sam, Where are you? is a guitarist and producer blending live guitar grooves with electronic beats, crafting immersive Disco, House, and Funk-inspired tracks. Expect energetic loops, soulful riffs, and a personal touch that turns every release into a mini musical journey.',
      mainVideoLink: 'https://www.youtube.com/embed/AJOj6JlmrGg',
      youtubeProfileLink: 'https://www.youtube.com/channel/UCXaE07gxYjqtwIyFAsnDI8Q',
      shorts1: 'https://www.youtube.com/embed/asAM4rq3WYQ',
      shorts2: 'https://www.youtube.com/embed/g3FZqCVz5j8',
      shorts3: 'https://www.youtube.com/embed/YZ3H0iSNN7Y',
      shorts4: 'https://www.youtube.com/embed/WjPkNK6dwfI',
    },
    create: {
      artistNo: 1,
      artistName: 'Sam, Where are you?',
      instagramLink: 'https://www.instagram.com/sam.where.are.you/?igsh=bjh2bTNxMGdueHhx#',
      youtubeLink: 'https://www.youtube.com/channel/UCXaE07gxYjqtwIyFAsnDI8Q',
      spotifyLink: 'https://open.spotify.com/artist/3dD5SbDD4n7xJLYQ2t4Ulv',
      email: 'hi@samwhereareyou.art',
      spotifyAlbumLink: 'https://open.spotify.com/embed/album/7fRKvowbTUZLc3D7oIpdOB?utm_source=generator&theme=0',
      patreonLink: 'https://www.patreon.com/cw/samwhereareyou',
      mainImageUrl: '/img/banner-img.jpg',
      mainTitle: 'Sam, Where are you?',
      mainDescription:
        'Sam, Where are you? is a guitarist and producer blending live guitar grooves with electronic beats, crafting immersive Disco, House, and Funk-inspired tracks. Expect energetic loops, soulful riffs, and a personal touch that turns every release into a mini musical journey.',
      mainVideoLink: 'https://www.youtube.com/embed/AJOj6JlmrGg',
      youtubeProfileLink: 'https://www.youtube.com/channel/UCXaE07gxYjqtwIyFAsnDI8Q',
      shorts1: 'https://www.youtube.com/embed/asAM4rq3WYQ',
      shorts2: 'https://www.youtube.com/embed/g3FZqCVz5j8',
      shorts3: 'https://www.youtube.com/embed/YZ3H0iSNN7Y',
      shorts4: 'https://www.youtube.com/embed/WjPkNK6dwfI',
    },
  });

  console.log('Seeded default admin and site (artistNo=1).');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
