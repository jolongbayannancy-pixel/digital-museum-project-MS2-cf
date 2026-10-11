'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shirt, Smartphone, Tv } from 'lucide-react'
import type { Gallery } from '@/lib/galleries'
import { useCinematicNavigate } from '@/hooks/use-cinematic-navigate'
import { cn } from '@/lib/utils'

const doorThemes = {
  mahogany: {
    wood: 'wood-mahogany',
    glow: 'radial-gradient(ellipse at 50% 60%, rgba(160,195,255,0.85), rgba(60,80,140,0.4) 45%, rgba(10,10,20,0.9) 80%)',
    Icon: Tv,
  },
  teak: {
    wood: 'wood-teak',
    glow: 'radial-gradient(ellipse at 50% 60%, rgba(255,214,180,0.9), rgba(180,110,90,0.4) 45%, rgba(20,12,8,0.9) 80%)',
    Icon: Shirt,
  },
  walnut: {
    wood: 'wood-walnut',
    glow: 'radial-gradient(ellipse at 50% 60%, rgba(180,240,210,0.85), rgba(60,120,100,0.4) 45%, rgba(8,14,12,0.9) 80%)',
    Icon: Smartphone,
  },
} as const

function DoorFace({ theme }: { theme: Gallery['theme'] }) {
  if (theme === 'mahogany') {
    return (
      <div className="flex h-full flex-col gap-3 p-4 pt-6">
        <div
          className="door-panel aspect-[2/1] rounded-t-full"
          style={{
            background:
              'repeating-conic-gradient(from -90deg at 50% 100%, rgba(255,210,150,0.12) 0deg 6deg, transparent 6deg 12deg), rgba(0,0,0,0.18)',
          }}
        />
        <div className="door-panel flex-1 rounded-[2px] bg-black/15" />
        <div className="door-panel h-1/4 rounded-[2px] bg-black/15" />
      </div>
    )
  }
  if (theme === 'teak') {
    return (
      <div className="flex h-full flex-col gap-3 p-4 pt-6">
        <div
          className="door-panel aspect-[4/3] rounded-t-full border-4 border-[#4e2f16]"
          style={{
            background:
              'repeating-linear-gradient(0deg, #4e2f16 0 3px, transparent 3px 18px), repeating-linear-gradient(90deg, #4e2f16 0 3px, transparent 3px 18px), linear-gradient(180deg, rgba(250,232,196,0.75), rgba(230,200,150,0.55))',
          }}
        />
        <div className="grid flex-1 grid-cols-2 gap-3">
          <div className="door-panel rounded-[2px] bg-black/15" />
          <div className="door-panel rounded-[2px] bg-black/15" />
        </div>
      </div>
    )
  }
  return (
    <div className="flex h-full flex-col gap-2 p-4 pt-8">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex flex-1 flex-col gap-2">
          <div
            className={cn('door-panel flex-1 bg-black/20', i === 0 && 'rounded-t-full')}
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0 2px, transparent 2px 10px)',
            }}
          />
          {i < 3 && <div className="brass h-1 rounded-full opacity-80" />}
        </div>
      ))}
    </div>
  )
}

export function GalleryDoor({ gallery }: { gallery: Gallery }) {
  const href = `/gallery/${gallery.slug}`
  const { isTransitioning, onClick } = useCinematicNavigate(href, 1000)
  const theme = doorThemes[gallery.theme]
  const { Icon } = theme

  return (
    <Link
      href={href}
      onClick={onClick}
      data-opening={isTransitioning}
      aria-label={`Enter Gallery ${gallery.number}: ${gallery.title} — ${gallery.subtitle}`}
      className="door-link group flex w-full max-w-[17rem] flex-col items-center rounded-sm outline-none"
    >
      <div className="brass mb-5 flex min-h-[8.75rem] w-full max-w-[15rem] flex-col justify-center rounded-sm px-4 py-3 text-center">
        <p className="flex items-center justify-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em]">
          <Icon className="size-3.5" aria-hidden="true" />
          Gallery {gallery.number}
        </p>
        <p className="mt-1 font-serif text-xl font-bold leading-tight tracking-wide">{gallery.title.toUpperCase()}</p>
        <p className="mt-0.5 font-serif text-sm italic">{gallery.subtitle}</p>
      </div>

      <div className="door-scene relative w-full max-w-[15rem]">
        <div
          className="rounded-t-full p-2.5 shadow-[0_30px_50px_rgba(0,0,0,0.45)]"
          style={{ background: 'linear-gradient(180deg, #2a1d14, #1f150e)', boxShadow: 'inset 0 0 0 2px #8a6532' }}
        >
          <div className="relative h-[22rem] overflow-hidden rounded-t-full sm:h-[26rem] lg:h-[28rem]">
            <Image
              src={gallery.artifacts[0].image}
              alt=""
              fill
              sizes="240px"
              className="object-cover opacity-60"
            />
            <div className="door-glow absolute inset-0 opacity-40" style={{ background: theme.glow }} />

            <div className={cn('door-leaf absolute inset-0 rounded-t-full', theme.wood)}>
              <DoorFace theme={gallery.theme} />
              <span
                aria-hidden="true"
                className="brass absolute right-4 top-1/2 size-4 -translate-y-1/2 rounded-full"
              />
              <span
                aria-hidden="true"
                className="brass absolute right-[1.1rem] top-[calc(50%+1.1rem)] h-3 w-2.5 rounded-[2px]"
              />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="mx-auto h-3 w-[110%] -translate-x-[4.5%] bg-[#1f150e] shadow-[0_6px_14px_rgba(0,0,0,0.5)]" />
      </div>

      <div className="mt-6 w-full border border-border bg-card p-4 text-left shadow-sm transition-colors group-hover:border-gold group-focus-visible:border-gold">
        <p className="text-sm leading-relaxed text-foreground">{gallery.doorDescription}</p>
        <p lang="fil" className="mt-2 text-sm italic leading-relaxed text-muted-foreground">
          {gallery.doorDescriptionTaglish}
        </p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-wood">
          {isTransitioning ? 'Opening… Binubuksan…' : 'Enter / Pumasok'}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </p>
      </div>

      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none fixed inset-0 z-50 transition-opacity delay-500 duration-500',
          isTransitioning ? 'opacity-100' : 'opacity-0',
        )}
        style={{ background: 'radial-gradient(circle at 50% 50%, #fff1cc, #d9bb7f 35%, #1f150e 85%)' }}
      />
    </Link>
  )
}
