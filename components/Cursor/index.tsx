import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useContextSelector } from 'use-context-selector'
import AppContext from 'context/appContext'

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

  // to replace this with context
  const focused = cursorType === 'focus'
  const cursorRad = focused ? 10 : 32

  return (
    <motion.span
      className="touch-none pointer-events-none left-0 top-0 fixed z-10 rounded-full flex"
      animate={
        focused
          ? {
              x: mousePosition.x - cursorRad,
              y: mousePosition.y - cursorRad,
              opacity: 1,
            }
          : {
              x: mousePosition.x - cursorRad,
              y: mousePosition.y - cursorRad,
              opacity: 0.1,
            }
      }
      transition={{
        ease: 'easeOut',
        duration: 0.5,
      }}>
      <motion.span
        transition={{
          type: 'spring',
          stiffness: 150,
          duration: 0.5,
        }}
        animate={
          focused
            ? {
                height: 24,
                width: 24,
              }
            : {
                height: 64,
                width: 64,
              }
        }
        className="bg-blue-700 rounded-full items-center justify-center"
      />
    </motion.span>
  )
}

export default Cursor
