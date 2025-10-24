import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'
import Speciality from '../Components/Speciality'
import Reviews from '../Components/Reviews'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <AboutMe />
      <Speciality />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home