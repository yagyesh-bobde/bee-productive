"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import { Waitlist } from "@clerk/nextjs"
import { waitlist, startDate } from "@/lib/constants"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentWaitlist, setCurrentWaitlist] = useState(waitlist)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Calculate current waitlist based on days since start date
  useEffect(() => {
    const calculateWaitlist = () => {
      const startDateObj = new Date(startDate)
      const currentDate = new Date()
      
      // Calculate days difference
      const timeDiff = currentDate.getTime() - startDateObj.getTime()
      const daysDiff = Math.max(0, Math.floor(timeDiff / (1000 * 3600 * 24)))
      
      // Calculate new waitlist count (initial + 50 per day)
      const newWaitlist = waitlist + (daysDiff * 10)
      setCurrentWaitlist(newWaitlist)
    }
    
    calculateWaitlist()
  }, [])

  if (isLoading) {
    return <SplashScreen />
  }


  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    // {
    //   id: 5,
    //   name: "Tyler Durden",
    //   designation: "Soap Developer",
    //   image:
    //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    // },
    // {
    //   id: 6,
    //   name: "Dora",
    //   designation: "The Explorer",
    //   image:
    //     "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    // },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 md:pt-32 pb-16">
          <div className="absolute inset-0 -z-10 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col gap-4">
                <div className="flex justify-center lg:justify-start">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 mb-2"
                  >
                    Coming Soon
                  </motion.div>
                </div>
                <AnimatedText
                  text="10x Your Productivity"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
                  highlightClass="text-amber-500"
                  highlightWords={["10x"]}
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg md:text-xl text-gray-600 max-w-[600px]"
                >
                  Complete tasks, connect globally, and earn cash rewards.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center gap-2 mt-2"
                >
                  <div className="flex -space-x-2">
                    {people.map((i) => (
                      <motion.div
                        key={i.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i.id * 0.1, duration: 0.3 }}
                        className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                      >
                        <Image
                          src={i.image}
                          alt="User avatar"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">{currentWaitlist}+</span> people already on the waitlist
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative mx-auto max-w-sm lg:max-w-none"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl blur-xl opacity-70 transform -rotate-3"></div>
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-white rounded-xl shadow-lg p-1 md:p-2"
                >
                  <Waitlist />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Features Section */}
        <Features />

        {/* App Preview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative mx-auto max-w-sm lg:max-w-none"
                >
                  <Image
                    src="/images/scrum.png"
                    alt="App preview"
                    width={400}
                    height={600}
                    className="rounded-xl shadow-2xl mx-auto"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute -bottom-6 -right-6 bg-amber-100 rounded-lg p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-dollar-sign"
                        >
                          <line x1="12" x2="12" y1="2" y2="22" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Average Earnings</p>
                        <p className="text-xl font-bold text-gray-900">$10-100/month</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                  Turn Productivity Into Profit
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Complete Tasks, Earn Cash",
                      description: "Get paid real money for achieving your goals and completing tasks on time.",
                    },
                    {
                      title: "Global Community",
                      description: "Connect with people around the world who share similar goals and aspirations.",
                    },
                    {
                      title: "Smart Goal Tracking",
                      description: "Our AI-powered system helps you stay on track and maximize your productivity.",
                    },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * i, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 mt-1">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8f9fa] to-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4"
              >
                What Our Beta Users Say
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Early adopters are already seeing amazing results with our platform
              </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=48&width=48`}
                        alt="User avatar"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                      <p className="text-sm text-gray-600">Marketing Specialist</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "This app has completely transformed how I approach my daily tasks. The social aspect keeps me
                    motivated, and I've earned over $300 in my first month!"
                  </p>
                  <div className="flex items-center mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.svg
                        key={star}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + star * 0.1, duration: 0.3 }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6"
              >
                Ready to Transform Your Productivity?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-gray-600 mb-8"
              >
                Join our waitlist today and be among the first to experience the future of productive earning.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-xl shadow-lg p-1 md:p-2 max-w-md mx-auto"
              >
                <Waitlist />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
