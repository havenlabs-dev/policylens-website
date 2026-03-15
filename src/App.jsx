import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Tiers from './components/Tiers'
import Security from './components/Security'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <Nav />
      <main id="main-content">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Tiers />
        <Security />
      </main>
      <Footer />
    </div>
  )
}
