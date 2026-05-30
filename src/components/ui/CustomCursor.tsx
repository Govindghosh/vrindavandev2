'use client'

import { useEffect, useState } from 'react'
import { useCursor } from '@/hooks/useCursor'

export default function CustomCursor() {
  const { point, isActive, isHovering } = useCursor()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine)
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)` }}
      />
      <div
        className={`custom-cursor-ring ${isHovering ? 'active' : ''} ${isActive ? 'pulse' : ''}`}
        style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)` }}
      />
    </>
  )
}
