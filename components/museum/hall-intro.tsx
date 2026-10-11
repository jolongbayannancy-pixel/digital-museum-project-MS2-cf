import Image from 'next/image'

export function HallIntro() {
  return (
    <section aria-labelledby="hall-title" className="relative">
      <div className="relative h-[52svh] min-h-80 w-full overflow-hidden">
        <Image
          src="/images/main-hall.png"
          alt="The museum's main hall: polished parquet floor, cream walls with dark wood wainscoting, capiz windows, framed photographs, and glass display cases under warm spotlights"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,21,14,0.55)_0%,rgba(31,21,14,0.1)_45%,#f3ead7_100%)]"
        />
        <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-start px-6 pt-12 text-center md:pt-16">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold-soft">
            Pangunahing Bulwagan
          </p>
          <h1 id="hall-title" className="mt-3 font-serif text-5xl font-semibold text-cream drop-shadow-lg md:text-7xl">
            The Main Hall
          </h1>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-24 max-w-5xl px-4 md:-mt-28 md:px-8">
        <div className="border border-gold/50 bg-card p-6 shadow-[0_20px_50px_rgba(42,29,20,0.25)] md:p-10">
          <div className="mx-auto mb-6 h-px w-24 bg-gold" aria-hidden="true" />
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <article lang="en">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">English</h2>
              <p className="mt-3 font-serif text-lg leading-relaxed text-foreground md:text-xl">
                Welcome to <strong className="font-semibold">BALIK-TANAW: Philippine Popular Culture Museum (2000–2010)</strong>.
                This digital museum takes you back to a decade that shaped how Filipinos watched television, enjoyed
                music and karaoke, expressed themselves through fashion, and connected with one another through
                evolving technology. Explore the objects, trends, and everyday experiences that became part of Filipino
                popular culture. As you enter each gallery, discover not only what was popular during that time, but
                also why these cultural experiences still matter today.
              </p>
            </article>
            <article lang="fil" className="md:border-l md:border-border md:pl-12">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Filipino / Taglish</h2>
              <p className="mt-3 font-serif text-lg italic leading-relaxed text-foreground/90 md:text-xl">
                Maligayang pagdating sa BALIK-TANAW! Inaanyayahan namin kayong balikan ang dekada 2000–2010, isang
                panahon na maraming nagbago sa paraan ng panonood, pakikinig sa musika, pananamit, at
                pakikipag-communicate ng mga Pilipino. Sa digital museum na ito, makikita natin ang mga bagay at trends
                na naging bahagi ng ating pang-araw-araw na buhay. Sa bawat gallery, aalamin natin kung paano ito naging
                popular, ano ang naging epekto nito sa kultura, at paano ito naiiba o nananatili sa kasalukuyan.
              </p>
            </article>
          </div>
          <p className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground md:text-base">
            <span className="font-medium text-foreground">Choose a gallery to begin your journey.</span>{' '}
            <span lang="fil" className="italic">
              Pumili ng pinto at tuklasin ang bawat bahagi ng ating popular culture.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
