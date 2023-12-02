
import { Typewriter } from 'react-simple-typewriter';
import videoBackground from "../../../public/Youth Day City Advertising Big Screen Slide Show Ae Template Video AEP Template Free Download - Pikbest.mp4"; // replace with the actual path to your video file
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div>
       <Navbar />
      <div className="hero mt-24" style={{ position: 'relative' }}>
  
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content flex-col lg:flex-row-reverse" style={{ zIndex: 1 }}>
       
        <div className="md:w-[50%]">
          <div className="text-banner">
            <h1 className="">
              Boost Your Brand with Digital Strategies
            </h1>
            <Typewriter
              words={['Engagement', 'Visibility', 'Conversion']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              className="text-primary"
            />
          </div>

          <p className="py-6 text-slate-500">Give your brand a boost with our digital marketing agency. We get <br /> you a customer not just traffic.</p>
          <button className="btn btn-primary">About Us</button>
          <button className="btn btn-secondary ml-4">Contact Us</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeBanner;
