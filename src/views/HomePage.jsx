import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import About from '../views/About'
import RoadMap from '../views/RoadMap'

import image from '../images/logo.svg'

function HomePage() {
  return (
    <div>
      <Header/>
      <About/>
      <RoadMap/>
      <Footer/>      
    </div>
  );
}

export default HomePage;
