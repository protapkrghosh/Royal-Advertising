import React from 'react';
import { Element } from "react-scroll";
import ReflectiveDesign from '../../components/aboutUs/ReflectiveDesign';
import ClientsAndProjects from '../../components/aboutUs/ClientsAndProjects';
import CorporateServices from '../../components/aboutUs/CorporateServices';
import AboutUSSwipers from '../../components/aboutUs/AboutUSSwipers';

const AboutUs = () => {
    return (
        <Element name="About Us" className="element">
             <AboutUSSwipers />
            <ReflectiveDesign></ReflectiveDesign>
            <ClientsAndProjects></ClientsAndProjects>
           
            <CorporateServices></CorporateServices>
        </Element>
    );
};

export default AboutUs;