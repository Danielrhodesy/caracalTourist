import styled from 'styled-components';
import headerBackground from '../images/header-background.jpg'
import caracalLogo from '../images/caracalLogo.png'
import discordImage from '../images/discordIcon.png'
import twitterImage from '../images/twitterIcon.png'

const Container = styled.section`
  height: 428px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${headerBackground});
`;

const NavWrapper = styled.nav`
  height: 80px;
  width: 80%;
  display: flex;
  margin-top: 3%;
  justify-content: space-between;
  // background-color: blue;
`;

const LogoContainer = styled.div`
  height: 80px;
  width: auto;
  // background-color: red;
`;

const LogoImage = styled.img`
  height: 100%;
  width: 100%;
`;

const NavItemWrapper = styled.div`
  height: 50px;
  width: 65%;
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
  // background-color: pink;
`;

const NavItem = styled.div`
  height: 15px;
  width: 10%;
  margin-top: 13px;
  display: flex;
  justify-content: space-around;
  // background-color: red;
`;

const Button = styled.button`
  background-color: #06C42F;
  border: none;
  color: white;
  padding: 15px 38px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 25px;
`;

const Icon = styled.img`
  height: 25px; 
  width: 30px;  
`;

const Header = () => (
  <Container>
    <NavWrapper>
      <LogoContainer>
        <LogoImage src={caracalLogo} />
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
          <p>FAQ</p>          
        </NavItem>
        <NavItem>
          <Icon src={discordImage} />       
        </NavItem>
        <NavItem>
          <Icon src={twitterImage} /> 
        </NavItem>
        <Button>
          <p>Connect</p>
        </Button>
      </NavItemWrapper>
    </NavWrapper>
  </Container>
);

export default Header;
