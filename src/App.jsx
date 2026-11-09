
import { useState } from 'react'
import EnvelopeIntro from './components/EnvelopeIntro'
import HeroSlide from './components/HeroSlide'
import CountdownSlide from './components/CountdownSlide'
import EventSlide from './components/EventSlide'
import FinalSlide from './components/FinalSlide'
import './App.css'

function App() {
  const [showInvite, setShowInvite] = useState(
    !sessionStorage.getItem('invited')
  )

  return (
    <>
      {showInvite ? (
        <EnvelopeIntro onComplete={() => setShowInvite(false)} />
      ) : (
        <>
          {/* Main Wedding Cover */}
          <HeroSlide />

          {/* Wedding Countdown */}
          <CountdownSlide />

          {/* Reception and Muhurtham */}
          <EventSlide
            type="combined"
            label="THE WEDDING CELEBRATIONS"
            heading="Wedding Celebrations"
            description="Two beautiful occasions, one celebration of love. Join us as Prashanth & Dharshini begin their journey together."
            receptionDate="19 November 2026"
            receptionDay="Thursday"
            receptionTime="7:00 PM onwards"
            muhurthamDate="20 November 2026"
            muhurthamDay="Friday"
            muhurthamTime="9:30 AM to 10:30 AM"
            venue="N.V. Convention Hall"
            address="No. 17, 11th Main Road, Kamakshipalya, Bengaluru - 560 079"
            mapsUrl="https://www.google.com/maps/search/?api=1&query=N.V.+Convention+Hall+Kamakshipalya+Bengaluru"
            background="/event2.jpg"
          />

          {/* Closing Slide */}
          <FinalSlide />
        </>
      )}
    </>
  )
}

export default App
