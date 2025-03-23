import React from 'react'
import Hero from '../components/Hero'
import HomeAbout from '../components/HomeAbout';
import ArtWorks from '../components/ArtWorks';
import Contact from '../components/Contact';
import HomeProjectsProducts from '../components/HomeProjectsProducts';

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeProjectsProducts />
      <ArtWorks />
      <Contact />
    </div>
  )
}

export default Home;