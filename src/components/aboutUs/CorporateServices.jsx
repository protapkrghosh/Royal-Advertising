import React from "react";
import useAOSInit from "../../hooks/useAosInit";
import { Link as ScrollLink } from "react-scroll";
const CorporateServices = () => {
  useAOSInit()
  const responsive =
    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 xl:w-[1300px] mx-auto my-12 px-2 lg:px-0";
  const heading = "text-2xl lg:text-3xl font-bold lg:tracking-wider mb-4";
  const para = "text-gray-400 tracking-wide text-lg";

  const firstDatas = [
    {
      h3: "CREATIVE IDEAS",
      p: (
        <p>
          By stretching our thinking capacity, we <br /> can come up with
          creative and different <br /> ideas.
        </p>
      ),
    },
    {
      h3: "DISTINCT WORK PROCESS",
      p: (
        <p>
          Our creative process begins with the
          <br /> drawing of ideas and ends with the
          <br /> approval of the design.
        </p>
      ),
    },
    {
      h3: "EFFECTIVE STRATEGIES",
      p: (
        <p>
          Creating lead-generation strategies that
          <br /> generate sales and leads is what <br />
          reflective design does best.
        </p>
      ),
    },
    {
      h3: "RESULT-ORIENTED SERVICES",
      p: (
        <p>
          Every penny counts, so we use a result <br />oriented approach when
          providing <br /> services.
        </p>
      ),
    },
    {
      h3: "COST-EFFECTIVE SERVICES",
      p: (
        <p>
          Whatever the investment, we deliver <br /> effective and cost-effective
          <br /> results.
        </p>
      ),
    },
    {
      h3: "TIME MANAGEMENT",
      p: (
        <p>
          We prioritize tasks according to the goals,<br/>  which helps manage
          time  <br />effectively.
        </p>
      ),
    },
  ];
  const imge = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmKHNnp2eayRYGL8JBBtIW-FR2I0tr_VBB8iDP94o6FXFwMRejzFnD1Ov2-cDAPRtinQ&usqp=CAU"

  const imgeStyle = {
      backgroundImage: `url(${imge})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', 
  };
  return (
    <div style={imgeStyle} className="text-center mb-[100px] pt-12">
      <div data-aos="fade-up" data-aos-duration="3000" className="pb-8">
        <h1 data-aos="fade-up" data-aos-duration="3000" className="text-third">CORPORATE SERVICE</h1>
        <h3 className="text-primary">Why Us</h3>
        <p className="text-third px-3">
          We appreciate your trust greatly! Our clients choose us and our products
          because they know we're the best.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-duration="3000" className={responsive}>
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
      data-aos="fade-up" ><p className="bg-[#0C0833] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#1C1880] my-12 cursor-pointer">Contact Us Now For More Details</p></ScrollLink>
    </div>
  );
};

export default CorporateServices;