import { useState } from 'react'
import { Reveal, SectionHeading } from '../components/Reveal'
import { COMMANDS } from '../data/content'

type Filter = 'all' | 'free' | 'premium'

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'free', label: 'Free' },
  { id: 'premium', label: 'Premium' },
]

export function Commands() {
  const [filter, setFilter] = useState<Filter>('all')

  const list = COMMANDS.filter((c) =>
    filter === 'all' ? true : filter === 'premium' ? c.premium : !c.premium,
  )

  return (
    <section id="commands" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          kicker="Comandos"
          title="Slash commands, do jeito moderno"
          subtitle="Tudo por / — sem prefixo pra decorar."
        />

        <Reveal className="mb-8 flex justify-center">
          <div className="inline-flex rounded-full border border-white/10 bg-ink-card p-1">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  filter === f.id ? 'bg-brand text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {list.map((cmd, i) => (
            <Reveal key={cmd.name} delay={(i % 2) * 0.05}>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-card p-4">
                <code className="rounded-lg bg-brand/15 px-2.5 py-1 font-mono text-sm font-semibold text-brand-light">
                  /{cmd.name}
                </code>
                <div className="min-w-0 flex-1">
                  {cmd.args && (
                    <span className="font-mono text-xs text-slate-500">{cmd.args}</span>
                  )}
                  <p className="text-sm text-slate-300">{cmd.desc}</p>
                </div>
                {cmd.premium && (
                  <span className="shrink-0 text-xs font-semibold text-neon-gold">✨</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
