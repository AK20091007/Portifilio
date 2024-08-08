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
        <h1>Senior Software Developer</h1>
        <p>
          <Typewriter
            words={['I\'m a Senior Software Developer', 'I\'m a Senior Software Developer']}
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
