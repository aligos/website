import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import clsx from 'utils/clsx'
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
  const cursorRad = focused ? 16 : 32

  return (
    <motion.span
      className={clsx(
        'touch-none pointer-events-none left-0 top-0 fixed z-10 bg-blue-500 rounded-full'
      )}
      animate={
        focused
          ? {
              x: mousePosition.x - cursorRad,
              y: mousePosition.y - cursorRad,
              height: 32,
              width: 32,
              opacity: 1,
            }
          : {
              x: mousePosition.x - cursorRad,
              y: mousePosition.y - cursorRad,
              height: 64,
              width: 64,
              opacity: 0.1,
            }
      }
      transition={{
        ease: 'easeOut',
        duration: 0.5,
      }}
    />
  )
}

export default Cursor
