import { Typewriter } from 'react-simple-typewriter';
import videoBackground from "../../../public/Youth Day City Advertising Big Screen Slide Show Ae Template Video AEP Template Free Download - Pikbest.mp4";
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,  // Make sure the video is behind the content
        }}
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for transparency
          zIndex: 0,  // Set a lower zIndex than the video to be behind it
        }}
      />

      {/* Navbar Component */}
      <Navbar />

      {/* Content */}
      <div  className="hero mt-24 relative">
        <div  className="hero-content flex-col lg:flex-row-reverse justify-center items-center" style={{ zIndex: 1 }}>
          <div>
            <div  className='text-5xl text-white font-bold text-center mt-[150px]'>
                <p>Boost Your Brand with <br /> Digital Strategies</p>
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

            <p className="py-6 text-yellow-400 font-semibold text-center mt-6">Give your brand a boost with our digital marketing agency.<br />  We get you a customer not just traffic.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
