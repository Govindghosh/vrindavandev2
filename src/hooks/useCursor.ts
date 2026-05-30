'use client'

import { useEffect, useState } from 'react'

export function useCursor() {
  const [point, setPoint] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return
    }

    const handleMove = (event: MouseEvent) => {
      setPoint({ x: event.clientX, y: event.clientY })
    }

    const handleDown = () => setIsActive(true)
    const handleUp = () => setIsActive(false)

    const overTargets = ['a', 'button', 'input', 'label']
    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      setIsHovering(!!target && overTargets.some((tag) => target.closest(tag)))
    }

    const handleMouseOut = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return { point, isActive, isHovering }
}
