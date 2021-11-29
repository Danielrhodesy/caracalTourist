import styled from 'styled-components';
import TestLogo from '../images/about.png'

const Container = styled.section`
  height: auto;
  width: auto;
  max-width: 80em;
  padding: 0 3em 0 3em;
  margin-inline: auto;
  margin-block: 5em;
  display: flex;
  justify-content: space-around;
  gap: 2em;
  flex-wrap: wrap;
  align-items: center;
  background-color: #1D2B54;
`;

const Image = styled.img`
  height: 350px;
  width: auto;
`;

const TextBlock = styled.div`
  height: 250px;
  width: 19em;
  color: white;
  font-size: 26px;
  font-weight: 800;
  @media (max-width: 1286px) {
    width: 25em;
  }
`;

function About() {
  return (
    <Container>
      <Image src={TestLogo}/>
      <TextBlock>Caracal Tourists is a NFT project Based on uniquely generated caracals traveling around the world and beyond, visiting prominent locations of past & present. Our goal is to build a interactive community, support global conservation efforts & create value for holders</TextBlock>
    </Container>
  );
}

export default About;
