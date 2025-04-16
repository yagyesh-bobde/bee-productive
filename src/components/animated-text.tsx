"use client"

import { motion } from "framer-motion"
import type { FC } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  highlightClass?: string
  highlightWords?: string[]
}

export const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  className = "",
  highlightClass = "",
  highlightWords = [],
}) => {
  // Split text into words
  const words = text.split(" ")

  // Animation variants for container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  // Animation variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
          className={highlightWords.includes(word) ? highlightClass : ""}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
