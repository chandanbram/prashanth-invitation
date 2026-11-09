
export default function FinalSlide() {
  return (
    <section style={{
      minHeight: '100svh',
      width: '100%',
      padding: '60px 25px',
      backgroundImage: `
        linear-gradient(
          rgba(35, 8, 15, 0.42),
          rgba(35, 8, 15, 0.62)
        ),
        url('/final.jpg')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
      color: '#fff8e9',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>

      {/* Top ornament */}
      <div style={{
        color: '#e5bd70',
        fontSize: '27px',
        letterSpacing: '7px',
        marginBottom: '22px'
      }}>
        ❧ ✧ ❧
      </div>

      <p style={{
        fontFamily: 'EB Garamond',
        letterSpacing: '3px',
        color: '#f0d080',
        fontSize: '12px',
        margin: '0 0 10px'
      }}>
        WITH LOVE AND GRATITUDE
      </p>

      <h1 style={{
        fontFamily: 'Great Vibes',
        fontWeight: '400',
        fontSize: '58px',
        margin: '5px 0 15px',
        color: '#f0d080',
        lineHeight: '1.2'
      }}>
        Thank You
      </h1>

      <div style={{
        width: '65px',
        height: '1px',
        background: '#d9ae58',
        marginBottom: '22px'
      }} />

      <p style={{
        fontFamily: 'Cormorant Garamond',
        fontSize: '20px',
        lineHeight: '1.7',
        maxWidth: '310px',
        color: '#fff8e9',
        margin: 0
      }}>
        Your presence, love and blessings will make
        our celebration truly memorable.
        We look forward to celebrating with you.
      </p>

      <div style={{
        marginTop: '32px',
        marginBottom: '8px',
        color: '#e5bd70',
        fontSize: '20px',
        letterSpacing: '4px'
      }}>
        TOGETHER WITH OUR FAMILIES
      </div>

      <h2 style={{
        fontFamily: 'Great Vibes',
        fontWeight: '400',
        fontSize: '39px',
        color: '#f0d080',
        lineHeight: '1.4',
        margin: '8px 0'
      }}>
        Prashanth & Dharshini
      </h2>

      <p style={{
        fontFamily: 'EB Garamond',
        fontSize: '12px',
        letterSpacing: '3px',
        color: '#fff0d0',
        margin: '8px 0 25px'
      }}>
        20 NOVEMBER 2026
      </p>

      {/* Bottom ornament */}
      <div style={{
        color: '#e5bd70',
        fontSize: '25px',
        letterSpacing: '7px'
      }}>
        ❧ ✧ ❧
      </div>

    </section>
  )
}
