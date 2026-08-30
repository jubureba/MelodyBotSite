import { useEffect, useState } from 'react'
import { LINKS } from '../data/content'
import { DiscordIcon, GithubIcon } from './icons'

const NAV = [
  { href: '#features', label: 'Recursos' },
  { href: '#commands', label: 'Comandos' },
  { href: '#pricing', label: 'Planos' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink/80 backdrop-blur-lg' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-neon text-sm">
            🎵
          </span>
          <span className="text-lg font-extrabold text-white">MelodyBot</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full text-slate-400 transition hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={LINKS.invite}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-light sm:flex"
          >
            <DiscordIcon className="h-4 w-4" />
            Adicionar
          </a>
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full text-slate-300 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-4 bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-3 h-0.5 w-4 bg-current transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink/95 px-5 py-3 backdrop-blur md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKS.invite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-lg bg-brand px-3 py-2.5 text-center text-sm font-semibold text-white"
          >
            Adicionar ao Discord
          </a>
        </nav>
      )}
    </header>
  )
}
