import { Reveal, SectionHeading } from '../components/Reveal'
import { CheckIcon, DiscordIcon, LockIcon, SparkleIcon } from '../components/icons'
import { LINKS, PLAN_TABLE, PREMIUM_PRICE } from '../data/content'

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <CheckIcon className="mx-auto h-4 w-4 text-neon" />
  if (value === false) return <LockIcon className="mx-auto h-4 w-4 text-slate-600" />
  return <span className="text-slate-300">{value}</span>
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="pointer-events-none absolute right-1/4 top-10 h-72 w-72 rounded-full bg-neon-gold/10 blur-[100px]" />
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          kicker="Planos"
          title="Grátis pra sempre. Premium quando quiser mais."
          subtitle="Comece de graça. Desbloqueie IA, autoplay e mais com o Premium."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Free */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-card p-8">
              <h3 className="text-xl font-bold text-white">Free</h3>
              <p className="mt-1 text-sm text-slate-400">Tudo que um servidor precisa pra começar.</p>
              <p className="mt-6 text-4xl font-black text-white">
                R$ 0<span className="text-lg font-medium text-slate-500">/sempre</span>
              </p>
              <a
                href={LINKS.invite}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 py-3 font-semibold text-white transition hover:border-white/30"
              >
                <DiscordIcon className="h-5 w-5" />
                Adicionar grátis
              </a>
            </div>
          </Reveal>

          {/* Premium */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-neon-gold/30 bg-gradient-to-b from-neon-gold/[0.08] to-ink-card p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neon-gold/20 blur-3xl" />
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">Premium</h3>
                <span className="rounded-full bg-neon-gold/20 px-2.5 py-0.5 text-xs font-bold text-neon-gold">
                  ✨ Popular
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-400">O MelodyBot no máximo, por servidor.</p>
              <p className="mt-6 text-4xl font-black text-white">
                R$ {PREMIUM_PRICE.toFixed(2).replace('.', ',')}
                <span className="text-lg font-medium text-slate-500">/mês</span>
              </p>
              <a
                href={LINKS.invite}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-neon-gold py-3 font-bold text-ink transition hover:brightness-110"
              >
                <span className="absolute inset-0 shimmer animate-shimmer" />
                <SparkleIcon className="relative h-5 w-5" />
                <span className="relative">Assinar Premium</span>
              </a>
              <p className="mt-3 text-center text-xs text-slate-500">
                Pagamento via Pix ou cartão · cancele quando quiser
              </p>
            </div>
          </Reveal>
        </div>

        {/* Tabela comparativa */}
        <Reveal delay={0.15} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-ink-card">
                  <th className="px-5 py-4 text-left font-semibold text-slate-300">Recurso</th>
                  <th className="px-5 py-4 text-center font-semibold text-slate-300">Free</th>
                  <th className="px-5 py-4 text-center font-semibold text-neon-gold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {PLAN_TABLE.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}
                  >
                    <td className="px-5 py-3.5 text-slate-300">{row.label}</td>
                    <td className="px-5 py-3.5 text-center">
                      <Cell value={row.free} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <Cell value={row.premium} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-sm text-slate-500">
          Pagamento processado com segurança via Mercado Pago. O plano vale por servidor.
        </p>
      </div>
    </section>
  )
}
