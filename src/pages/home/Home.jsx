
import { Element } from "react-scroll";
import Faq from "../../components/home/Faq";
import AboutUs from "../aboutUs/AboutUs";
import ContactUs from "../contactUs/ContactUs";
import Services from "../../components/aboutUs/Services";


const Home = () => {
  return (
    <Element name="Home" className="element">
      <div className="hero mt-20 mb-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-[50%]">
            <img src="https://reflectivedesign.in/wp-content/uploads/2021/11/image-1-copyright.svg" className="" />
          </div>
            <h1 className="text-primary font-bold">Best Digital <br /> Marketing <br /> Company <br /> in Lucknow!
            </h1>
            <p className="py-6 text-slate-500">Give your brand a boost with our digital marketing agency. We get <br /> you a customer not just a traffic.</p>
            <button className="btn btn-primary">About Us</button>
            <button className="btn btn-secondary ml-4">Contact Us</button>
          </div>
        </div>
      </div>
      <AboutUs />
      <Services />
      <Faq />
      <ContactUs />
    </Element>
  );
};

export default Home;