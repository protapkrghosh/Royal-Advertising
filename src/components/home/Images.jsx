import React from 'react';
import { Element } from 'react-scroll';
import useAOSInit from '../../hooks/useAosInit';

const Images = () => {
  useAOSInit()
  return (
    <Element name="Gallery" className="element">
      <div>
        <h1 data-aos="fade-up" data-aos-duration="3000" className="text-primary text-center mb-16">Our Gallery</h1>
        <div className="w-11/12 md:w-9/12 mx-auto  ">

          <div data-aos="zoom-in-down" data-aos-duration="3000" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full ">
            <img src="https://stw.co.in/sigma_content/img/1234.jpg" loading="lazy" alt="" className=" w-full h-64 hover:scale-105 duration-500" />
            <img src="https://stw.co.in/sigma_content/img/p-2.png" loading="lazy" alt="" className="w-full h-64 hover:scale-105 duration-500" />
            <img src="https://stw.co.in/sigma_content/img/p-3.png" loading="lazy" alt="" className="w-full h-64 hover:scale-105 duration-500" />
            <img src="https://stw.co.in/sigma_content/img/p-3.png" loading="lazy" alt="" className="w-full h-64 hover:scale-105 duration-500" />

          </div>
          <div data-aos="zoom-in-down" data-aos-duration="3000" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  mt-4">
            <img src="https://stw.co.in/sigma_content/img/p-4.png" loading="lazy" alt="" className=" w-full h-64 hover:scale-105 duration-500" />
            <img src="https://stw.co.in/sigma_content/img/a2.jpg" loading="lazy" alt="" className="w-full h-64 hover:scale-105 duration-500" />
            <img src="https://stw.co.in/sigma_content/img/123.jpg" loading="lazy" alt="" className="w-full h-64 hover:scale-105 duration-500" />

          </div>

          <div data-aos="zoom-in-down" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-4">
            <img src="https://stw.co.in/sigma_content/img/p-7.png" loading="lazy" alt="" className=" w-full h-64 hover:scale-105 duration-500" />
            <img src="https://stw.co.in/sigma_content/img/p-6.png" loading="lazy" alt="" className="w-full h-64 hover:scale-105 duration-500" />
            <img src="https://stw.co.in/sigma_content/img/p-11.png" loading="lazy" alt="" className=" w-full h-64 hover:scale-105 duration-500" />
            <img src="https://stw.co.in/sigma_content/img/p-11.png" loading="lazy" alt="" className=" w-full h-64 hover:scale-105 duration-500" />
          </div>

        </div>
      </div>
    </Element>
  );
};

export default Images;