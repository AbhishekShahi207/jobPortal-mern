import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HomePage/HeroSection'
import LatestJob from './HomePage/LatestJob'
import CategoryCarousel from './HomePage/CategoryCarousel'
import Footer from './shared/Footer'
import useGetAllJobs from '../hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'



const Home = () => {
useGetAllJobs()
const {user} =useSelector(store=>store.auth)
const navigate =useNavigate()
useEffect(()=>{
if(user.role === 'recruiter' ){
  navigate("/admin/companies")
}
},[])


 
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
