import { motion } from 'framer-motion'
import { DiscordPanel } from '../components/DiscordPanel'
import { DiscordIcon, GithubIcon } from '../components/icons'
import { LINKS } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-brand/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[28rem] w-[28rem] rounded-full bg-neon/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-neon-pink/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            Agora em Python · com DJ movido a IA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            O bot de música que <span className="text-gradient animate-gradient-pan">entende a vibe</span> do seu servidor
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400"
          >
            O <strong className="text-white">MelodyBot</strong> não só toca o que você pede —
            ele monta filas com IA, continua sozinho quando a fila acaba e mostra a
            retrospectiva da galera. Música paraense, sem complicação. 🎶
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={LINKS.invite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-light hover:shadow-lg hover:shadow-brand/40"
            >
              <DiscordIcon className="h-5 w-5" />
              Adicionar ao Discord
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
              Código aberto
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500"
          >
            <span>✓ Slash commands</span>
            <span>✓ Painel único</span>
            <span>✓ Grátis pra começar</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -z-10 animate-float rounded-3xl bg-gradient-to-tr from-brand/30 to-neon/30 blur-2xl" />
          <DiscordPanel />
        </motion.div>
      </div>
    </section>
  )
}
