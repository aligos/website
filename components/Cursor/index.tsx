import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useContextSelector } from 'use-context-selector'
import AppContext from 'context/appContext'

const SIZE_TRANSITION = {
  type: 'spring',
  stiffness: 150,
  duration: 0.5,
}

const Cursor = () => {
  const cursorType = useContextSelector(AppContext, (s) => s.cursorType)
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const focused = cursorType === 'focus'
  const cursorRad = focused ? 10 : 32
  const POS = { x: mousePosition.x - cursorRad, y: mousePosition.y - cursorRad }

  return (
    <motion.span
      className="touch-none pointer-events-none left-0 top-0 fixed z-10 rounded-full bg-blue-700"
      animate={
        focused
          ? {
              ...POS,
              opacity: 1,
              height: 24,
              width: 24,
            }
          : {
              ...POS,
              opacity: 0.1,
              height: 64,
              width: 64,
            }
      }
      transition={{
        default: {
          ease: 'easeOut',
          duration: 0.5,
        },
        height: SIZE_TRANSITION,
        width: SIZE_TRANSITION,
      }}
    />
  )
}

export default Cursor
