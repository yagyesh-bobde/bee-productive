import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { WaitlistComponent } from "@/components/waitlist"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <HeroSection />
      <Features />
      <WaitlistComponent />
      <Footer />
    </main>
  )
}
