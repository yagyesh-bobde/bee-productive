import type React from "react"
import { Target, Users, DollarSign, Zap, Shield, Globe } from "lucide-react"
import { BackgroundGradient } from "./ui/background-gradient";

export function Features() {
  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Our innovative approach combines productivity, social networking, and rewards to keep you motivated and
            connected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Target className="h-10 w-10 text-emerald-400" />}
            title="Smart Goal Tracking"
            description="Set SMART goals with deadlines, milestones, and progress tracking to stay on top of your productivity."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-emerald-400" />}
            title="Global Community"
            description="Connect with like-minded individuals from around the world who share similar goals and aspirations."
          />
          <FeatureCard
            icon={<DollarSign className="h-10 w-10 text-emerald-400" />}
            title="Cash Rewards"
            description="Earn real money by completing your tasks, hitting milestones, and helping others achieve their goals."
          />
          <FeatureCard
            icon={<Zap className="h-10 w-10 text-emerald-400" />}
            title="Productivity Boosters"
            description="Access tools and techniques designed to enhance your focus and efficiency while working on tasks."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-emerald-400" />}
            title="Accountability Partners"
            description="Partner up with others to stay accountable and motivated throughout your journey."
          />
          <FeatureCard
            icon={<Globe className="h-10 w-10 text-emerald-400" />}
            title="Cross-Platform Access"
            description="Access your goals and connect with the community from any device, anywhere in the world."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-emerald-500/50 hover:bg-zinc-800/80 transition-all duration-300">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-zinc-400">{description}</p>
    </div>
  )
}
