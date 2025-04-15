import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Waitlist } from "@clerk/nextjs"

export function WaitlistComponent() {
  return (
    <section id="waitlist" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Among The First To Experience It</h2>
            <p className="text-zinc-300 mb-8">
              Join our exclusive waitlist today and be the first to experience the future of productivity. Early
              adopters will receive special perks, including:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-500/20 p-1 mt-1">
                  <div className="rounded-full bg-emerald-500 w-2 h-2"></div>
                </div>
                <span className="text-zinc-300">Early access to all premium features</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-500/20 p-1 mt-1">
                  <div className="rounded-full bg-emerald-500 w-2 h-2"></div>
                </div>
                <span className="text-zinc-300">Bonus cash rewards for early adopters</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-500/20 p-1 mt-1">
                  <div className="rounded-full bg-emerald-500 w-2 h-2"></div>
                </div>
                <span className="text-zinc-300">Exclusive community access with founders</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-500/20 p-1 mt-1">
                  <div className="rounded-full bg-emerald-500 w-2 h-2"></div>
                </div>
                <span className="text-zinc-300">Lifetime discount on premium tiers</span>
              </li>
            </ul>

            <div className="flex items-center gap-4 text-zinc-400 text-sm">
              <div className="flex -space-x-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-zinc-900"
                  alt="User avatar"
                />
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-zinc-900"
                  alt="User avatar"
                />
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-zinc-900"
                  alt="User avatar"
                />
              </div>
              <span>Join 2,500+ people already on the waitlist</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Waitlist /> 
          </div>
        </div>
      </div>
    </section>
  )
}
