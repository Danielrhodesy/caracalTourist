import styled from 'styled-components';
import Stack from '../components/Stack'
import { spaceSmall, spaceLarge } from '../tokens/spacing';

const Container = styled.section`
  height: 500px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 0 5% 0 5%;
  background-color: #27345B;
`;

const Title = styled.h1`
  color: red;
`;

const TextContainer = styled.div`
  width: 60%;
//   background-color: red;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  color: red;
`;

const Number = styled.img`
    height: 15px;
    width: 15px;
    background-color: white;
`;

const Text = styled.p`
  color: red;
`;

const RoadMap = () => {
  return (
    <Container>
      <Title>ROADMAP</Title>
      <TextContainer>
          <Stack space={spaceLarge}>
            <Row>
                <Number/>
                <Text>This is step 1 blah, Step pne is going here to fill the void for this space here</Text>
            </Row>
            <Row>
                <Number/>
                <Text>This is step 2 blah, Step pne is going here to fill the void for this space here</Text>
            </Row>
            <Row>
                <Number/>
                <Text>This is step 3 blah, Step pne is going here to fill the void for this space here</Text>
            </Row>
            <Row>
                <Number/>
                <Text>This is step 4 blah, Step pne is going here to fill the void for this space here</Text>
            </Row>
            <Row>
                <Number/>
                <Text>This is step 5 blah, Step pne is going here to fill the void for this space here</Text>
            </Row>
          </Stack>
      </TextContainer>
    </Container>
  );
}

export default RoadMap;
