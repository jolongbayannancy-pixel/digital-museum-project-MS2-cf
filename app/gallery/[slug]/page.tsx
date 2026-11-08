import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArtifactExhibit } from '@/components/museum/artifact-exhibit'
import { HistoricalContext, SectionHeading } from '@/components/museum/historical-context'
import { MuseumFooter } from '@/components/museum/museum-footer'
import { MuseumNav } from '@/components/museum/museum-nav'
import { PastPresent } from '@/components/museum/past-present'
import { RoomHero } from '@/components/museum/room-hero'
import { RoomSourcesExit } from '@/components/museum/room-sources-exit'
import { galleries, getGallery } from '@/lib/galleries'
import { roomThemes } from '@/lib/room-themes'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return galleries.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: PageProps<'/gallery/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const gallery = getGallery(slug)
  if (!gallery) return {}
  return {
    title: `${gallery.title} · BALIK-TANAW Museum`,
    description: gallery.doorDescription,
  }
}

export default async function GalleryPage({ params }: PageProps<'/gallery/[slug]'>) {
  const { slug } = await params
  const gallery = getGallery(slug)
  if (!gallery) notFound()

  const theme = roomThemes[gallery.theme]

  // Determine the maximum length among past, present, and future artifact lists to map through exhibits
  const maxCount = Math.max(
    gallery.prevArtifacts?.length || 0,
    gallery.currArtifacts?.length || 0,
    gallery.futureArtifacts?.length || 0
  )

  return (
    <div className={cn('min-h-svh', theme.wall)}>
      <MuseumNav showBackToHall label={`Gallery ${gallery.number} · ${gallery.title}`} />
      <main className="animate-in fade-in duration-1000">
        <RoomHero gallery={gallery} theme={theme} />

        <section aria-labelledby="artifacts-title" className="mx-auto max-w-6xl px-4 py-12 md:px-8">
          <SectionHeading id="artifacts-title" eyebrow="Mga Artifact" title="On Display" theme={theme} />
          <div className="mt-16 flex flex-col gap-24">
            {Array.from({ length: maxCount }).map((_, index) => {
              const past = gallery.prevArtifacts?.[index]
              const present = gallery.currArtifacts?.[index]
              const future = gallery.futureArtifacts?.[index]

              // Build the rotating sequence for this specific exhibit card
              const sequence = [
                ...(past ? [past] : []),
                ...(present ? [present] : []),
                ...(future ? [future] : []),
              ]

              // Fallback default artifact if a slot is empty
              const baseArtifact = present || past || future
              if (!baseArtifact) return null

              return (
                <ArtifactExhibit
                  key={baseArtifact.id || index}
                  artifact={baseArtifact}
                  pastArtifact={past}
                  futureArtifact={future}
                  artifacts={sequence}
                  index={index}
                  theme={theme}
                />
              )
            })}
          </div>
        </section>

        <HistoricalContext gallery={gallery} theme={theme} />
        <PastPresent comparisons={gallery.comparisons} theme={theme} />
        <RoomSourcesExit gallery={gallery} theme={theme} />
      </main>
      <MuseumFooter />
    </div>
  )
}