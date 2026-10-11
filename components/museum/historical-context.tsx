import type { Gallery } from '@/lib/galleries'
import type { RoomTheme } from '@/lib/room-themes'
import { cn } from '@/lib/utils'

export function HistoricalContext({ gallery, theme }: { gallery: Gallery; theme: RoomTheme }) {
  return (
    <section aria-labelledby="context-title" className="mx-auto max-w-6xl px-4 py-20 md:px-8">
      <SectionHeading id="context-title" eyebrow="Kontekstong Pangkasaysayan" title="Historical Context" theme={theme} />

      <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_1fr]">
        <ol className="relative flex flex-col gap-6 border-l border-gold/60 pl-6">
          {gallery.timeline.map((entry) => (
            <li key={`${entry.year}-${entry.text.slice(0, 16)}`} className="relative">
              <span
                aria-hidden="true"
                className="brass absolute -left-[1.85rem] top-1.5 size-3 rounded-full"
              />
              <p className={`font-serif text-xl font-semibold ${theme.accent}`}>{entry.year}</p>
              <p className={cn('mt-1 text-sm leading-relaxed', theme.text)}>{entry.text}</p>
            </li>
          ))}
        </ol>

        <div className={cn('border p-6 md:p-8', theme.panel)}>
          <h3 className={cn('font-serif text-2xl font-semibold', theme.text)}>Cultural Significance</h3>
          <p lang="fil" className={cn('font-serif italic', theme.muted)}>
            Kahalagahang Pangkultura
          </p>
          <p className={cn('mt-4 leading-relaxed', theme.text)}>{gallery.significance}</p>
          <p lang="fil" className={cn('mt-4 italic leading-relaxed', theme.muted)}>
            {gallery.significanceTaglish}
          </p>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  theme,
}: {
  id: string
  eyebrow: string
  title: string
  theme: RoomTheme
}) {
  return (
    <div className="text-center">
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h2 id={id} className={cn('mt-2 font-serif text-4xl font-semibold md:text-5xl', theme.text)}>
        {title}
      </h2>
    </div>
  )
}
