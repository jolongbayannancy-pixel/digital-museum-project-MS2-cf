import type { Metadata } from 'next'
import { GalleryDoor } from '@/components/museum/gallery-door'
import { HallIntro } from '@/components/museum/hall-intro'
import { MuseumFooter } from '@/components/museum/museum-footer'
import { MuseumNav } from '@/components/museum/museum-nav'
import { galleries } from '@/lib/galleries'

export const metadata: Metadata = {
  title: 'Main Hall · BALIK-TANAW Museum',
  description: 'Choose a gallery: TV & Karaoke, Fashion & Trends, or Communication & Technology in the Philippines, 2000–2010.',
}

export default function HallPage() {
  return (
    <>
      <MuseumNav label="Main Hall · Pangunahing Bulwagan" />
      <main className="animate-in fade-in duration-1000">
        <HallIntro />

        <section aria-labelledby="galleries-title" className="museum-wall mt-16 pt-14 md:mt-20">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold">Tatlong Pinto · Three Doors</p>
            <h2 id="galleries-title" className="mt-2 font-serif text-4xl font-semibold text-foreground md:text-5xl">
              The Galleries
            </h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-6xl justify-items-center gap-16 px-4 pb-16 md:grid-cols-3 md:gap-8 md:px-8">
            {galleries.map((gallery) => (
              <li key={gallery.slug} className="flex w-full justify-center">
                <GalleryDoor gallery={gallery} />
              </li>
            ))}
          </ul>
          <div aria-hidden="true" className="museum-floor h-24" />
        </section>
      </main>
      <MuseumFooter />
    </>
  )
}
