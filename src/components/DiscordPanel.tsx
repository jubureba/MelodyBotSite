import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PauseIcon, SkipIcon, StopIcon } from './icons'

interface Song {
  title: string
  artist: string
  duration: string
}

const PLAYLIST: Song[] = [
  { title: 'É Tarde Demais (Ao Vivo)', artist: 'Raça Negra', duration: '3:19' },
  { title: 'In The End', artist: 'Linkin Park', duration: '3:38' },
  { title: 'Like a Stone', artist: 'Audioslave', duration: '4:54' },
  { title: 'Evidências', artist: 'Chitãozinho & Xororó', duration: '4:31' },
]

function Equalizer() {
  return (
    <div className="flex h-4 items-end gap-0.5" aria-hidden="true">
      {[0.2, 0.5, 0.35, 0.7, 0.45].map((delay, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-neon"
          style={{
            height: '100%',
            animation: `equalize 0.9s ease-in-out ${delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

/** Painel do MelodyBot que "roda" a fila sozinho, como no Discord real. */
export function DiscordPanel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % PLAYLIST.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  const current = PLAYLIST[index]
  const queue = [1, 2, 3].map((offset) => PLAYLIST[(index + offset) % PLAYLIST.length])

  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-ink-card p-1 shadow-2xl">
      {/* Barra estilo mensagem do Discord */}
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand to-neon text-sm">
          🎵
        </div>
        <div className="text-sm">
          <span className="font-semibold text-white">MelodyBot</span>
          <span className="ml-1 rounded bg-brand px-1 text-[10px] font-bold uppercase text-white">
            App
          </span>
        </div>
      </div>

      {/* Embed */}
      <div className="mx-2 mb-2 overflow-hidden rounded-lg border-l-4 border-brand bg-ink-soft">
        <div className="p-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neon">
            <Equalizer />
            Tocando agora
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-lg font-bold leading-tight text-white">{current.title}</p>
              <p className="text-sm text-slate-400">{current.artist}</p>
            </motion.div>
          </AnimatePresence>

          {/* Barra de progresso animada */}
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              key={current.title + '-bar'}
              className="h-full rounded-full bg-gradient-to-r from-brand to-neon"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.2, ease: 'linear' }}
            />
          </div>
          <div className="mt-1 flex justify-between font-mono text-[11px] text-slate-500">
            <span>0:00</span>
            <span>{current.duration}</span>
          </div>

          {/* Fila */}
          <div className="mt-4">
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
              📜 Na fila
            </p>
            <ul className="space-y-1">
              {queue.map((song, i) => (
                <li
                  key={song.title + i}
                  className="flex items-center justify-between text-sm text-slate-300"
                >
                  <span className="truncate">
                    <span className="text-slate-500">{i + 1}.</span> {song.title} —{' '}
                    <span className="text-slate-500">{song.artist}</span>
                  </span>
                  <span className="ml-2 shrink-0 font-mono text-[11px] text-slate-500">
                    {song.duration}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Botões de controle */}
      <div className="flex gap-1.5 px-2 pb-2">
        {[PauseIcon, SkipIcon, StopIcon].map((Icon, i) => (
          <div
            key={i}
            className="grid h-9 flex-1 place-items-center rounded-md bg-white/5 text-slate-300 transition hover:bg-white/10"
          >
            <Icon className="h-4 w-4" />
          </div>
        ))}
      </div>
    </div>
  )
}
