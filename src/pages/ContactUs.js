import React from 'react';
import styled from 'styled-components';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <h1>Contact Us</h1>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)``;

export default ContactUs;
