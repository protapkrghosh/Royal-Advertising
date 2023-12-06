import videoBackground from "../../../public/ads.mp4";
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0, 
          boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.5)',
        }}
      />     
      <Navbar />
      <div className="hero mt-24 relative">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center" style={{ zIndex: 1 }}>
          <div>
            <div className='text-6xl md:text-7xl text-white font-bold text-center md:mt-[150px]'>
              <p>Boost Your Brand with Digital Strategies </p>
            </div>

            <p className="py-6 text-xl text-yellow-400 font-semibold text-center mt-6">Give your brand a boost with our digital marketing agency.<br />  We get you a customer not just traffic.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
