import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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

  return (
    <motion.span
      className="pointer-none touch-none h-16 w-16 left-0 top-0 opacity-10 fixed z-10 bg-blue-500 rounded-full"
      animate={{
        x: mousePosition.x - 32,
        y: mousePosition.y - 32,
      }}
      transition={{
        ease: 'linear',
        duration: 0.5,
      }}
    />
  )
}

export default Cursor
