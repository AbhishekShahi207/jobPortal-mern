import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HomePage/HeroSection'
import LatestJob from './HomePage/LatestJob'
import CategoryCarousel from './HomePage/CategoryCarousel'
import Footer from './shared/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
     <HeroSection/>
      <CategoryCarousel/>
       <LatestJob/>
  <Footer/> 
    </div>
  )
}

export default Home
