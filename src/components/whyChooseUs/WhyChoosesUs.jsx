import { whyChooseUsData } from "../../data/data";
import useAOSInit from "../../hooks/useAosInit";

const WhyChoosesUs = () => {
  useAOSInit();
  const imge = "https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D";

  const imgeStyle = {
    backgroundImage: `url(${imge})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className="py-5 md:py-24" style={imgeStyle}>
      <h1 data-aos="fade-up" data-aos-duration="3000" className="text-primary  mb-7 text-center">Why Choose Us</h1>
      <div data-aos="fade-down-left" data-aos-duration="3000"  className="grid grid-cols-1 md:grid-cols-2 md:w-9/12 mx-auto pt-14">
        {whyChooseUsData.map((chooseus, index) => (
          <div key={index} className="card w-full ">           
            <figure><img src={chooseus.imge} alt="Shoes" className="w-20 h-20 rounded-full" /></figure>
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
