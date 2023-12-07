import videoBackground from "../../../public/Youth Day City Advertising Big Screen Slide Show Ae Template Video AEP Template Free Download - Pikbest.mp4";
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://africanmarketingconfederation.org/wp-content/uploads/2021/09/6-Sept-Digital-OOH-in-the-US.png"
        className="absolute w-[100%] h-[100vh] object-cover z-[-1]"
        alt=""
      />
      <div className="absolute top-0 left-0 w-[100%] h-[100vh] bg-black bg-opacity-50 z-0 shadow-lg" />

      {/* Navbar Component */}
      <Navbar />

      {/* Content */}
      <div className="hero mt-24 relative">
        <div
          className="hero-content flex-col lg:flex-row-reverse justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <div>
            <div className="text-6xl md:text-7xl text-white font-bold text-center md:mt-[150px]">
              <p>Boost Your Brand with Digital Strategies </p>
            </div>

            <p className="py-6 text-xl text-yellow-400 font-semibold text-center mt-6">
              Give your brand a boost with our digital marketing agency.
              <br /> We get you a customer not just traffic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
