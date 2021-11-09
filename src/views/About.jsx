import styled from 'styled-components';
import TestLogo from '../images/logo.svg'

const Container = styled.section`
  height: 400px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5% 0 5%;
  background-color: #1D2B54;
`;

const Image = styled.img`
  height: 300px;
  width: 25%;
  background-color: white;
`;

const TextBlock = styled.div`
  height: 250px;
  width: 450px;
  background-color: white;
`;

function About() {
  return (
    <Container>
      <Image src={TestLogo}/>
      <TextBlock></TextBlock>
    </Container>
  );
}

export default About;
