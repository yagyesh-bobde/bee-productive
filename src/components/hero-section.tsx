"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/30 px-3 py-1 text-sm font-medium text-zinc-300 backdrop-blur-md mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
            Coming Soon
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Achieve Goals. Connect. Earn Cash.
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-8">
            The next generation productivity platform that rewards you for completing tasks while connecting you with
            like-minded people around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-6 rounded-full text-lg font-medium"
              onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-white">Task Management</h3>
                <p className="text-zinc-400">Create and track your goals with our intuitive interface</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-white">Global Community</h3>
                <p className="text-zinc-400">Connect with people sharing similar goals worldwide</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-white">Cash Rewards</h3>
                <p className="text-zinc-400">Earn real money by completing your tasks and goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
