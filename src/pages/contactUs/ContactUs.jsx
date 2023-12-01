import React from 'react';
import { Element } from "react-scroll";
import GetInTouch from '../../components/contacts/GetInTouch/GetInTouch';

const ContactUs = () => {
  return (
    <Element name="Contacts" className="element">
      <GetInTouch />
    </Element>
  );
};

export default ContactUs;