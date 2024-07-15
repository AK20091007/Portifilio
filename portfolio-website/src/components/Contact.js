import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const ContactDetail = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const ContactLink = styled.a`
  color: #0073b1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Information</ContactTitle>
      <ContactDetail><strong>Name:</strong> Akhil Krishna Alapati</ContactDetail>
      <ContactDetail><strong>Role:</strong> Senior UX Designer & React Developer</ContactDetail>
      <ContactDetail>
        <strong>Phone:</strong> <ContactLink href="tel:+14698826423">469-882-6423</ContactLink>
      </ContactDetail>
      <ContactDetail>
        <strong>Email:</strong> <ContactLink href="mailto:akhila6423@gmail.com">akhila6423@gmail.com</ContactLink>
      </ContactDetail>
      <ContactDetail>
        <strong>LinkedIn:</strong> <ContactLink href="https://www.linkedin.com/in/akhila6423/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/akhila6423/</ContactLink>
      </ContactDetail>
    </ContactContainer>
  );
}

export default Contact;
