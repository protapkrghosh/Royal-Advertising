
import { Element } from "react-scroll";

import AboutUs from "../aboutUs/AboutUs";
import ContactUs from "../contactUs/ContactUs";
import Servises from "../servises/Servises";
import Images from "../../components/home/Images";
import HomeBanner from "../../components/home/HomeBanner";
import Testimonial from "../../components/testimonial/Testimonial";
import Reason from "../reason/Reason";
import Navbar from "../shered/navbar/Navbar";


const Home = () => {
  return (
    <Element name="Home" className="element">
      <Navbar />
     <HomeBanner />
      <AboutUs />
      <Servises />
      <Reason />
      <Images />
    
      <ContactUs />
      <Testimonial />
    </Element>
  );
};

export default Home;
