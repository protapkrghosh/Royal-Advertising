import { Element } from "react-scroll";
import ServiseBanner from "../../components/servises/ServiseBanner";
import ServisesDiscription from "../../components/servises/ServisesDiscription";
import ServiseDiscoverSection from "../../components/servises/ServiseDiscoverSection";


const Servises = () => {
    return (
        <Element name="Services" className="element">
            <h1 className="text-primary text-center ">Our Services</h1>
               <ServiseBanner />
               <ServisesDiscription />
               <ServiseDiscoverSection />  
        </Element>

    );
};

export default Servises;