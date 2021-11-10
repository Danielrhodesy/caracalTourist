import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../views/About'
import RoadMap from '../views/RoadMap'
import Rarity from '../views/Rarity'

import image from '../images/logo.svg'

function HomePage() {
  return (
    <div>
      <Header/>
      <About/>
      <RoadMap/>
      <Rarity/>
      <Footer/>      
    </div>
  );
}

export default HomePage;
