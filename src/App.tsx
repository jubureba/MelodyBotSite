import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { VibeDemo } from './sections/VibeDemo'
import { Commands } from './sections/Commands'
import { Pricing } from './sections/Pricing'
import { CTA } from './sections/CTA'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <VibeDemo />
        <Commands />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
