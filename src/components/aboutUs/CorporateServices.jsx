import React from "react";
import { Link } from "react-router-dom";

const CorporateServices = () => {
  const responsive =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 lg:w-[1300px] mx-auto my-12 px-2 lg:px-0";
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
  ];

  const secondDatas = [
    {
      h3: "RESULT-ORIENTED SERVICES",
      p: (
        <p>
          Every penny counts, so we use a result-oriented approach when <br />{" "}
          providing services.
        </p>
      ),
    },
    {
      h3: "COST-EFFECTIVE SERVICES",
      p: (
        <p>
          Whatever the investment, we deliver effective and cost-effective
          <br /> results.
        </p>
      ),
    },
    {
      h3: "TIME MANAGEMENT",
      p: (
        <p>
          We prioritize tasks according to the goals, which helps manage
          <br /> time effectively.
        </p>
      ),
    },
  ];

  return (
    <div className="text-center mb-[100px]">
      <h6 className="font-semibold tracking-wider mb-2 lg:mb-5">CORPORATE SERVICE</h6>
      <h3 className="text-5xl font-bold mb-6">Why Us</h3>
      <p className="text-gray-500 font-semibold tracking-wide text-lg">
        We appreciate your trust greatly! Our clients choose us and our products
        because they know we're the best.
      </p>
        <div className={responsive}>
          {firstDatas.map((data, index) => (
            <div key={index}>
              <div>
                <h3 className={heading}>{data.h3}</h3>
                <p className={para}>{data.p}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
          {secondDatas.map((data, index) => (
            <div key={index}>
              <div>
                <h3 className={heading}>{data.h3}</h3>
                <p className={para}>{data.p}</p>
              </div>
            </div>
          ))}
      </div>
        <button className="bg-[#0C0833] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#1C1880] my-12">Contact Us Now For More Details</button>
    </div>
  );
};

export default CorporateServices;
