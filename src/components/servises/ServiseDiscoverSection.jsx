import React from 'react';
import discover from "../../assets/discover.avif"
const ServiseDiscoverSection = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <img data-aos="fade-left" data-aos-duration="2000" loading='lazy' width="100" height="10" alt='discover' src={discover} className="w-[90%] md:w-[55%]" />

        <div data-aos="fade-right" data-aos-duration="2000">
          <h1 className="text-secendary">Elevate Your Brand with Tailored Excellence.</h1>
          <p className="text-third">At Royel Advertising, discover a suite of services meticulously crafted to redefine your brand's success. From strategic planning to captivating design and seamless execution, we are your dedicated partners in achieving impactful results. Explore the realm of possibilities with our tailored services, where innovation meets success.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiseDiscoverSection;