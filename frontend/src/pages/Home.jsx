import React from 'react'
import { BestSeller, Hero, LatestCollection, Newsletter } from '../components/exportComp'
import OurPolicy from '../components/OurPolicy'

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Newsletter />
    </div>
  )
}

export default Home
