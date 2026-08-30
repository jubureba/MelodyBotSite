import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string
  title: string
  subtitle?: string
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-neon">
        {kicker}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}
