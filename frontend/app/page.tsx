import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footers'
import Team from './components/Team'

const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Team />
      <Footer />
    </div>
  )
}

export default page


