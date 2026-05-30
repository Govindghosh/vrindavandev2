'use client'

import { useEffect, useMemo, useState } from 'react'

export function useTypewriter(words: string[], typingSpeed = 80, pauseTime = 1200) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  const activeWord = useMemo(() => words[index % words.length], [index, words])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (typing) {
      const nextText = activeWord.slice(0, displayed.length + 1)
      timeoutId = setTimeout(() => {
        setDisplayed(nextText)
        if (nextText === activeWord) {
          setTyping(false)
        }
      }, typingSpeed)
    } else {
      timeoutId = setTimeout(() => {
        setTyping(true)
        setIndex((current) => (current + 1) % words.length)
        setDisplayed('')
      }, pauseTime)
    }

    return () => clearTimeout(timeoutId)
  }, [activeWord, displayed, typing, pauseTime, typingSpeed, words])

  return { displayed, currentWord: activeWord }
}
