import { Reveal } from '../components/Reveal'
import { DiscordIcon } from '../components/icons'
import { LINKS } from '../data/content'

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand/20 via-ink-card to-neon/10 p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-neon/20 blur-3xl" />

            <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Bora dar um som no seu servidor?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-slate-300">
              Adicione o MelodyBot em segundos. É grátis pra começar e a galera vai sentir a diferença.
            </p>
            <a
              href={LINKS.invite}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white transition hover:bg-brand-light hover:shadow-xl hover:shadow-brand/40"
            >
              <DiscordIcon className="h-6 w-6" />
              Adicionar ao Discord
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
