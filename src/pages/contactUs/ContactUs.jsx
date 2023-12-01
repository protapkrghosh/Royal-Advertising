import React from 'react';
import { Element } from "react-scroll";
import GetInTouch from '../../components/contacts/GetInTouch/GetInTouch';
import Map from '../../components/contacts/Map/Map';

const ContactUs = () => {
  return (
    <Element name="Contacts" className="element">
      <GetInTouch />
      <Map />
    </Element>
  );
};

export default ContactUs;