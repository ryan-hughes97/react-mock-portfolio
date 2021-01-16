import React from 'react';
import home1 from '../img/home1.png';
// import styled
import styled from 'styled-components';
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../styles';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className='title'>
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span>
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>come true.</h2>
          </StyledHide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals ready to make your ideas a reality.
          </p>
          <button>Contact Us</button>
        </div>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt='guy with a camera' />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
