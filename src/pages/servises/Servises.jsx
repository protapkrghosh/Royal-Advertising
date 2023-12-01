import { Element } from "react-scroll";
import ServiseBanner from "../../components/servises/ServiseBanner";
import ServisesDiscription from "../../components/servises/ServisesDiscription";


const Servises = () => {
    return (
        <Element name="Services" className="element">
            <h1 className="text-primary text-center ">Our Services</h1>
            <div>
               <ServiseBanner />
               <ServisesDiscription />
            </div>
        </Element>

    );
};

export default Servises;