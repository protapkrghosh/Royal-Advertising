import React from "react";
import "./Services.css";
import useAOSInit from "../../hooks/useAosInit";

const Services = () => {
  useAOSInit()
  return (
    <div data-aos="fade-right"  className="lg:w-[40%] px-5 lg:px-0 space-y-6">
      <div  className="skill">
        <div className="skill-name">Graphic Design</div>
        <div className="skill-bar">
          <div
            className="skill-per text-black font-semibold"
            per="92%"
            style={{ maxWidth: "92%" }}
          ></div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-name">Branding</div>
        <div className="skill-bar">
          <div
            className="skill-per text-black font-semibold"
            per="77%"
            style={{ maxWidth: "77%" }}
          ></div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-name">Social Media Marketing</div>
        <div className="skill-bar">
          <div
            className="skill-per text-black font-semibold"
            per="86%"
            style={{ maxWidth: "86%" }}
          ></div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-name">Web Design & Development</div>
        <div className="skill-bar">
          <div
            className="skill-per text-black font-semibold"
            per="96%"
            style={{ maxWidth: "96%" }}
          ></div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-name">Content Marketing</div>
        <div className="skill-bar">
          <div
            className="skill-per text-black font-semibold"
            per="73%"
            style={{ maxWidth: "73%" }}
          ></div>
        </div>
      </div>
      
      <div className="skill">
        <div className="skill-name">Video Creation & Editing</div>
        <div className="skill-bar">
          <div
            className="skill-per text-black font-semibold"
            per="89%"
            style={{ maxWidth: "89%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
