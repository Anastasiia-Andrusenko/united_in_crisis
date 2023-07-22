import css from './Home.module.css';

import Footer from '../../components/Footer/Footer';

import Hero from './Hero/Hero';
import About from './About';
import Team from './Team';
import Feedback from './Feedback/Feedback';
import Gallery from './Gallery/Gallery';

const HomePage = () => {
  return (
    <>
      <div className={css.hero}>
        <div className={css.overlay}>
          <Hero />
        </div>
      </div>
      <About />
      <Gallery/>
      <Team />
      <Feedback />
      <Footer/>
    </>
  );
};

export default HomePage;
