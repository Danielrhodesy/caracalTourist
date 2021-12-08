import React, { useRef } from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../views/About'
import RoadMap from '../views/RoadMap'
import Rarity from '../views/Rarity'

import image from '../images/logo.svg'

const RefContainer = styled.section``;

function HomePage() {
  let aboutRef = useRef();
  let roadRef = useRef();
  let rarityRef = useRef();
  return (
    <div>
      {/* <button onClick={() => ScrollAction(aboutRef)}>About</button>
      <button onClick={() => ScrollAction(roadRef)}>RoadMap</button>
      <button onClick={() => ScrollAction(rarityRef)}>Rarity</button> */}
      <Header 
        aboutRef={aboutRef}
        roadRef={roadRef}
        rarityRef={rarityRef}
      />
      <RefContainer ref={aboutRef}>
        <About />  
      </RefContainer>
      <RefContainer ref={roadRef}>
        <RoadMap />
      </RefContainer>
      <RefContainer ref={rarityRef}>
        <Rarity />
      </RefContainer>
      <Footer/>      
    </div>
  );
}

export default HomePage;
