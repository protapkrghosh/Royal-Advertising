import { useState } from "react";
import AccordionItem from "./AccordionItem";
import useAOSInit from "../../hooks/useAosInit";


const Faq = () => {
  useAOSInit()
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="hero my-24 py-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="md:w-[50%]" data-aos="fade-up" data-aos-duration="3000">
          <img src="https://www.digitalgenix.co.uk/wp-content/uploads/2020/11/slider1.png" className="" />
        </div>

        <div data-aos="fade-right" data-aos-duration="3000" className="md:w-[60%] py-5 px-5 md:px-[60px]">
          <div className="bgColor ">
            <AccordionItem
              data-aos="fade-up"
              data-aos-duration="400"
              id="collapseOne"
              title="Result Driven Work"
              content="Reflective Designs understands the needs of clients and maximizes growth opportunities. In order to meet the client’s demands, we provide a result-oriented service based on the tastes and choices of the client at a particular time."
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <AccordionItem
              data-aos="fade-up"
              data-aos-duration="500"
              id="collapseTwo"
              title="Certified & Experienced Team"
              content="With our team of certified and experienced digital marketing experts, we can help you achieve your goals."
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <AccordionItem
              data-aos="fade-up"
              data-aos-duration="600"
              id="collapseThree"
              title="Result Oriented Projects"
              content="40+ Startups trust us for our excellence and best service as a result of their 10X growth."
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <AccordionItem
              data-aos="fade-up"
              data-aos-duration="800"
              id="collapseFour"
              title="Best ROI Techniques"
              content="For the last 5+ years, we have been delivering growth continuously. 84+ satisfied clients in the whole country."
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <AccordionItem
              data-aos="fade-up"
              data-aos-duration="1100"
              id="collapseFive"
              title="5+ Years Trust"
              content="For the last 5+ years, we have been delivering growth continuously. 84+ satisfied clients in the whole country."
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <button className="btn-discover mt-8">Discover Now</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Faq;