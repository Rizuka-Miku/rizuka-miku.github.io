import type { APIRoute } from 'astro'
import { coverSongs, getOriginalSongs, songUrl } from '@/lib/songs'
import { PROFILE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIALS, TAGLINE } from '@/lib/site'

const escapeLinkText = (text: string): string => text.replace(/([[\]])/g, '\\$1')

export const GET: APIRoute = async () => {
  const originalSongs = await getOriginalSongs()

  const sections = [
    `# ${SITE_NAME}`,
    `> ${SITE_DESCRIPTION}`,
    [
      `${SITE_NAME} adalah VTuber indie asal Indonesia bertema Kucing Bulan.`,
      `Tagline: "${TAGLINE}".`,
      `Fandom-nya bernama Rizuniverse dan fansnya disebut Sirius.`,
      `Situs resmi: [${SITE_NAME}](${SITE_URL})`,
    ].join(' '),

    ['## Profil', ...PROFILE.map((item) => `- ${item.label}: ${item.value}`)].join('\n'),

    [
      `## Lagu Original (${originalSongs.length})`,
      'Setiap lagu memiliki halaman tersendiri berisi lirik lengkap:',
      '',
      ...originalSongs.map((song) =>
        [
          `### ${song.title}`,
          `- [Halaman lirik](${songUrl(song.slug, SITE_URL)}): ${song.description}`,
          `- [Video](${song.projectLink})`,
        ].join('\n'),
      ),
    ].join('\n'),

    [
      `## Lagu Cover (${coverSongs.length})`,
      ...coverSongs.map((song) => `- [${escapeLinkText(song.title)}](${song.projectLink})`),
    ].join('\n'),

    ['## Tautan Resmi', ...SOCIALS.map((s) => `- [${s.name}](${s.url})`)].join('\n'),

    [
      '## Halaman',
      `- [Beranda](${SITE_URL}/)`,
      `- [Sitemap](${SITE_URL}/sitemap-index.xml)`,
    ].join('\n'),
  ]

  return new Response(`${sections.join('\n\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}