import React from 'react';
import Hero from '../components/Hero/Hero';
import StatsBar from '../components/StatsBar/StatsBar';
import About from '../components/About/About';
import Mission from '../components/Mission/Mission';
import Events from '../components/Events/Events';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Mission />
      <Events />
      <Contact />
    </>
  );
};

export default Home;