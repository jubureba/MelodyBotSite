import { Reveal, SectionHeading } from '../components/Reveal'
import { FEATURES } from '../data/content'

const ACCENT_CLASSES: Record<string, string> = {
  brand: 'from-brand/20 text-brand-light',
  neon: 'from-neon/20 text-neon',
  pink: 'from-neon-pink/20 text-neon-pink',
  gold: 'from-neon-gold/20 text-neon-gold',
}

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="Recursos"
          title="Mais que um tocador de músicas"
          subtitle="Os bots grandes tocam o que você manda. O MelodyBot entende o momento."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.id} delay={(i % 3) * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-card p-6 transition hover:-translate-y-1 hover:border-white/20">
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition group-hover:opacity-100 ${ACCENT_CLASSES[f.accent]}`}
                />
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl">{f.icon}</span>
                  {f.premium && (
                    <span className="rounded-full border border-neon-gold/30 bg-neon-gold/10 px-2.5 py-1 text-xs font-semibold text-neon-gold">
                      ✨ Premium
                    </span>
                  )}
                </div>
                <p className={`font-mono text-xs font-semibold uppercase tracking-wide ${ACCENT_CLASSES[f.accent].split(' ')[1]}`}>
                  {f.tagline}
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {f.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
