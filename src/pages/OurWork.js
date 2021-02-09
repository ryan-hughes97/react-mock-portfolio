import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// Animations
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
  scrollReveal,
} from '../animation';
import { useScroll } from '../components/useScroll';

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledWork
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
      layout='position'
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledMovie initial='hidden' variants={fade} animate='show'>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div
          variants={lineAnim}
          transition={{ delay: 1.3 }}
          className='line'
        ></motion.div>
        <Link to='/work/the-athlete'>
          <StyledHide>
            <motion.img variants={photoAnim} src={athlete} alt='Athlete' />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial='hidden'
      >
        <h2>The Racer</h2>
        <motion.div
          variants={lineAnim}
          transition={{ delay: 0.4 }}
          className='line'
        ></motion.div>
        <Link to='/work/the-racer'>
          <img src={theracer} alt='The Racer' />
        </Link>
      </StyledMovie>
      <StyledMovie
        variants={scrollReveal}
        ref={element2}
        animate={controls2}
        initial='hidden'
      >
        <h2>Good Times</h2>
        <motion.div
          variants={lineAnim}
          transition={{ delay: 0.4 }}
          className='line'
        ></motion.div>
        <Link to='/work/good-times'>
          <img src={goodtimes} alt='Good Times' />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
