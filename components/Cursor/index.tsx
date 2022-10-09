import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import clsx from '../../utils/clsx'

const Cursor = () => {
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
  const focused = false

  const cursorRad = focused ? 16 : 32

  return (
    <motion.span
      className={clsx(
        'pointer-none touch-none h-16 w-16 left-0 top-0 opacity-10 fixed z-10 bg-blue-500 rounded-full',
        focused && 'h-8 w-8 opacity-100'
      )}
      animate={{
        x: mousePosition.x - cursorRad,
        y: mousePosition.y - cursorRad,
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.5,
      }}
    />
  )
}

export default Cursor
