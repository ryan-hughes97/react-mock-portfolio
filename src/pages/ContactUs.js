import React from 'react';
import styled from 'styled-components';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnim}>Get in touch with us.</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Phone: (555) 555-5555</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Email: capture@capture.com</h2>
          </StyledSocial>
        </StyledHide>
        {/* <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Send Us A Message</h2>
          </StyledSocial>
        </StyledHide> */}
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 0;
    font-size: 1rem;
  }
`;

const StyledTitle = styled.div`
  margin: 4rem;
  color: black;
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media (max-width: 1300px) {
    width: 2rem;
    height: 2rem;
  }
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  @media (max-width: 1300px) {
    h2 {
      margin: 1rem;
    }
  }
`;

export default ContactUs;
