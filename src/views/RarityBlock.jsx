import styled from 'styled-components';
import Stack from '../components/Stack'
// import ImageCard from

const ContentWrapper = styled.div`
    height: auto;
    max-width: 95em;
    display: flex;
    gap: 2em;
    margin-inline: auto;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

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
  height: auto;  
  max-width: 75em;
  display: flex;
  padding: 0 3em 0 3em;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 3em;
//   background-color: red;
`;

const ItemCard = styled.div`
  height: 280px;
  width: 240px;
  background-color: white;
`;

const RarityBlock = ({titleTest}) => {
    return (
        <ContentWrapper>
            <h1>{titleTest}</h1>
            <Row>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
            </Row>
        </ContentWrapper>
    )
};

export default RarityBlock;