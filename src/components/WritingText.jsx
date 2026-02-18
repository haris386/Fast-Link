"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import * as React from "react"

export default function WritingText({
  text,
  className,
  spacing = 8,
}) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  const words = text.split(" ")

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.8,
            delay: index * 0.5,
          }}
          style={{ marginRight: spacing }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
