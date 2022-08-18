import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Home