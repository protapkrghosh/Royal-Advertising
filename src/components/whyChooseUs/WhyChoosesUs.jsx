import { whyChooseUsData } from "../../data/data";
import useAOSInit from "../../hooks/useAosInit";

const WhyChoosesUs = () => {
  useAOSInit();

  return (
    <div className="py-5 md:py-24 bg-whyChouseUs bg-cover bg-no-repeat" >
      <h1 data-aos="fade-up" data-aos-duration="3000" className="text-primary  mb-7 text-center">Why Choose Us</h1>
      <div data-aos="fade-down-left" data-aos-duration="3000"  className="grid grid-cols-1 md:grid-cols-2  md:w-9/12 mx-auto pt-14">
        {whyChooseUsData.map((chooseus, index) => (
          <div key={index} className="card w-full ">           
            <figure><img src={chooseus.imge} alt="choosus imge" className="w-20 h-20 rounded-full" /></figure>
            <div className="card-body text-center">
              <h2 className="text-secendary">{chooseus.title}</h2>
              <p className="text-third">{chooseus.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoosesUs;
