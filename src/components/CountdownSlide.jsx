
import { useCountdown } from '../hooks/useCountdown'

export default function CountdownSlide() {
  const { days, hours, minutes, seconds } =
    useCountdown('2026-11-20T09:30:00')

  const units = [
    { label: 'DAYS', value: days },
    { label: 'HOURS', value: hours },
    { label: 'MINUTES', value: minutes },
    { label: 'SECONDS', value: seconds }
  ]

  return (
    <section style={{
      minHeight: '100svh',
      width: '100%',
      padding: '55px 20px',
      backgroundImage: `
        linear-gradient(
          rgba(35, 8, 15, 0.48),
          rgba(35, 8, 15, 0.72)
        ),
        url('/countdown.jpg')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff8e9',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Top ornamental detail */}
      <div style={{
        color: '#e5bd70',
        fontSize: '25px',
        letterSpacing: '8px',
        marginBottom: '20px'
      }}>
        ❧ ✧ ❧
      </div>

      <p style={{
        fontFamily: 'EB Garamond',
        fontSize: '13px',
        letterSpacing: '4px',
        color: '#e8c77e',
        margin: '0 0 14px'
      }}>
        A CELEBRATION OF LOVE
      </p>

      <h2 style={{
        fontFamily: 'Great Vibes',
        fontSize: 'clamp(42px, 10vw, 54px)',
        fontWeight: '400',
        lineHeight: '1.2',
        margin: '0 0 12px',
        color: '#fff3d9'
      }}>
        The Countdown Begins
      </h2>

      

      <div style={{
        width: '75px',
        height: '1px',
        background: '#d9ae58',
        margin: '22px 0'
      }} />

      {/* Countdown panel */}
      <div style={{
        width: '100%',
        maxWidth: '390px',
        padding: '25px 14px 22px',
        border: '1px solid rgba(230, 194, 124, 0.8)',
        borderRadius: '14px',
        background: 'rgba(38, 13, 18, 0.48)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 12px 35px rgba(0,0,0,0.2)'
      }}>

        <p style={{
          fontFamily: 'EB Garamond',
          fontSize: '12px',
          letterSpacing: '3px',
          color: '#f0d69b',
          margin: '0 0 22px'
        }}>
          COUNTING DOWN TO THE SACRED KNOT
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '8px'
        }}>
          {units.map((unit) => (
            <div key={unit.label} style={{
              padding: '15px 2px',
              borderRight: unit.label !== 'SECONDS'
                ? '1px solid rgba(217, 174, 88, 0.35)'
                : 'none'
            }}>
              <div style={{
                fontFamily: 'Cormorant Garamond',
                fontSize: 'clamp(27px, 7vw, 36px)',
                fontWeight: '600',
                color: '#f3d28b',
                lineHeight: '1.2'
              }}>
                {unit.value ?? '--'}
              </div>

              <div style={{
                fontFamily: 'EB Garamond',
                fontSize: '9px',
                letterSpacing: '1px',
                color: '#fff4df',
                marginTop: '8px'
              }}>
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wedding date */}
      <div style={{ marginTop: '30px' }}>
        <p style={{
          fontFamily: 'EB Garamond',
          fontSize: '12px',
          letterSpacing: '3px',
          color: '#e8c77e',
          margin: '0 0 8px'
        }}>
          SAVE THE DATE
        </p>

        <h3 style={{
          fontFamily: 'Cormorant Garamond',
          fontSize: '25px',
          fontWeight: '600',
          letterSpacing: '2px',
          color: '#fff4df',
          margin: 0
        }}>
          20 · 11 · 2026
        </h3>

        <p style={{
          fontFamily: 'Cormorant Garamond',
          fontSize: '16px',
          color: '#f0d69b',
          margin: '7px 0 0'
        }}>
          Friday · 9:30 AM onwards
        </p>
      </div>

      <p style={{
        fontFamily: 'Great Vibes',
        fontSize: '27px',
        color: '#f3d28b',
        margin: '30px 0 0'
      }}>
        A beautiful beginning to forever
      </p>

      <div style={{
        color: '#e5bd70',
        fontSize: '22px',
        letterSpacing: '7px',
        marginTop: '18px'
      }}>
        ❧ ✧ ❧
      </div>

    </section>
  )
}
