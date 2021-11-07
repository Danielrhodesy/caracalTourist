import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <Header/>
      <h1>This is About Page</h1>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Footer/>
    </div>
  );
}

export default About;
