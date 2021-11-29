import styled from 'styled-components';
import Stack from '../components/Stack'
import { spaceSmall, spaceLarge } from '../tokens/spacing';

const Container = styled.section`
  height: 60em;
  width: auto;
  padding: 2em 0 5em 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #1C2C52;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
`;

const QTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
`;

const SubTitle = styled.h3`
  font-size: 25px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const TextContainer = styled.div`
  width: auto;
  max-width: 40em;
  padding: 0 2em 0 2em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: red;
`;

const Number = styled.img`
    height: 15px;
    width: 15px;
    background-color: white;
`;


const RoadMap = () => {
  return (
    <Container>
      <Title>ROADMAP</Title>
      <TextContainer>
          <Stack space={spaceLarge}>
            <QTitle>
              Q1 - 2021
            </QTitle>
            <Row>
              <SubTitle>
                Series 1 - Whitelist/ Public Offering
              </SubTitle>
              <Text>
                100 People Whitelist for early supporters. 0.3 SOL Mint Price
              </Text>
            </Row>  
            <QTitle>
              Q1 - 2022
            </QTitle>
            <Row>
              <SubTitle>
                List on 3rd Party Marketplace
              </SubTitle>
              <Text>
                List on Magic Eden & Digital Eyes
              </Text>
            </Row>
            <Row>
              <SubTitle>
              DAO Implementation
              </SubTitle>
              <Text>
                Passenger lounge entry Grape Verification
              </Text>
            </Row>
            <Row>
              <SubTitle>
                Travel Documents Airdrop
              </SubTitle>
              <Text>
                Airdropped to all holders of Caracal Tourists that aren't listed on a marketplace
              </Text>
            </Row>
            <QTitle>
              Q2 - 2022
            </QTitle>
            <Row>
              <SubTitle>
                Sweeper Implementation
              </SubTitle>
              <Text>
                Auto Sweeper set at 0.1SOL
              </Text>
            </Row>
            <Row>
              <SubTitle>
              Series 2 Caracal Tourists
              </SubTitle>
              <Text>
                New Locations and Friends, Large Marketing Push 2,222 Series 2 - 1,111 Airdropped for all series 1 holders
              </Text>
            </Row>
            <Text>
              *Time and dates are subject to change
            </Text>
          </Stack>
      </TextContainer>
    </Container>
  );
}

export default RoadMap;
