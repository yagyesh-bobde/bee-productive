"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { waitlist, boostPercent, goalCopmletion, startDate } from "@/lib/constants"

export function Stats() {
  const [counts, setCounts] = useState([0, 0, 0])
  const [currentWaitlist, setCurrentWaitlist] = useState(waitlist)
  
  // Calculate current waitlist based on days since start date
  useEffect(() => {
    const calculateWaitlist = () => {
      const startDateObj = new Date(startDate)
      const currentDate = new Date()
      
      // Calculate days difference
      const timeDiff = currentDate.getTime() - startDateObj.getTime()
      const daysDiff = Math.max(0, Math.floor(timeDiff / (1000 * 3600 * 24)))
      
      // Calculate new waitlist count (initial + 50 per day)
      const newWaitlist = waitlist + (daysDiff * 50)
      setCurrentWaitlist(newWaitlist)
    }
    
    calculateWaitlist()
  }, [])
  
  // Define target counts and labels using constants
  const targetCounts = [currentWaitlist, boostPercent, goalCopmletion]
  const labels = ["Waitlist", "% Productivity Boost", "% Goal Completion"]
  const displayValues = [`${currentWaitlist}+`, `${boostPercent}%`, `${goalCopmletion}%`]

  useEffect(() => {
    const duration = 2000 // 2 seconds for the count animation
    const interval = 20 // Update every 20ms

    const timers = targetCounts.map((target, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts]
          const step = Math.ceil(target / (duration / interval))
          newCounts[index] = Math.min(prevCounts[index] + step, target)
          return newCounts
        })
      }, interval)
    })

    return () => {
      timers.forEach((timer) => clearInterval(timer))
    }
  }, [targetCounts]) // Add targetCounts as dependency since it includes currentWaitlist

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
        >
          {displayValues.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="space-y-2"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {counts[i] === targetCounts[i] ? value : counts[i] + (i === 0 ? "+" : "%")}
              </h3>
              <p className="text-sm text-gray-600">{labels[i]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
