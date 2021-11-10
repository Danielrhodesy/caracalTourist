import styled from 'styled-components';
import Stack from '../components/Stack'
import { spaceSmall, spaceLarge } from '../tokens/spacing';


const Container = styled.section`
height: 1300px;
width: 90%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
padding: 0 5% 0 5%;
background-color: #27345B;
`;

const Title = styled.h1``;

const RarityNav = styled.div`
width: 55%;
display: flex;
justify-content: space-around;
`;

const RarityNavItem = styled.h3``;

const RowHeader = styled.h4``;

const RowTitles = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding-left: 5em;
`;

const RightRowTitles = styled.div`
  width: 20em;
  display: flex; 
  justify-content: space-between;     
`;

const Row = styled.div`
  height: 280px;  
  width: 80%;
  display: flex;
  justify-content: space-around;
//   background-color: red;
`;

const ItemCard = styled.div`
  height: 280px;
  width: 240px;
  background-color: white;
`;

const Rarity = () => {
  return (
    <Container>
      <Title>Rarity Charts</Title>
      <RarityNav>
          <RarityNavItem>Clothing</RarityNavItem>
          <RarityNavItem>Locations</RarityNavItem>
          <RarityNavItem>Headwear</RarityNavItem>
      </RarityNav>
      {/* <Stack space={spaceSmall}> */}
        <RowHeader>Common</RowHeader>
        <Row>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
        </Row>
        <RowHeader>Uncommon</RowHeader>
        <Row>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
        </Row>
        <RowTitles>
            <RowHeader>Rares</RowHeader>
            <RightRowTitles>
            <RowHeader>Epic</RowHeader>
            <RowHeader>Legendary</RowHeader>
            </RightRowTitles>
        </RowTitles>
            <Row>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
        </Row>
      {/* </Stack> */}
    </Container>
  );
}

export default Rarity;
