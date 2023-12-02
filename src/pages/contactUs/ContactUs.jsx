import React from 'react';
import { Element } from "react-scroll";
import ContactForm from '../../components/contacts/ContactForm';

const ContactUs = () => {
  return (
    <Element name="Contact Us" className="element">
      <ContactForm />
    </Element>
  );
};

export default ContactUs;