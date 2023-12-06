import React from 'react';
import servisesAnimation from "../../data/animations/servises.json"
import Lottie from 'lottie-react';
const ServiseBanner = () => {
    return (
        <div >
            <h1 data-aos="fade-up" data-aos-duration="3000" className="text-primary text-center ">Our Services</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-right" className='md:w-[50%]'>
                        <Lottie animationData={servisesAnimation} loop={true} />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="3000" className='md:w-[50%]'>
                        <p className="text-third">WHO WE ARE</p>
                        <h1 className="text-secendary">Our Experts are Ready to Help</h1>
                        <p className="text-third ">Our digital marketing company in Lucknow helps businesses and brands achieve success, growth, and more sales. Our reflective design team helps businesses stand out from the crowd by branding them in an out-of-the-box manner, making them more distinctive and innovative. You can make your brand speak creatively to your customers with our best services. Unlike other brands of thinkers, Reflective Design stands out. Developing creativity and solving complex problems with subtlety are the most important things here. We are not just a design and marketing firm but an innovative agency, creating the simplest to the craziest designs, be it real estate, manufacturing, fashion or lifestyle.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiseBanner;