import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import backgroundImage from '../assets/images/background-image.jpg'; // Update this path

const ContactSection = styled.section`
  padding: 60px 20px;
  background: url(${backgroundImage}) no-repeat center center/cover;
  color: #fff;
  text-align: center;
`;

const ContactContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 0 auto;
`;

const ContactTitle = styled.h2`
  margin-bottom: 20px;
  color: #f1c40f;
  font-size: 36px;
`;

const ContactDetail = styled.div`
  font-size: 20px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const ContactLink = styled.a`
  color: #f1c40f;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactIcon = styled.div`
  font-size: 24px;
  margin-right: 10px;
  color: #f1c40f;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>Contact Information</ContactTitle>
        <ContactDetail>
          <ContactIcon><FaPhone /></ContactIcon>
          <span>Phone:</span>
          <ContactLink href="tel:+14698826423">469-882-6423</ContactLink>
        </ContactDetail>
        <ContactDetail>
          <ContactIcon><FaEnvelope /></ContactIcon>
          <span>Email:</span>
          <ContactLink href="mailto:akhila6423@gmail.com">akhila6423@gmail.com</ContactLink>
        </ContactDetail>
        <ContactDetail>
          <ContactIcon><FaLinkedin /></ContactIcon>
          <span>LinkedIn:</span>
          <ContactLink href="https://www.linkedin.com/in/akhil6423/" target="_blank" rel="noopener noreferrer">linkedin.com/in/akhil6423/</ContactLink>
        </ContactDetail>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
