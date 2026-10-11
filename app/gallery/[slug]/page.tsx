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

  return (
    <div className={cn('min-h-svh', theme.wall)}>
      <MuseumNav showBackToHall label={`Gallery ${gallery.number} · ${gallery.title}`} />
      <main className="animate-in fade-in duration-1000">
        <RoomHero gallery={gallery} theme={theme} />

        <section aria-labelledby="artifacts-title" className="mx-auto max-w-6xl px-4 py-12 md:px-8">
          <SectionHeading id="artifacts-title" eyebrow="Mga Artifact" title="On Display" theme={theme} />
          <div className="mt-16 flex flex-col gap-24">
            {gallery.artifacts.map((artifact, index) => (
              <ArtifactExhibit key={artifact.id} artifact={artifact} index={index} theme={theme} />
            ))}
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
