
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function EnvelopeIntro({ onComplete }) {
  const [opened, setOpened] = useState(false)

  const handleTap = () => {
    if (opened) return

    setOpened(true)

    setTimeout(() => {
      sessionStorage.setItem('invited', 'true')
      onComplete()
    }, 500)
  }

  return (
    <motion.section
      onClick={handleTap}
      initial={{ opacity: 1 }}
      animate={{ opacity: opened ? 0 : 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100svh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 10
      }}
    >
      <div
        style={{
          width: 'min(100vw, 56.25svh)',
          height: 'min(100svh, 177.78vw)',
          aspectRatio: '9 / 16',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
          backgroundImage: "url('/env2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <motion.img
          src="/envelope.png"
          alt="P & D Wedding Invitation"
          animate={
            opened
              ? { scale: 1.04, opacity: 0 }
              : { y: [0, -8, 0] }
          }
          transition={
            opened
              ? { duration: 0.5, ease: 'easeInOut' }
              : { duration: 2, repeat: Infinity }
          }
          style={{
            display: 'block',
            width: '90%',
            maxWidth: '400px',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>
    </motion.section>
  )
}
