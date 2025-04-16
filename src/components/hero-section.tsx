"use client"

import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4">
      <div className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-200/30 to-purple-200/30 blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-blue-200/30 to-cyan-200/30 blur-[100px] translate-x-1/3"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <BackgroundGradient 
            containerClassName="mb-6" 
            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
            Coming Soon
          </BackgroundGradient>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500">
            Achieve Goals. Connect. Earn Cash.
          </h1>

          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mb-8">
            The next generation productivity platform that rewards you for completing tasks while connecting you with
            like-minded people around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-violet-500/20"
              onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-slate-900">Task Management</h3>
                <p className="text-slate-600">Create and track your goals with our intuitive interface</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-fuchsia-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-slate-900">Global Community</h3>
                <p className="text-slate-600">Connect with people sharing similar goals worldwide</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-slate-900">Cash Rewards</h3>
                <p className="text-slate-600">Earn real money by completing your tasks and goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
