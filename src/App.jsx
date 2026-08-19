import Nav from "./components/Nav"
import Hero from "./components/Hero"
import SessionPreview from "./components/SessionPreview"
import HowItWorks from "./components/HowItWorks"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"
import useKonami from "./hooks/useKonami"

function App() {
  const [egg, closeEgg] = useKonami();
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Nav />
      <Hero />
      <SessionPreview />
      <HowItWorks />
      <CTASection />
      <Footer />
      {egg && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-ink/90 backdrop-blur-sm" onClick={closeEgg}>
          <div className="text-center px-6">
            <p className="font-display text-4xl text-signal mb-4">You found the still point.</p>
            <p className="text-muted font-mono text-sm">click anywhere to close</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App


