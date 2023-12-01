import { useState } from "react";
import AccordionItem from "./AccordionItem";


const Faq = () => {
    const [activeItem, setActiveItem] = useState(null);
    return (
        <div className="hero mb-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="md:w-[50%]">
                    <img src="https://reflectivedesign.in/wp-content/uploads/2021/11/image-3-copyright.svg" className="" />
                </div>
                <div className="md:w-[60%] py-5 px-5 md:px-[60px]">
                    <div>
                        <AccordionItem
                            id="collapseOne"
                            title="Result Driven Work"
                            content="Reflective Designs understands the needs of clients and maximizes growth opportunities. In order to meet the client’s demands, we provide a result-oriented service based on the tastes and choices of the client at a particular time."
                            activeItem={activeItem}
                            setActiveItem={setActiveItem}
                        />
                        <AccordionItem
                            id="collapseTwo"
                            title="Certified & Experienced Team"
                            content="With our team of certified and experienced digital marketing experts, we can help you achieve your goals."
                            activeItem={activeItem}
                            setActiveItem={setActiveItem}
                        />
                        <AccordionItem
                            id="collapseThree"
                            title="Result Oriented Projects"
                            content="40+ Startups trust us for our excellence and best service as a result of their 10X growth."
                            activeItem={activeItem}
                            setActiveItem={setActiveItem}
                        />
                        <AccordionItem
                            id="collapseFour"
                            title="Best ROI Techniques"
                            content="For the last 5+ years, we have been delivering growth continuously. 84+ satisfied clients in the whole country."
                            activeItem={activeItem}
                            setActiveItem={setActiveItem}
                        />
                        <AccordionItem
                            id="collapseFive"
                            title="5+ Years Trust"
                            content="For the last 5+ years, we have been delivering growth continuously. 84+ satisfied clients in the whole country."
                            activeItem={activeItem}
                            setActiveItem={setActiveItem}
                        />
                        <button className="btn-discover mt-4">Discover Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Faq;