"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
}

export function AnimatedCounter({ from, to, duration = 2 }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true })
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrameId: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * (to - from) + from))

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step)
        }
      }

      animationFrameId = window.requestAnimationFrame(step)

      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [from, to, duration, isInView])

  return <span ref={nodeRef}>{count}</span>
}
