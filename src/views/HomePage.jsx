import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import image from '../images/logo.svg'

function HomePage() {
  return (
    <div>
      <Header/>
      <h1>This is Home Page</h1>
      <Link to='/About'>
        <button>About Us</button>
      </Link>
      <h1>Carousel</h1>
      <Carousel>
        <div>
            <img src={image} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={image} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
        <img src={image} />

            <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <Footer/>      
    </div>
  );
}

export default HomePage;
