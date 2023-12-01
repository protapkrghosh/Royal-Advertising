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
            <h1 className="text-primary text-center ">About Us</h1>
            <ReflectiveDesign></ReflectiveDesign>
            <ClientsAndProjects></ClientsAndProjects>
           <AboutUSSwipers />
            <CorporateServices></CorporateServices>
            <GoalsAndServices></GoalsAndServices>
        </Element>
    );
};

export default AboutUs;