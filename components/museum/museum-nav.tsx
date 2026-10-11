import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type MuseumNavProps = {
  showBackToHall?: boolean
  label?: string
}

export function MuseumNav({ showBackToHall = false, label }: MuseumNavProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-wood-deep/90 text-cream backdrop-blur-md">
      <nav
        aria-label="Museum navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8"
      >
        {showBackToHall ? (
          <Link
            href="/hall"
            className="inline-flex items-center gap-2 rounded-sm border border-gold-soft/60 px-3 py-2 text-sm transition-colors hover:bg-gold hover:text-wood-deep focus-visible:bg-gold focus-visible:text-wood-deep"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span>
              <span className="font-medium">Back to Main Hall</span>
              <span className="hidden text-cream/70 sm:inline"> / Bumalik sa Main Hall</span>
            </span>
          </Link>
        ) : (
          <Link
            href="/"
            className="font-serif text-lg font-semibold tracking-[0.18em] text-gold-soft hover:text-cream"
          >
            BALIK-TANAW
          </Link>
        )}
        <p className="truncate text-right text-xs uppercase tracking-[0.25em] text-cream/70">{label}</p>
      </nav>
    </header>
  )
}
