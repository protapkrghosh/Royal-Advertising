import React from 'react';
import { Element } from "react-scroll";
import GetInTouch from '../../components/contacts/GetInTouch';
import Map from '../../components/contacts/Map';
import ContactForm from '../../components/contacts/ContactForm';

const ContactUs = () => {
  return (
    <Element name="Contacts" className="element">
      <GetInTouch />
      <Map />
      <ContactForm />
    </Element>
  );
};

export default ContactUs;