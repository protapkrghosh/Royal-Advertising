import React from "react";
import useAOSInit from "../../hooks/useAosInit";
import { Link as ScrollLink } from "react-scroll";
import { firstDatas } from "../../data/data";
const CorporateServices = () => {
  useAOSInit()
  const responsive =
    "";

  const imge = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmKHNnp2eayRYGL8JBBtIW-FR2I0tr_VBB8iDP94o6FXFwMRejzFnD1Ov2-cDAPRtinQ&usqp=CAU"

  const imgeStyle = {
      backgroundImage: `url(${imge})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', 
  };
  return (
    <div style={imgeStyle} className="text-center mb-[100px] pt-12">
      <div data-aos="fade-up" data-aos-duration="3000" className="pb-8">
        <h6 data-aos="fade-up" data-aos-duration="3000" className="text-third">CORPORATE SERVICE</h6>
        <h3 className="text-primary">Why Us</h3>
        <p className="text-third px-3">
          We appreciate your trust greatly! Our clients choose us and our products
          because they know we're the best.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-duration="3000" className="responsive">
        {firstDatas.map((data, index) => (
          <div key={index}>
            <div>
              <h3 className="text-fifth">{data.h3}</h3>
              <p className="text-third">{data.p}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollLink to="Contact Us" 
      smooth={true}
      duration={700}
      data-aos="fade-up" className="bg-[#0C0833] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#1C1880] my-12 cursor-pointer">Contact Us Now For More Details</ScrollLink>
    </div>
  );
};

export default CorporateServices;