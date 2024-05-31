import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import BestOfTheBest from './components/BestOfTheBest'
import WhyJoinUs from './components/WhyJoinUs'
import Slider from './components/Slider'
import Collection from './components/Collection'
import CollectedShoes from './components/CollectedShoes'
import Footer from './components/Footer'

const page = () => {
  return (
    <div >
    <Navbar />
      <section className='relative herobg'>
        <Hero />
        <Features />
      </section>

      <BestOfTheBest />
      <WhyJoinUs />
      <Slider />
      <Collection />
      <CollectedShoes />
      <div className="relative">

      <Footer />


      </div>
  </div>
  
  )
}

export default page
