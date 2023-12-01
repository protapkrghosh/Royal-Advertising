import React from 'react';
import { Element } from "react-scroll";
import ReflectiveDesign from '../../components/aboutUs/ReflectiveDesign';
import AboutUsSwiper from '../../components/aboutUs/Companies';
import ClientsAndProjects from '../../components/aboutUs/ClientsAndProjects';
import GoalsAndServices from '../../components/aboutUs/GoalsAndServices';
import CorporateServices from '../../components/aboutUs/CorporateServices';

const AboutUs = () => {
    return (
        <Element name="AboutUs" className="element">
            <h1 className="text-primary text-center ">About Us</h1>
            <ReflectiveDesign></ReflectiveDesign>
            <AboutUsSwiper></AboutUsSwiper>
            <ClientsAndProjects></ClientsAndProjects>
            <GoalsAndServices></GoalsAndServices>
            <CorporateServices></CorporateServices>
        </Element>
    );
};

export default AboutUs;