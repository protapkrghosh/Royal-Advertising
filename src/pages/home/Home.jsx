
import { Element } from "react-scroll";
import Faq from "../../components/home/Faq";
import AboutUs from "../aboutUs/AboutUs";
import ContactUs from "../contactUs/ContactUs";
import Servises from "../servises/Servises";
import Images from "../../components/home/Images";
import HomeBanner from "../../components/home/HomeBanner";
import Reason from "../reason/Reason";

const Home = () => {
  return (
    <Element name="Home" className="element">
     <HomeBanner />
      <AboutUs />
      <Servises />
      <Reason></Reason>
      <Images />
      <Faq />
      <ContactUs />
    </Element>
  );
};

export default Home;
