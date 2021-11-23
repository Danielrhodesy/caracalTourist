import styled from 'styled-components';

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

const RarityBlock = ({titleTest}) => {
    return (
        <>
            <h1>{titleTest}</h1>
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
        </>
    )
};

export default RarityBlock;