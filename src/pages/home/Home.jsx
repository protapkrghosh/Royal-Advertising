
import { Element } from "react-scroll";
import Faq from "../../components/home/Faq";
import AboutUs from "../aboutUs/AboutUs";
import ContactUs from "../contactUs/ContactUs";
import Servises from "../servises/Servises";
import Images from "../../components/home/Images";
import HomeBanner from "../../components/home/HomeBanner";
import Testimonial from "../../components/testimonial/Testimonial";
import Reason from "../reason/Reason";


const Home = () => {
  return (
    <Element name="Home" className="element">
     <HomeBanner />
      <AboutUs />
      <Servises />
      <Reason />
      <Images />
      <Faq />
      <ContactUs />
      <Testimonial />
    </Element>
  );
};

export default Home;
