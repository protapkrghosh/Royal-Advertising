import React from "react";

import { Element } from "react-scroll";
import Faq from "../../components/home/Faq";
import AboutUs from "../aboutUs/AboutUs";
import ContactUs from "../contactUs/ContactUs";
import Servises from "../servises/Servises";
import Images from "../../components/home/Images";

const Home = () => {
  return (
    <Element name="Home" className="element">
      <div className="hero mt-20 mb-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-[50%]">
            <img src="https://media.licdn.com/dms/image/C4D12AQHAZlGS1J5GxA/article-cover_image-shrink_720_1280/0/1619039280830?e=2147483647&v=beta&t=Ojh3HWpt151vFbdT1kkTxLp-sKl2ljxgib4rQgfVLeY" className="transition-transform duration-300 transform hover:-translate-x-2" />
          </div>
          <div className="md:w-[50%]">
            <h1 className="text-7xl font-bold text-[#070234]">Best Digital <br /> Marketing <br /> Company <br /> in Lucknow!
            </h1>
            <p className="py-6 text-slate-500">Give your brand a boost with our digital marketing agency. We get <br /> you a customer not just a traffic.</p>
            <button className="btn btn-primary">About Us</button>
            <button className="btn btn-secondary ml-4">Contact Us</button>
          </div>
        </div>
      </div>
      <AboutUs />
      <Servises />
      <Images />
      <Faq />
      <ContactUs />
    </Element>
  );
};

export default Home;
