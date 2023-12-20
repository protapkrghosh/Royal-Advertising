import React from "react";
import { CgChevronDoubleRight } from "react-icons/cg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import CountUp from "react-countup";
import "./Services.css";
import shapeImg1 from "../../assets/22.png"
import shapeImg2 from "../../assets/img025.jpg"
import useAOSInit from "../../hooks/useAosInit";

const ClientsAndProjects = () => {
  useAOSInit()
  const dew =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIG92ZXJmbG93PSd2aXNpYmxlJyBoZWlnaHQ9JzEwMCUnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdibGFjaycgc3Ryb2tlLXdpZHRoPSczJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnPjxwYXRoIGQ9J00wLDZjNiwwLDYsMTMsMTIsMTNTMTgsNiwyNCw2Jy8+PC9zdmc+";
    
  return (
    <div className="md:flex justify-between gap-x-10 xl:gap-x-24 items-center px-5 md:px-0 xl:w-9/12 mt-10 lg:mt-0  lg:mx-5 xl:mx-auto mb-16 md:pt-36 ">

      <div data-aos="flip-left" data-aos-duration="3000" className="md:w-[50%]">
        <div  className="md:flex items-center gap-x-12">
          <div>
            <CountUp
              start={0}
              end={770}
              duration={4}
              separator=" "
              suffix=" +"
              className="text-4xl md:text-6xl font-bold"
            >
            </CountUp>
            <p className="mt-5">
            Crafting success, prioritizing you—Royel Advertising’s commitment to your growth.
            </p>
            <div className="skill my-8">
              <div className="font-semibold text-[15px]">Prime Location Selection</div>
              <div className="skill-bar">
                <div
                  className="skill-per text-black font-semibold"
                  per="80%"
                  style={{ maxWidth: "80%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-20 md:mb-0">
              <div className="font-semibold text-[15px]">Strategic Campaign <br /> Planning</div>
              <div className="skill-bar">
                <div
                  className="skill-per text-black font-semibold"
                  per="95%"
                  style={{ maxWidth: "92%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={shapeImg2} loading="lazy" alt="" width="640" height="360"  className="w-[300px] md:w-[400px] h-auto rounded-3xl mx-auto" />
            <img
              src={shapeImg1}
              alt="Image"
              className="absolute -top-10 md:top-0 left-5 md:left-0 -mt-6 -ml-6 border-[8px] border-white rounded-2xl"
              loading="lazy"
              width="640" height="360"
            />
          </div>
        </div>

        <div className="w-full bg-gradient-to-b from-sky-200 to-gray-200 flex justify-between p-8 md:p-10 rounded-[40px] mt-10">
          <div>
            <h1 className="md:text-xl text-[#f75a5a] mb-3">
              JOIN & GET BEST MARKETING STRATEGY
            </h1>
            <h2 className="text-xl md:text-3xl font-bold">
              Let's Boost Up <br /> Your Business  <br />
              withe us !
            </h2>
          </div>
          <div className="flex justify-center gap-x-1">
            <span className="w-[30px] md:w-[50px] h-[60px] lg:h-[100px] bg-blue-500 rounded-full"></span>
            <span className="w-[30px] md:w-[55px] h-[80px] lg:h-[130px] bg-green-400 rounded-full"></span>
            <span className="w-[30px] md:w-[60px] h-[100px] lg:h-[160px] bg-red-500 rounded-full"></span>
          </div>
        </div>
      </div>
      
      <div data-aos="fade-down-left" data-aos-duration="3000" className="md:w-[50%] mt-10 md:mt-0">
        <div className="flex mb-10">
          <img src={dew} className=" h-[40px] w-[80px]" alt="dew1" />
          <img src={dew} className=" h-[40px] w-[80px] -mx-[2px]" alt="dew2"  />
          <img src={dew} className=" h-[40px] w-[80px]" alt="dew3"  />
        </div>
        <h1 className="text-5xl font-bold mb-5 ">
        Empowering Growth Your Success, Our Priority at Royel Advertising.
        </h1>
        <p className="text-gray-500 xl:mb-2">
        At Royel Advertising, we are dedicated to propelling your business towards unprecedented success. Our mission is simple yet powerful: to empower growth by making your success our topmost priority. We understand that every venture is unique, and that's why we tailor our innovative marketing strategies to meet your specific needs. With a team of seasoned professionals, we navigate the dynamic landscape of digital marketing, ensuring that your brand not only stands out but thrives. Your success is not just a goal; it's our commitment. Partner with Royel Advertising, where empowerment meets achievement, and watch your business soar to new heights
        </p>
        <div className="lg:flex flex-col lg:flex-row items-center lg:gap-x-2 xl:gap-x-10 ">
          <div>
            <div className="flex items-center gap-x-2 mb-2">
              <CgChevronDoubleRight className="text-[#F85152]"></CgChevronDoubleRight>
              <p> Your success is our top priority at Royel.</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <CgChevronDoubleRight className="text-[#F85152]"></CgChevronDoubleRight>
              <p>Your success, our focus</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <CgChevronDoubleRight className="text-[#F85152]"></CgChevronDoubleRight>
              <p>Empower your growth with Royel Advertising.</p>
            </div>
          </div>
          <div className="border-[8px] border-[#FEE7E7] px-6 py-6 text-center rounded-2xl">
            <CountUp
              start={0}
              end={25}
              duration={4}
              separator=" "
              suffix=" +"
              className="text-4xl font-bold"
            >
            </CountUp>
            <p className="text-gray-500 mt-3">
              YEARS <br /> EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsAndProjects;
