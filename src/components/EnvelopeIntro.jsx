
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function EnvelopeIntro({ onComplete }) {
  const [opened, setOpened] = useState(false)

  const handleTap = () => {
    if (opened) return

    setOpened(true)

    setTimeout(() => {
      sessionStorage.setItem('invited', 'true')
      onComplete()
    }, 1800)
  }

  return (
    <motion.section
      onClick={handleTap}
      initial={{ opacity: 1 }}
      animate={{ opacity: opened ? 0 : 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100svh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: opened ? 'default' : 'pointer',
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
        {/* Envelope */}
        <motion.img
          src="/envelope.png"
          alt="P & D Wedding Invitation"
          initial={{ y: 0, scale: 1 }}
          animate={
            opened
              ? {
                  y: 35,
                  scale: 0.9,
                  opacity: 0,
                  rotateX: 8
                }
              : {
                  y: [0, -8, 0],
                  scale: 1
                }
          }
          transition={
            opened
              ? {
                  duration: 1.2,
                  ease: 'easeInOut'
                }
              : {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }
          }
          style={{
            display: 'block',
            width: '90%',
            maxWidth: '400px',
            height: 'auto',
            objectFit: 'contain',
            position: 'relative',
            zIndex: 2
          }}
        />

        {/* Opening glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            opened
              ? {
                  opacity: [0, 0.5, 0],
                  scale: [0.5, 1.3, 1.8]
                }
              : { opacity: 0, scale: 0.5 }
          }
          transition={{
            duration: 1.2,
            ease: 'easeOut'
          }}
          style={{
            position: 'absolute',
            width: '70%',
            aspectRatio: '1',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,220,150,0.5), transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

       
{/* Click instruction */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: opened ? 0 : 1, y: opened ? 10 : 0 }}
  transition={{ duration: 0.4 }}
  style={{
    position: 'absolute',
    bottom: '10%',
    padding: '13px 30px',
    background: '#641c2b',
    border: '1px solid #d6b36a',
    borderRadius: '3px',
    color: '#f5dfad',
    fontFamily: 'serif',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '3px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.35)',
    zIndex: 5,
    pointerEvents: 'none'
  }}
>
  CLICK TO OPEN
</motion.div>

      </div>
    </motion.section>
  )
}
