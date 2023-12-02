import Lottie from "lottie-react";
import aboutUs from "../../data/animations/aboutUs.json";
import useAOSInit from "../../hooks/useAosInit";

const ReflectiveDesign = () => {
 useAOSInit()

  return (
    <div className="mt-48">
      <h1  data-aos="fade-up" className="text-primary text-center ">About Us</h1>
      <div className="hero my-16 max-w-[1320px] mx-auto ">
        <div className="hero-content flex flex-col lg:flex-row justify-between">
          <div data-aos="zoom-in" className="md:w-[50%]">
            <Lottie animationData={aboutUs} loop={true} />
          </div>

          <div data-aos="fade-left" className="md:w-[50%] ">
            <h6 className="font-semibold">ABOUT REFLECTIVE DESIGN</h6>
            <h1 className="text-secendary  ">
              We Help Your Digital Business Grow
            </h1>
            <p className="py-6 text-slate-500 text-lg">
              Reflective Design is a top digital marketing 
              Lucknow, India. As the best digital marketing company in Lucknow, we
              understand the importance of businesses adapting to digital channels
              to achieve their short-term and long-term revenue, marketing, and
              Lucknow, India. As the best digital marketing company in Lucknow, we
              understand the importance of businesses adapting to digital channels
              to achieve their short-term and long-term revenue, marketing, and
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveDesign;
