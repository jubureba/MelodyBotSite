import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, SectionHeading } from '../components/Reveal'
import { SparkleIcon } from '../components/icons'
import { VIBE_EXAMPLES } from '../data/content'

// Playlists fake por clima, só para a demo do site.
const DEMO_RESULTS: Record<string, string[]> = {
  'sexta à noite pra relaxar': [
    'Djavan — Oceano',
    'Marisa Monte — Ainda Bem',
    'Los Hermanos — Anna Júlia',
    'Tim Maia — Você',
  ],
  'treino pesado na academia': [
    'Eminem — Till I Collapse',
    'The Prodigy — Breathe',
    'Linkin Park — Faint',
    'Kanye West — Stronger',
  ],
  'pagode de churrasco no domingo': [
    'Raça Negra — É Tarde Demais',
    'Grupo Revelação — Deixa a Vida Me Levar',
    'Zeca Pagodinho — Deixa a Vida Me Levar',
    'Turma do Pagode — Lancinho',
  ],
  'nostalgia dos anos 2000': [
    'Coldplay — Yellow',
    'Evanescence — Bring Me to Life',
    'Kelly Key — Baba',
    'Restart — Recomeçar',
  ],
  'foco total pra codar': [
    'Ludovico Einaudi — Nuvole Bianche',
    'Bonobo — Kong',
    'Tycho — Awake',
    'ODESZA — A Moment Apart',
  ],
  'festa que não pode parar': [
    'Dua Lipa — Levitating',
    'Anitta — Envolver',
    'Daft Punk — One More Time',
    'The Weeknd — Blinding Lights',
  ],
}

export function VibeDemo() {
  const [selected, setSelected] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const pick = (mood: string) => {
    setSelected(null)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSelected(mood)
    }, 900)
  }

  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-neon/10 blur-[100px]" />
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          kicker="DJ com IA"
          title="Diz a vibe. O bot faz a fila."
          subtitle="Experimente aqui: escolha um clima e veja o /vibe montar uma playlist."
        />

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-ink-card p-6 sm:p-8">
            {/* Input fake estilo Discord */}
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-ink-soft px-4 py-3 font-mono text-sm">
              <span className="text-neon">/vibe</span>
              <span className="text-slate-500">
                {selected ?? 'escolha um clima abaixo…'}
              </span>
            </div>

            {/* Chips de clima */}
            <div className="mt-4 flex flex-wrap gap-2">
              {VIBE_EXAMPLES.map((mood) => (
                <button
                  key={mood}
                  onClick={() => pick(mood)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    selected === mood
                      ? 'border-neon bg-neon/10 text-neon'
                      : 'border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>

            {/* Resultado */}
            <div className="mt-6 min-h-[13rem]">
              <AnimatePresence mode="wait">
                {loading && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-slate-400"
                  >
                    <SparkleIcon className="h-5 w-5 animate-spin text-neon" />
                    A IA está montando sua fila…
                  </motion.div>
                )}

                {!loading && selected && (
                  <motion.div
                    key={selected}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-neon">
                      <SparkleIcon className="h-4 w-4" /> Fila gerada para “{selected}”
                    </p>
                    <ul className="space-y-2">
                      {DEMO_RESULTS[selected].map((song, i) => (
                        <motion.li
                          key={song}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 rounded-lg border border-white/5 bg-ink-soft px-4 py-2.5 text-sm text-slate-200"
                        >
                          <span className="font-mono text-xs text-slate-500">{i + 1}</span>
                          🎵 {song}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {!loading && !selected && (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 items-center justify-center text-center text-sm text-slate-500"
                  >
                    Toque num clima e veja a mágica acontecer ✨
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <p className="mt-4 text-center text-xs text-slate-500">
              Demonstração ilustrativa. No Discord, o /vibe usa IA de verdade e o histórico do seu servidor.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
