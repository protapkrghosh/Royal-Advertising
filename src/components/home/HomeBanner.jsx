import Lottie from "lottie-react";
import homeAnimation from "../../data/animations/homeAnimation.json"
import { Typewriter } from 'react-simple-typewriter'
const HomeBanner = () => {
  return (
    <div className="hero mt-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="md:w-[50%] ">
          <Lottie animationData={homeAnimation} loop={true} />
        </div>
        <div className="md:w-[50%]">
          <div className="text-primary">
            <h1 className="">
              Best Digital Marketing Company
            </h1>
            <Typewriter
              words={['in Lucknow!']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              className="text-primary"
            />
          </div>

          <p className="py-6 text-slate-500">Give your brand a boost with our digital marketing agency. We get <br /> you a customer not just a traffic.</p>
          <button className="btn btn-primary">About Us</button>
          <button className="btn btn-secondary ml-4">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;