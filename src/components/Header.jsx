import styled from 'styled-components';
import headerBackground from '../images/header-background.jpg'

const Container = styled.section`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${headerBackground});
`;

const NavWrapper = styled.div`
  height: 100px;
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  justify-content: space-between;
  background-color: blue;
`;

const LogoContainer = styled.div`
  height: 100px;
  width: 25%;
  background-color: red;
`;

const NavItemWrapper = styled.div`
  height: 50px;
  width: 60%;
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
  background-color: pink;
`;

const NavItem = styled.div`
  height: 15px;
  width: 10%;
  background-color: red;
`;

const Button = styled.div`
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

const Header = () => (
  <Container>

    <NavWrapper>
      <LogoContainer>
        Logo
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
          <p>Discord IMAGE</p>          
        </NavItem>
        <NavItem>
          <p>Twitter IMAGE</p>          
        </NavItem>
        <Button>
          Connect
        </Button>
      </NavItemWrapper>
    </NavWrapper>
  </Container>
);

export default Header;
