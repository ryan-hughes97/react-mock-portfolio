import React from 'react';
import home1 from '../img/home1.png';
// import styled
import styled from 'styled-components';

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

// Styled Component
const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 1rem;
  font-weight: lighter;
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
