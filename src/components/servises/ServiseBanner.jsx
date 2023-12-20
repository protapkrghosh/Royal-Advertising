import React from 'react';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
const ServiseBanner = () => {
    return (
        <div data-testid="servises-animation">
            <h1 data-aos="fade-up" data-aos-duration="2500" className="text-primary text-center ">Our Services</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                <div  data-aos="zoom-in" data-aos-duration="3000" className="md:w-[50%] ">
                        <Player
                            autoplay
                            speed={1.5}
                            loop
                            src="https://lottie.host/e4c04b5e-f4a6-44d7-8e2f-c357c98f3262/C7PB2qncT8.json"
                            style={{ height: "full", width: "full" }}
                        >
                            <Controls

                                buttons={[
                                    "play",
                                    "repeat",
                                    "frame",
                                    "debug",
                                    "snapshot",
                                    "background"
                                ]}
                            />
                        </Player>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2500" className='md:w-[50%] md:ml-8'>
                        <p className="text-third">WHO WE ARE</p>
                        <h1 className="text-secendary">Tailored Solutions, Unmatched Excellence by Royel Advertising.</h1>
                        <p className="text-third ">At Royel Advertising, our services are crafted with precision to meet your unique needs. From strategic marketing to compelling design, we offer tailored solutions that set your brand apart. Partner with us for a journey of innovation, creativity, and unparalleled excellence. Your success is our priority, and our services reflect our commitment to turning your vision into reality</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiseBanner;