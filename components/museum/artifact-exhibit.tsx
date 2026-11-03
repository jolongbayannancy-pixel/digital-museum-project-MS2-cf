'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Artifact } from '@/lib/galleries'
import type { RoomTheme } from '@/lib/room-themes'
import { cn } from '@/lib/utils'

type ArtifactExhibitProps = {
  artifact: Artifact
  alternateArtifact?: Artifact
  index: number
  theme: RoomTheme
}

export function ArtifactExhibit({ artifact, alternateArtifact, index, theme }: ArtifactExhibitProps) {
  const [isHovered, setIsHovered] = useState(false)
  const activeArtifact = isHovered && alternateArtifact ? alternateArtifact: artifact

  return (
    <article
      aria-labelledby={`${artifact.id}-title`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative grid items-center gap-8 md:grid-cols-[1.25fr_1fr] md:gap-14 transition-all duration-4000',
      )}
    >
      <figure className='relative'>
        <div aria-hidden="true" className="spotlight absolute -inset-x-8 -top-16 h-72" />
        <div className="gilded-frame relative">
          <div className="mat">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                key={`${activeArtifact.id}-${isHovered? 'right': 'left'}`}
                src={activeArtifact.image}
                alt={activeArtifact.alt}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className={cn("object-cover transition-all duration-4000 ease-in-out animate-in fade-in duration 700", isHovered? "slide-in-from-right-8" : "slide-in-from-left-8")}
              />
            </div>
          </div>
        </div>
        <figcaption className={cn('mt-4 text-center text-xs italic', theme.muted)}>{activeArtifact.caption}</figcaption>
      </figure>

      <div className="border border-border bg-card p-6 text-card-foreground shadow-[0_12px_30px_rgba(0,0,0,0.25)] md:p-7">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">
          Exhibit {index + 1} · {activeArtifact.date}
        </p>
        <div key={`${activeArtifact.id}-text-${isHovered ? 'right': 'left'}`}
        className={cn( "transition-all duration-4000 ease-in-out animate-in fade-in duration-4000",
          isHovered ? "slide-in-from-right-8" : "slide-in-from-left-8"
        )}
        >

        <h3 id={`${artifact.id}-title`} className="mt-2 font-serif text-3xl font-semibold leading-tight">
          {activeArtifact.title}
        </h3>
        <p lang="fil" className="font-serif text-lg italic text-muted-foreground">
          {activeArtifact.subtitle}
        </p>
        <div className="my-4 h-px w-12 bg-gold" aria-hidden="true" />
        <p className="text-sm leading-relaxed">{activeArtifact.description}</p>
        <p lang="fil" className="mt-3 text-sm italic leading-relaxed text-muted-foreground">
          {activeArtifact.descriptionTaglish}
        </p>
        </div>
      </div>
    </article>
  )
}
