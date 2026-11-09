
export default function EventSlide({
  label,
  heading,
  description,
  receptionDate,
  receptionDay,
  receptionTime,
  muhurthamDate,
  muhurthamDay,
  muhurthamTime,
  venue,
  address,
  mapsUrl,
  background
}) {
  const events = [
    {
      name: 'Reception',
      subtitle: 'AN EVENING OF CELEBRATION',
      date: receptionDate,
      day: receptionDay,
      time: receptionTime
    },
    {
      name: 'Muhurtham',
      subtitle: 'THE AUSPICIOUS WEDDING CEREMONY',
      date: muhurthamDate,
      day: muhurthamDay,
      time: muhurthamTime
    }
  ]

  return (
    <section style={{
      minHeight: '100svh',
      width: '100%',
      padding: '55px 20px',
      backgroundImage: `
        linear-gradient(
          rgba(35, 8, 15, 0.42),
          rgba(35, 8, 15, 0.75)
        ),
        url('${background}')
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
      position: 'relative'
    }}>

      {/* Decorative heading */}
      
      <p style={{
        fontFamily: 'EB Garamond',
        fontSize: '11px',
        letterSpacing: '4px',
        color: '#e8c77e',
        margin: '0 0 10px'
      }}>
        {label}
      </p>

      <h1 style={{
        fontFamily: 'Great Vibes',
        fontSize: 'clamp(43px, 10vw, 56px)',
        fontWeight: '400',
        color: '#f0d080',
        margin: '0 0 8px',
        lineHeight: '1.2'
      }}>
        {heading}
      </h1>

      <p style={{
        fontFamily: 'Cormorant Garamond',
        fontSize: '17px',
        fontStyle: 'italic',
        color: '#fff4df',
        margin: '0 0 22px',
        maxWidth: '330px',
        lineHeight: '1.5'
      }}>
        {description}
      </p>

      {/* Main event card */}
      <div style={{
        width: '100%',
        maxWidth: '390px',
        padding: '22px 20px',
        border: '1px solid rgba(230, 194, 124, 0.85)',
        borderRadius: '14px',
        background: 'rgba(38, 13, 18, 0.72)',
        backdropFilter: 'blur(9px)',
        boxShadow: '0 12px 35px rgba(0,0,0,0.25)'
      }}>

        {events.map((event, index) => (
          <div key={event.name} style={{
            padding: '12px 0 20px',
            borderBottom: index === 0
              ? '1px solid rgba(217, 174, 88, 0.45)'
              : 'none',
            marginBottom: index === 0 ? '12px' : '0'
          }}>

            <p style={{
              fontFamily: 'EB Garamond',
              fontSize: '10px',
              letterSpacing: '2.5px',
              color: '#e8c77e',
              margin: '0 0 7px'
            }}>
              {event.subtitle}
            </p>

            <h2 style={{
              fontFamily: 'Great Vibes',
              fontSize: '36px',
              fontWeight: '400',
              color: '#f0d080',
              margin: '0 0 10px'
            }}>
              {event.name}
            </h2>

            <p style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: '18px',
              color: '#fff8e9',
              margin: '0 0 5px'
            }}>
              {event.date}
            </p>

            <p style={{
              fontFamily: 'EB Garamond',
              fontSize: '13px',
              letterSpacing: '1px',
              color: '#e8c77e',
              margin: '0 0 8px'
            }}>
              {event.day}
            </p>

            <p style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: '18px',
              color: '#fff4df',
              margin: 0
            }}>
              {event.time}
            </p>

          </div>
        ))}

        {/* Shared venue */}
        <div style={{
          borderTop: '1px solid rgba(217, 174, 88, 0.45)',
          paddingTop: '18px',
          marginTop: '5px'
        }}>

          <div style={{
            fontSize: '25px',
            color: '#e8c77e',
            marginBottom: '5px'
          }}>
            ⌖
          </div>

          <p style={{
            fontFamily: 'EB Garamond',
            fontSize: '10px',
            letterSpacing: '3px',
            color: '#e8c77e',
            margin: '0 0 7px'
          }}>
            VENUE
          </p>

          <h3 style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: '21px',
            fontWeight: '600',
            color: '#fff8e9',
            margin: '0 0 6px'
          }}>
            {venue}
          </h3>

          <p style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: '15px',
            lineHeight: '1.5',
            color: '#ead9bd',
            margin: 0
          }}>
            {address}
          </p>

          {mapsUrl && (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '17px',
                padding: '11px 25px',
                border: '1px solid #e5bd70',
                borderRadius: '30px',
                background: '#c9942a',
                color: '#2b1110',
                fontFamily: 'EB Garamond',
                fontSize: '12px',
                letterSpacing: '1px',
                textDecoration: 'none'
              }}
            >
              VIEW VENUE LOCATION ↗
            </a>
          )}
        </div>
      </div>

      <p style={{
        fontFamily: 'Great Vibes',
        fontSize: '25px',
        color: '#f0d080',
        margin: '22px 0 0'
      }}>
        Your presence is our blessing
      </p>
    </section>
  )
}
