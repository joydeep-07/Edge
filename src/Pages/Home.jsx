import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'
import Speciality from '../Components/Speciality'
import Reviews from '../Components/Reviews'
import Footer from '../Components/Footer'
import Me from '../Components/Me'
import WorkBadge from '../Components/WorkBadge'

const Home = () => {
  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      <Hero />
      <Me/>
      <AboutMe />
      <Speciality />
      <WorkBadge/>
      {/* <Reviews /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home