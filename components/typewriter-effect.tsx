"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimate } from "framer-motion"
import { useEffect, useState } from "react"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [scope, animate] = useAnimate()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentWord = words[currentWordIndex].text

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1))
        setTypingSpeed(150)

        if (displayedText === currentWord) {
          // Wait before starting to delete
          setTypingSpeed(1500)
          setIsDeleting(true)
        }
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1))
        setTypingSpeed(75)

        if (displayedText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className={cn("flex items-center", className)}>
      <div ref={scope} className="inline-block">
        <span className={cn(words[currentWordIndex].className)}>{displayedText}</span>
      </div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 bg-primary", cursorClassName)}
      ></motion.span>
    </div>
  )
}
