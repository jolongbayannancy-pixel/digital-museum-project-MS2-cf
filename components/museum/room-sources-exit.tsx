import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { galleries, ILLUSTRATIVE_CREDIT, type Gallery } from '@/lib/galleries'
import type { RoomTheme } from '@/lib/room-themes'
import { cn } from '@/lib/utils'

export function RoomSourcesExit({ gallery, theme }: { gallery: Gallery; theme: RoomTheme }) {
  const currentIndex = galleries.findIndex((g) => g.slug === gallery.slug)
  const nextGallery = galleries[(currentIndex + 1) % galleries.length]

  return (
    <>
      <section aria-labelledby="sources-title" className="mx-auto max-w-4xl px-4 pb-16 md:px-8">
        <div className={cn('border p-6 md:p-8', theme.panel)}>
          <h2 id="sources-title" className={cn('font-serif text-2xl font-semibold', theme.text)}>
            Sources & Credits <span className={cn('font-normal italic', theme.muted)}>/ Mga Sanggunian</span>
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {gallery.sources.map((source) => (
              <li key={source.citation} className={cn('text-sm leading-relaxed', theme.text)}>
                {source.citation}
                {source.note && <span className={cn('block text-xs italic', theme.muted)}>{source.note}</span>}
              </li>
            ))}
          </ul>
          <p className={cn('mt-6 border-t border-gold/30 pt-4 text-xs leading-relaxed', theme.muted)}>
            Image credit: {ILLUSTRATIVE_CREDIT}
          </p>
        </div>
      </section>

      <nav
        aria-label="Leave gallery"
        className="mx-auto flex max-w-4xl flex-col items-stretch gap-4 px-4 pb-20 sm:flex-row sm:justify-between md:px-8"
      >
        <Link
          href="/hall"
          className="brass inline-flex items-center justify-center gap-3 rounded-sm px-6 py-4 transition-transform hover:-translate-y-0.5"
        >
          <ArrowLeft className="size-5" aria-hidden="true" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold">Back to Main Hall</span>
            <span className="text-xs uppercase tracking-[0.2em]">Bumalik sa Main Hall</span>
          </span>
        </Link>
        <Link
          href={`/gallery/${nextGallery.slug}`}
          className={cn(
            'inline-flex items-center justify-center gap-3 rounded-sm border border-gold/60 px-6 py-4 transition-colors hover:bg-gold hover:text-wood-deep',
            theme.text,
          )}
        >
          <span className="flex flex-col text-right leading-tight">
            <span className="text-xs uppercase tracking-[0.2em] opacity-75">Next Gallery {nextGallery.number}</span>
            <span className="font-serif text-lg font-semibold">{nextGallery.title}</span>
          </span>
          <ArrowRight className="size-5" aria-hidden="true" />
        </Link>
      </nav>
    </>
  )
}
