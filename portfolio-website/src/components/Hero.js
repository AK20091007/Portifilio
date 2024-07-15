import React from 'react';
import headshot from '../assets/images/headshot.png';
import '../styles.css';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <Fade>
      <section className="hero">
        <img src={headshot} alt="Headshot" className="headshot"/>
        <h1>UX Designer</h1>
        <p>
          <Typewriter
            words={['I\'m a UX Designer', 'I\'m a Front-End Developer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </section>
    </Fade>
  );
};

export default Hero;
