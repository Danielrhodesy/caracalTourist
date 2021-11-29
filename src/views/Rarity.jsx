import React, { useState } from 'react';
import styled from 'styled-components';
import Stack from '../components/Stack'
import { spaceSmall, spaceLarge } from '../tokens/spacing';
import RarityBlock from './RarityBlock'

const Container = styled.section`
display: flex;
gap: 2em;
padding: 4em 0 4em 0;
margin-inline: auto;
justify-content: space-around;
align-items: center;
flex-direction: column;
background-color: #27345B;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
`;

const RarityNav = styled.div`
width: 40em;
display: flex;
justify-content: space-around;
`;

const RarityNavItem = styled.button`
background-color: #27345B;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`;

const Rarity = () => {
  const [rarityState, setRarityState] = useState(0);
  return (
    <Container>
      <Title>RARITY</Title>
      <RarityNav>
          <RarityNavItem onClick={() => setRarityState(0)}><h3>Backgrounds</h3></RarityNavItem>
          <RarityNavItem onClick={() => setRarityState(1)}><h3>Outfits</h3></RarityNavItem>
          <RarityNavItem onClick={() => setRarityState(2)}><h3>Headwear</h3></RarityNavItem>
      </RarityNav>
      {rarityState === 0 && 
      <RarityBlock titleTest="Backgrounds"/>
      }
      {rarityState === 1 && 
      <RarityBlock titleTest="Outfits"/>
      }
      {rarityState === 2 && 
      <RarityBlock titleTest="Headwear"/>
      }
    </Container>
  );
}

export default Rarity;
