import React from "react";
import { CgChevronDoubleRight } from "react-icons/cg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { companiesLogos } from "../../data/data";
import CountUp from "react-countup";
import "./Services.css";
import shapeImg1 from "../../assets/22.png"
import shapeImg2 from "../../assets/img025.jpg"
import shapeImg3 from "../../assets/img027.png"

const ClientsAndProjects = () => {
  const dew =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIG92ZXJmbG93PSd2aXNpYmxlJyBoZWlnaHQ9JzEwMCUnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdibGFjaycgc3Ryb2tlLXdpZHRoPSczJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnPjxwYXRoIGQ9J00wLDZjNiwwLDYsMTMsMTIsMTNTMTgsNiwyNCw2Jy8+PC9zdmc+";

  return (
    <div className="flex flex-col md:flex-row justify-between gap-20 items-center md:w-9/12 mx-auto mb-16">
      <div className="w-[92%] md:w-[50%]">
        <div className="flex items-center gap-x-12">
          <div>
            <CountUp
              start={0}
              end={770}
              duration={4}
              separator=" "
              suffix=" +"
              className="text-6xl font-bold"
            >
            </CountUp>
            <p className="mt-5">
              We are best professional  marketing analysist with more than 25
              years.
            </p>
            <div className="skill my-8">
              <div className="font-semibold text-[17px]">Graphic Design</div>
              <div className="skill-bar">
                <div
                  className="skill-per text-black font-semibold"
                  per="80%"
                  style={{ maxWidth: "80%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="font-semibold text-[17px]">Web Design</div>
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
            <img src={shapeImg2} alt="" className="w-[400px] h-auto rounded-3xl" />
            <img
              src={shapeImg1}
              alt="Image"
              className="absolute top-0 left-0 -mt-6 -ml-6 border-[8px] border-white rounded-2xl"
            />
          </div>

        </div>

        <div className="w-full bg-gradient-to-b from-sky-200 to-gray-200 flex justify-between p-8 md:p-10 rounded-[40px] mt-10">
          <div>
            <h5 className="text-xl text-[#f75a5a] mb-3">
              JOIN & GET BEST MARKETING STRATEGY
            </h5>
            <h2 className="text-3xl font-bold">
              Let's Boost Up <br /> Your Digital <br />
              Marketing !
            </h2>
          </div>
          <div className="flex justify-center gap-x-1">
            <img src={shapeImg3} className="w-[30px] md:w-[50px] h-[60px] lg:h-[100px]" alt="" />
            <img src={shapeImg3} className="w-[30px] md:w-[60px] h-[80px] lg:h-[130px]" alt="" />
            <img src={shapeImg3} className="w-[30px] md:w-[70px] h-[100px] lg:h-[160px]" alt="" />
          </div>
        </div>
      </div>

      <div className="w-[92%] md:w-[50%]">
        <div className="flex mb-10">
          <img src={dew} className=" h-[40px] w-[80px]" alt="" />
          <img src={dew} className=" h-[40px] w-[80px] -mx-[2px]" alt="" />
          <img src={dew} className=" h-[40px] w-[80px]" alt="" />
        </div>
        <h1 className="text-5xl font-bold mb-5">
          We Always Prioritize <br />
          Your Development
        </h1>
        <p className="text-gray-500 mb-8">
          Platea inventore feugiat laudantium, earum dis mauris <br />
          repellendus. Nostra! Accusamus dui maecenas dolore nunc <br />
          mollitia interdum aliquet. Voluptatibus delectus eget.
        </p>
        <div className="flex items-center gap-x-10">
          <div>
            <div className="flex items-center gap-x-2 mb-2">
              <CgChevronDoubleRight className="text-[#F85152]"></CgChevronDoubleRight>
              <p>Veniam in alias tenetur earum</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <CgChevronDoubleRight className="text-[#F85152]"></CgChevronDoubleRight>
              <p>Mollis facere exercitation delectu</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <CgChevronDoubleRight className="text-[#F85152]"></CgChevronDoubleRight>
              <p>Platea inventore feugiat eget</p>
            </div>
            <button className="bg-[#BEE6FD] hover:bg-[#afdbf5] px-10 py-3 rounded-full uppercase font-semibold my-5 duration-100">
              More about us
            </button>
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
