import { GithubIcon } from '../components/icons'
import { LINKS } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand to-neon text-xs">
            🎵
          </span>
          <span className="font-bold text-white">MelodyBot</span>
          <span className="text-sm text-slate-500">· música paraense</span>
        </div>

        <p className="text-xs text-slate-500">
          © {year} · Feito por{' '}
          <a href={LINKS.author} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
            Anderson Lima
          </a>
          . Não afiliado ao Discord.
        </p>

        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-400 transition hover:text-white"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
      </div>
    </footer>
  )
}
