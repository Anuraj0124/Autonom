import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import HeroSection2 from '../HeroSection2';
import { homeObjOne, homeObjTwo, homeObjThree} from './Data';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <HeroSection2 {...homeObjOne} />
      <HeroSection2 {...homeObjThree} />
      <HeroSection2 {...homeObjTwo} />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
