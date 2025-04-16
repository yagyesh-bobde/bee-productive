"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function SplashScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 5
      })
    }, 50)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            {/* Hexagon background */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              <motion.path
                d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
                fill="#FEF3C7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
            </svg>

            {/* Bee icon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-4xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
             🐝 
            </motion.div>

            {/* Animated circles */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.6 }}
            >
              <div className="absolute inset-0 rounded-full border-4 border-amber-200 scale-[0.8] opacity-50"></div>
            </motion.div>
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1 }}
            >
              <div className="absolute inset-0 rounded-full border-4 border-amber-200 scale-[1.1] opacity-30"></div>
            </motion.div>
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1.4 }}
            >
              <div className="absolute inset-0 rounded-full border-4 border-amber-200 scale-[1.4] opacity-10"></div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">BeeProductive</h1>
          <p className="text-amber-600 text-sm md:text-base mb-6">Transforming productivity into profit</p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-1 bg-amber-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
        <div className="w-full max-w-xs bg-gray-100 rounded-full h-1 mt-6">
          <div className="h-1 bg-amber-500 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-sm text-gray-500 text-center"
        >
          Give a boost to your productivity...
        </motion.p>
      </div>

      {/* Animated honeycomb pattern background */}
      <div className="absolute inset-0 -z-10 opacity-5 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-6 gap-4 transform rotate-12 scale-125">
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.01, duration: 0.5 }}
              className="w-16 h-16 bg-amber-500 rounded-full"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
