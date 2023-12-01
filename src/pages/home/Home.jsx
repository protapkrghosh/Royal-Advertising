import { Element } from "react-scroll";
import Faq from "../../components/home/Faq";
import ContactUs from "../contactUs/ContactUs";

const Home = () => {
    return (

        <Element name="Home" className="element">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="md:w-[50%]">
                        <img src="https://reflectivedesign.in/wp-content/uploads/2021/11/image-1-copyright.svg" className="" />
                    </div>
                    <div className="md:w-[50%]">
                        <h1 className="text-7xl font-bold text-[#070234]">Best Digital <br /> Marketing <br /> Company <br /> in Lucknow!
                        </h1>
                        <p className="py-6 text-slate-500">Give your brand a boost with our digital marketing agnecy We get <br /> you a customer not just a traffic.</p>
                        <button className="btn btn-primary">About Us</button>
                        <button className="btn btn-secondary ml-4">Contact Us</button>
                    </div>
                </div>
            </div>
            <Faq />

            <ContactUs />
        </Element>

    );
};

export default Home;
