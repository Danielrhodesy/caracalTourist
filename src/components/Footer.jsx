import styled from 'styled-components';
import discordImage from '../images/discordIcon.png'
import twitterImage from '../images/twitterIcon.png'

const Container = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavWrapper = styled.nav`
  height: 80px;
  width: 60%;
  display: flex;
  margin-top: 5%;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  height: 80px;
  width: 200px;
  background-color: #27345B;
`;

const LogoImage = styled.img`
  height: 100%;
  width: 100%;
`;

const NavItemWrapper = styled.div`
  height: 50px;
  width: 55%;
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.div`
  height: 15px;
  width: 10%;
  margin-top: 13px;
  display: flex;
  justify-content: space-around;
  // background-color: red;
`;

const Icon = styled.img`
  height: 25px; 
  width: 30px;  
`;

const Footer = () => (
  <Container>
    <NavWrapper>
      <LogoContainer>
        <LogoImage />
      </LogoContainer>
      <NavItemWrapper>
        <NavItem>
          <p>About</p>
        </NavItem>
        <NavItem>
          <p>Roadmap</p>
        </NavItem>
        <NavItem>
          <p>Rarity</p>          
        </NavItem>
        <NavItem>
          <Icon src={discordImage} />       
        </NavItem>
        <NavItem>
          <Icon src={twitterImage} /> 
        </NavItem>
      </NavItemWrapper>
    </NavWrapper>
  </Container>
);

export default Footer;
