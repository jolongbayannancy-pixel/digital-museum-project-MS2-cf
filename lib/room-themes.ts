import type { Gallery } from './galleries'

export type RoomTheme = {
  wall: string
  text: string
  muted: string
  rule: string
  panel: string
  accent: string
}

export const roomThemes: Record<Gallery['theme'], RoomTheme> = {
  mahogany: {
    wall: 'bg-[linear-gradient(180deg,#2e130e_0%,#3d1912_40%,#2a110c_100%)]',
    text: 'text-cream',
    muted: 'text-cream/75',
    rule: 'bg-gold-soft/60',
    panel: 'border-gold/40 bg-black/25',
    accent: 'text-gold-soft',
  },
  teak: {
    wall: 'bg-[linear-gradient(180deg,#efe4cc_0%,#e8dabb_100%)]',
    text: 'text-foreground',
    muted: 'text-muted-foreground',
    rule: 'bg-gold',
    panel: 'border-gold/50 bg-card/70',
    accent: 'text-wood',
  },
  walnut: {
    wall: 'bg-[linear-gradient(180deg,#1d1a16_0%,#26211b_40%,#181511_100%)]',
    text: 'text-cream',
    muted: 'text-cream/75',
    rule: 'bg-gold-soft/60',
    panel: 'border-gold/40 bg-black/25',
    accent: 'text-gold-soft',
  },
}
