import type { Gallery } from '@/lib/galleries'
import type { RoomTheme } from '@/lib/room-themes'
import { cn } from '@/lib/utils'

export function RoomHero({ gallery, theme }: { gallery: Gallery; theme: RoomTheme }) {
  return (
    <section aria-labelledby="room-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="spotlight absolute inset-x-0 top-0 h-[28rem] animate-in fade-in duration-[1600ms]" />
      <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-16 text-center md:px-8 md:pt-24">
        <div className="brass mx-auto inline-block rounded-sm px-5 py-2">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em]">Gallery {gallery.number}</p>
        </div>
        <h1 id="room-title" className={cn('mt-6 font-serif text-5xl font-semibold text-balance md:text-7xl', theme.text)}>
          {gallery.title}
        </h1>
        <p className={cn('mt-3 font-serif text-xl italic md:text-2xl', theme.muted)}>{gallery.subtitle}</p>
        <div className={cn('mx-auto my-10 h-px w-24', theme.rule)} aria-hidden="true" />
        <div className="grid gap-8 text-left md:grid-cols-2 md:gap-12">
          <p lang="en" className={cn('font-serif text-lg leading-relaxed md:text-xl', theme.text)}>
            {gallery.intro}
          </p>
          <p lang="fil" className={cn('font-serif text-lg italic leading-relaxed md:text-xl', theme.muted)}>
            {gallery.introTaglish}
          </p>
        </div>
      </div>
    </section>
  )
}
