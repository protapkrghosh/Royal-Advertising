import React from 'react';
import { Element } from "react-scroll";
import ReflectiveDesign from '../../components/aboutUs/ReflectiveDesign';
import ClientsAndProjects from '../../components/aboutUs/ClientsAndProjects';
import GoalsAndServices from '../../components/aboutUs/GoalsAndServices';
import CorporateServices from '../../components/aboutUs/CorporateServices';
import AboutUSSwipers from '../../components/aboutUs/AboutUSSwipers';

const AboutUs = () => {
    return (
        <Element name="AboutUs" className="element">
            <ReflectiveDesign></ReflectiveDesign>
           <AboutUSSwipers />
            <ClientsAndProjects></ClientsAndProjects>
            <GoalsAndServices></GoalsAndServices>
            <CorporateServices></CorporateServices>
        </Element>
    );
};

export default AboutUs;