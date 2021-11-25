import React, { useState } from 'react';
import styled from 'styled-components';
import Stack from '../components/Stack'
import { spaceSmall, spaceLarge } from '../tokens/spacing';
import RarityBlock from './RarityBlock'

const Container = styled.section`
height: 1300px;
// width: 90em;
display: flex;
margin-inline: auto;
justify-content: space-around;
align-items: center;
flex-direction: column;
background-color: #27345B;
`;

const Title = styled.h1``;

const RarityNav = styled.div`
width: 55%;
display: flex;
justify-content: space-around;
`;

const RarityNavItem = styled.button``;

const Rarity = () => {
  const [rarityState, setRarityState] = useState(0);
  const setState = () => {
    // setRarityState(0)
  }
  return (
    <Container>
      <Title>Rarity Charts</Title>
      <RarityNav>
          <RarityNavItem onClick={() => setRarityState(0)}><h3>Clothing</h3></RarityNavItem>
          <RarityNavItem onClick={() => setRarityState(1)}><h3>Locations</h3></RarityNavItem>
          <RarityNavItem onClick={() => setRarityState(2)}><h3>Headwear</h3></RarityNavItem>
      </RarityNav>
      {rarityState === 0 && 
      <RarityBlock titleTest="Hello0"/>
      }
      {rarityState === 1 && 
      <RarityBlock titleTest="Hello1"/>
      }
      {rarityState === 2 && 
      <RarityBlock titleTest="Hello2"/>
      }
    </Container>
  );
}

export default Rarity;
