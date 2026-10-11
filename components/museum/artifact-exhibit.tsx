import Image from 'next/image'
import { ILLUSTRATIVE_CREDIT, type Artifact } from '@/lib/galleries'
import type { RoomTheme } from '@/lib/room-themes'
import { cn } from '@/lib/utils'

type ArtifactExhibitProps = {
  artifact: Artifact
  index: number
  theme: RoomTheme
}

export function ArtifactExhibit({ artifact, index, theme }: ArtifactExhibitProps) {
  const reversed = index % 2 === 1

  return (
    <article
      aria-labelledby={`${artifact.id}-title`}
      className={cn(
        'relative grid items-center gap-8 md:grid-cols-[1.25fr_1fr] md:gap-14',
        reversed && 'md:grid-cols-[1fr_1.25fr]',
      )}
    >
      <figure className={cn('relative', reversed && 'md:order-2')}>
        <div aria-hidden="true" className="spotlight absolute -inset-x-8 -top-16 h-72" />
        <div className="gilded-frame relative">
          <div className="mat">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={artifact.image}
                alt={artifact.alt}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <figcaption className={cn('mt-4 text-center text-xs italic', theme.muted)}>{artifact.caption}</figcaption>
      </figure>

      <div className="border border-border bg-card p-6 text-card-foreground shadow-[0_12px_30px_rgba(0,0,0,0.25)] md:p-7">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">
          Exhibit {index + 1} · {artifact.date}
        </p>
        <h3 id={`${artifact.id}-title`} className="mt-2 font-serif text-3xl font-semibold leading-tight">
          {artifact.title}
        </h3>
        <p lang="fil" className="font-serif text-lg italic text-muted-foreground">
          {artifact.subtitle}
        </p>
        <div className="my-4 h-px w-12 bg-gold" aria-hidden="true" />
        <p className="text-sm leading-relaxed">{artifact.description}</p>
        <p lang="fil" className="mt-3 text-sm italic leading-relaxed text-muted-foreground">
          {artifact.descriptionTaglish}
        </p>
        <p className="mt-5 border-t border-border pt-3 text-[0.7rem] leading-relaxed text-muted-foreground">
          {ILLUSTRATIVE_CREDIT}
        </p>
      </div>
    </article>
  )
}
