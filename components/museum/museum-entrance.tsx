'use client'

import Image from 'next/image'
import Link from 'next/link'
import { DoorOpen } from 'lucide-react'
import { useCinematicNavigate } from '@/hooks/use-cinematic-navigate'

export function MuseumEntrance() {
  const { isTransitioning, onClick } = useCinematicNavigate('/hall', 1050)

  return (
    <main className="relative min-h-svh overflow-hidden bg-wood-deep text-cream">
      <div className="entrance-scene absolute inset-0" data-entering={isTransitioning}>
        <Image
          src="/images/entrance.png"
          alt="The facade of the BALIK-TANAW museum at dusk: cream stone columns, capiz windows glowing warmly, and grand carved wooden doors at the top of stone steps"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_60%]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,13,8,0.82)_0%,rgba(20,13,8,0.35)_38%,rgba(20,13,8,0.25)_60%,rgba(20,13,8,0.9)_100%)]"
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_62%,#fff1cc,#e8c98a_40%,#1f150e_90%)] transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-5xl flex-col items-center justify-between px-6 py-10 text-center md:py-14">
        <header className="flex flex-col items-center gap-5">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold-soft">
            Isang Digital na Museo · A Digital Museum
          </p>
          <div className="brass rounded-sm px-6 py-4 md:px-10 md:py-5">
            <h1 className="font-serif text-4xl font-semibold leading-none tracking-[0.12em] md:text-6xl">
              BALIK-TANAW
            </h1>
          </div>
          <p className="font-serif text-xl text-cream md:text-2xl text-balance">
            Philippine Popular Culture Museum <span className="text-gold-soft">(2000–2010)</span>
          </p>
          <p className="font-serif text-lg italic text-cream/85 md:text-xl">
            {'“Reliving the Trends That Shaped a Generation.”'}
          </p>
        </header>

        <div className="flex flex-col items-center gap-4 pb-4">
          <Link
            href="/hall"
            onClick={onClick}
            aria-label="Enter the Museum — Pumasok sa Museo"
            className="group inline-flex items-center gap-3 rounded-sm border border-gold-soft/70 bg-wood-deep/70 px-7 py-4 text-cream shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-colors hover:bg-gold hover:text-wood-deep focus-visible:bg-gold focus-visible:text-wood-deep"
          >
            <DoorOpen className="size-5 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
            <span className="flex flex-col items-start leading-tight">
              <span className="font-serif text-xl font-semibold tracking-wide">Enter the Museum</span>
              <span className="text-xs uppercase tracking-[0.25em] opacity-80">Pumasok sa Museo</span>
            </span>
          </Link>
          <p className="text-xs text-cream/70" aria-live="polite">
            {isTransitioning ? 'Opening the doors… Binubuksan ang pinto…' : 'Click or tap to enter · I-click o i-tap para pumasok'}
          </p>
        </div>
      </div>
    </main>
  )
}
