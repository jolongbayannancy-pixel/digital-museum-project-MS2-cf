'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import type { Artifact } from '@/lib/galleries'
import type { RoomTheme } from '@/lib/room-themes'
import { cn } from '@/lib/utils'

type ArtifactExhibitProps = {
  artifact?: Artifact
  pastArtifact?: Artifact
  futureArtifact?: Artifact
  artifacts?: Artifact[]
  index: number
  theme: RoomTheme
  intervalDuration?: number
}

export function ArtifactExhibit({ 
  artifact, 
  pastArtifact,
  futureArtifact,
  artifacts, 
  index, 
  theme,
  intervalDuration = 4000
}: ArtifactExhibitProps) {
  const sequence = artifacts && artifacts.length > 0
    ? artifacts
    : [
        ...(pastArtifact ? [pastArtifact] : []),
        ...(artifact ? [artifact] : []),
        ...(futureArtifact ? [futureArtifact] : [])
      ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (sequence.length <= 1 || isHovered) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sequence.length)
    }, intervalDuration)

    return () => clearInterval(timer)
  }, [sequence.length, isHovered, intervalDuration])

  const activeArtifact = sequence[currentIndex] || artifact || {
    id: 'fallback',
    title: '',
    subtitle: '',
    date: '',
    image: '',
    alt: '',
    description: '',
    descriptionTaglish: '',
    caption: ''
  }

  const eraLabels = ['Past', 'Present', 'Future']

  return (
    <article
      aria-labelledby={`${activeArtifact.id}-title`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative grid items-start gap-8 md:grid-cols-[1.25fr_1fr] md:gap-14 transition-all duration-700 ease-out',
        isHovered 
          ? 'scale-[1.02] shadow-[0_20px_50px_rgba(0,0,0,0.35)] z-10' 
          : 'scale-100 opacity-95'
      )}
    >
      {/* Image Figure */}
      <figure className='relative'>
        <div aria-hidden="true" className="spotlight absolute -inset-x-8 -top-16 h-72" />
        <div className={cn(
          "gilded-frame relative transition-transform duration-700 ease-out",
          isHovered ? "translate-y-[-4px]" : "translate-y-0"
        )}>
          <div className="mat">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                key={`${activeArtifact.id}-${currentIndex}`}
                src={activeArtifact.image}
                alt={activeArtifact.alt}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover transition-all duration-500 ease-in-out animate-in fade-in"
              />
            </div>
          </div>
        </div>
        <figcaption className={cn('mt-4 text-center text-xs italic transition-colors duration-300 min-h-[2rem]', theme.muted)}>
          {activeArtifact.caption}
        </figcaption>
      </figure>

      {/* Text Card with rigid structural height */}
      <div className={cn(
        "border border-border bg-card p-6 text-card-foreground shadow-[0_12px_30px_rgba(0,0,0,0.25)] md:p-7 flex flex-col justify-between h-[420px] md:h-[450px] transition-all duration-700 ease-out",
        isHovered ? "border-gold/50 shadow-[0_15px_40px_rgba(0,0,0,0.3)]" : ""
      )}>
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Exhibit {index + 1} · {activeArtifact.date}
            </p>
            {sequence.length > 1 && (
              <div className="flex items-center gap-1 bg-background/80 p-1 border border-border shadow-inner" role="group" aria-label="Era selection controls">
                {sequence.map((_, i) => {
                  const label = eraLabels[i] || `Era ${i + 1}`
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentIndex(i)}
                      className={cn(
                        "px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                        i === currentIndex 
                          ? "bg-gold text-background shadow" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                      aria-label={`Switch to ${label} artifact`}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Locked height text block container */}
          <div 
            key={`${activeArtifact.id}-text-${currentIndex}`}
            className="mt-4 h-[320px] overflow-y-auto pr-1 transition-all duration-500 ease-in-out animate-in fade-in"
          >
            <h3 id={`${activeArtifact.id}-title`} className="font-serif text-3xl font-semibold leading-tight">
              {activeArtifact.title}
            </h3>
            <p lang="fil" className="font-serif text-lg italic text-muted-foreground">
              {activeArtifact.subtitle}
            </p>
            <div className="my-4 h-px w-12 bg-gold shrink-0" aria-hidden="true" />
            <p className="text-sm leading-relaxed">{activeArtifact.description}</p>
            <p lang="fil" className="mt-3 text-sm italic leading-relaxed text-muted-foreground">
              {activeArtifact.descriptionTaglish}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}