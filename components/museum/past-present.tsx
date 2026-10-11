import type { Comparison } from '@/lib/galleries'
import type { RoomTheme } from '@/lib/room-themes'
import { SectionHeading } from './historical-context'

export function PastPresent({ comparisons, theme }: { comparisons: Comparison[]; theme: RoomTheme }) {
  return (
    <section aria-labelledby="past-present-title" className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
      <SectionHeading id="past-present-title" eyebrow="Noon at Ngayon" title="Past vs. Present" theme={theme} />

      <div className="mt-12 overflow-hidden border border-gold/50 bg-card text-card-foreground shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">Comparison of popular culture in 2000–2010 and today</caption>
          <thead className="hidden bg-primary text-primary-foreground md:table-header-group">
            <tr>
              <th scope="col" className="w-1/5 px-6 py-4 font-serif text-lg font-semibold">
                Aspect
              </th>
              <th scope="col" className="px-6 py-4 font-serif text-lg font-semibold">
                Noon <span className="font-sans text-xs font-normal opacity-75">(2000–2010)</span>
              </th>
              <th scope="col" className="px-6 py-4 font-serif text-lg font-semibold">
                Ngayon <span className="font-sans text-xs font-normal opacity-75">(Today)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row) => (
              <tr key={row.aspect} className="flex flex-col border-t border-border first:border-t-0 md:table-row">
                <th scope="row" className="bg-secondary px-6 pt-4 pb-2 font-serif text-lg font-semibold md:bg-transparent md:py-5">
                  {row.aspect}
                </th>
                <td className="px-6 py-2 leading-relaxed md:py-5">
                  <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold md:hidden">
                    Noon
                  </span>
                  {row.past}
                </td>
                <td className="px-6 pt-2 pb-5 leading-relaxed md:py-5">
                  <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold md:hidden">
                    Ngayon
                  </span>
                  {row.present}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
