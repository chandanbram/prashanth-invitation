
export default function HeroSlide() {
  return (
    <section style={{
      position: 'relative',
      height: '100svh',
      minHeight: '650px',
      width: '100%',
      overflow: 'hidden',
      background: '#1a0800'
    }}>

      {/* Original couple photograph */}
      <img
        src="/couple.jpg"
        alt="Prashanth and Dharshini"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 10%'
        }}
      />

      {/* Gentle overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(
            to bottom,
            rgba(20, 8, 2, 0.30) 0%,
            transparent 30%,
            transparent 55%,
            rgba(20, 8, 2, 0.20) 70%,
            rgba(20, 8, 2, 0.78) 100%
          )
        `
      }} />

      {/* Top section */}
      <div style={{
        position: 'absolute',
        top: '18px',
        left: 0,
        right: 0,
        zIndex: 2,
        textAlign: 'center',
        padding: '0 12px'
      }}>

        {/* Elegant P & D wedding monogram */}
        <div style={{
          width: '82px',
          height: '82px',
          border: '2px solid #e5bd70',
          outline: '1px solid rgba(229, 189, 112, 0.7)',
          outlineOffset: '4px',
          borderRadius: '50%',
          margin: '0 auto 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          background: 'rgba(35, 8, 15, 0.38)',
          boxShadow: '0 3px 15px rgba(0,0,0,0.35)'
        }}>

          <span style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: '39px',
            fontWeight: '700',
            fontStyle: 'italic',
            color: '#f5d58e',
            lineHeight: 1
          }}>
            P
          </span>

          <span style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: '25px',
            fontWeight: '600',
            fontStyle: 'italic',
            color: '#e5bd70',
            lineHeight: 1,
            transform: 'translateY(2px)'
          }}>
            &
          </span>

          <span style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: '39px',
            fontWeight: '700',
            fontStyle: 'italic',
            color: '#f5d58e',
            lineHeight: 1
          }}>
            D
          </span>

        </div>

        {/* Invocation */}

        <p style={{
          fontFamily: 'EB Garamond',
          letterSpacing: '2px',
          fontSize: '10px',
          fontWeight: '600',
          color: '#f0d080',
          margin: 0,
          textShadow: '0 2px 6px rgba(0,0,0,0.85)'
        }}>
          TOGETHER WITH THEIR FAMILIES
        </p>
      </div>

      {/* Bottom names panel */}
      <div style={{
        position: 'absolute',
        zIndex: 2,
        bottom: '14px',
        left: '12px',
        right: '12px',
        padding: '16px 12px 17px',
        textAlign: 'center',
        background: 'rgba(29, 10, 13, 0.72)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(229, 189, 112, 0.7)',
        borderRadius: '14px',
        boxShadow: '0 5px 25px rgba(0,0,0,0.25)'
      }}>

        <p style={{
          fontFamily: 'EB Garamond',
          letterSpacing: '3px',
          fontSize: '10px',
          color: '#e8c77e',
          margin: '0 0 5px'
        }}>
          THE WEDDING OF
        </p>

        <h1 style={{
          fontFamily: 'Great Vibes',
          fontSize: 'clamp(35px, 9vw, 43px)',
          fontWeight: '400',
          color: '#f5d58e',
          lineHeight: '1.2',
          margin: 0
        }}>
          Prashanth
        </h1>

        <div style={{
          fontFamily: 'Cormorant Garamond',
          fontSize: '19px',
          color: '#fff4df',
          margin: 0
        }}>
          &
        </div>

        <h1 style={{
          fontFamily: 'Great Vibes',
          fontSize: 'clamp(35px, 9vw, 43px)',
          fontWeight: '400',
          color: '#f5d58e',
          lineHeight: '1.2',
          margin: 0
        }}>
          Dharshini
        </h1>

        <div style={{
          color: '#e5bd70',
          fontSize: '16px',
          letterSpacing: '5px',
          marginTop: '7px'
        }}>
          ❧ ✧ ❧
        </div>

        <p style={{
          fontFamily: 'Cormorant Garamond',
          fontStyle: 'italic',
          fontSize: '14px',
          color: '#fff4df',
          margin: '5px 0 0'
        }}>
          A beautiful beginning to forever
        </p>

      </div>
    </section>
  )
}
