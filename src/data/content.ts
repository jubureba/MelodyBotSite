export const LINKS = {
  invite:
    'https://discord.com/oauth2/authorize?client_id=1156005495455358997&permissions=3148800&scope=bot%20applications.commands',
  github: 'https://github.com/jubureba/MelodyBot',
  author: 'https://github.com/jubureba',
}

export const PREMIUM_PRICE = 9.9

export interface Feature {
  id: string
  icon: string
  title: string
  tagline: string
  description: string
  premium: boolean
  accent: 'brand' | 'neon' | 'pink' | 'gold'
}

export const FEATURES: Feature[] = [
  {
    id: 'panel',
    icon: '🎛️',
    title: 'Painel único',
    tagline: 'Um card só, sempre atualizado',
    description:
      'Nada de spam no canal. O MelodyBot mantém um único painel por servidor que se atualiza sozinho conforme a fila anda — com controles por botão e a lista do que vem a seguir.',
    premium: false,
    accent: 'brand',
  },
  {
    id: 'vibe',
    icon: '🧠',
    title: 'DJ com IA',
    tagline: '/vibe — descreva o momento',
    description:
      'Em vez de digitar música por música, diga o clima: "sexta relaxante", "treino pesado", "pagode de churrasco". A IA monta a fila usando o histórico do servidor para acertar o gosto.',
    premium: true,
    accent: 'neon',
  },
  {
    id: 'autoplay',
    icon: '📻',
    title: 'Rádio inteligente',
    tagline: '/autoplay — nunca fica em silêncio',
    description:
      'Quando a fila acaba, o bot continua sozinho com faixas coerentes com o que o servidor vinha ouvindo. Como o autoplay do YouTube, mas por comunidade.',
    premium: true,
    accent: 'pink',
  },
  {
    id: 'wrapped',
    icon: '📊',
    title: 'Wrapped do servidor',
    tagline: '/wrapped — sua retrospectiva',
    description:
      'Um "Wrapped" do seu servidor: as músicas mais tocadas, o total de plays e o ranking de quem mais pediu. Feito pra render print e engajamento.',
    premium: false,
    accent: 'gold',
  },
  {
    id: 'voteskip',
    icon: '🗳️',
    title: 'Vote-skip justo',
    tagline: 'Democracia no canal',
    description:
      'Pular exige maioria dos ouvintes — quem pediu a música ou canal pequeno pula direto. Fim do abuso de pular a faixa dos outros.',
    premium: false,
    accent: 'brand',
  },
  {
    id: 'quality',
    icon: '🎧',
    title: 'Áudio sem Lavalink',
    tagline: 'Leve e estável',
    description:
      'Busca por nome ou link via yt-dlp, tocando num processo só. Menos infraestrutura, mais estabilidade — e fácil de hospedar.',
    premium: false,
    accent: 'neon',
  },
]

export interface Command {
  name: string
  args?: string
  desc: string
  premium: boolean
}

export const COMMANDS: Command[] = [
  { name: 'play', args: '<busca ou url>', desc: 'Toca ou adiciona à fila', premium: false },
  { name: 'skip', desc: 'Pula (vote-skip democrático)', premium: false },
  { name: 'stop', desc: 'Para tudo e limpa a fila', premium: false },
  { name: 'pause', desc: 'Pausa a reprodução', premium: false },
  { name: 'resume', desc: 'Retoma a reprodução', premium: false },
  { name: 'queue', desc: 'Mostra a fila', premium: false },
  { name: 'loop', args: '<off|track|queue>', desc: 'Modo de repetição', premium: false },
  { name: 'wrapped', desc: 'Retrospectiva do servidor', premium: false },
  { name: 'plan', desc: 'Plano atual do servidor', premium: false },
  { name: 'vibe', args: '<clima>', desc: 'DJ com IA monta a fila', premium: true },
  { name: 'autoplay', desc: 'Liga/desliga o rádio inteligente', premium: true },
]

export interface PlanRow {
  label: string
  free: string | boolean
  premium: string | boolean
}

export const PLAN_TABLE: PlanRow[] = [
  { label: 'Fila de músicas', free: 'até 20 faixas', premium: 'ilimitada' },
  { label: 'Duração por faixa', free: 'até 30 min', premium: 'sem limite' },
  { label: 'Painel único + controles', free: true, premium: true },
  { label: 'Vote-skip e /wrapped', free: true, premium: true },
  { label: 'DJ com IA (/vibe)', free: false, premium: true },
  { label: 'Rádio inteligente (/autoplay)', free: false, premium: true },
  { label: 'Filtros de áudio', free: false, premium: true },
  { label: 'Playlists salvas', free: false, premium: true },
  { label: 'Suporte prioritário', free: false, premium: true },
]

export const VIBE_EXAMPLES = [
  'sexta à noite pra relaxar',
  'treino pesado na academia',
  'pagode de churrasco no domingo',
  'nostalgia dos anos 2000',
  'foco total pra codar',
  'festa que não pode parar',
]
