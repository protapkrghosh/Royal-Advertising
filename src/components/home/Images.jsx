import React from 'react';
import { Element } from 'react-scroll';

const Images = () => {
    return (
        <Element>
            <div>
        <h1 className="text-primary text-center mb-8">Our Gellery</h1>
        <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-[500px]">
        
        {/* First column */}
        <div className="col-span-1 ">
          <img src="https://stw.co.in/sigma_content/img/1234.jpg" loading="lazy" alt="" className="w-full mb-4 hover:scale-105  " />
          <img src="https://stw.co.in/sigma_content/img/p-2.png" loading="lazy" alt="" className="w-full h-1/2 mb-4 hover:scale-105" />
          <img src="https://stw.co.in/sigma_content/img/p-3.png" loading="lazy" alt="" className="w-full h-1/2 hover:scale-105" />
          
        </div>
  
        {/* Second column */}
        <div className="col-span-1">
          <img src="https://stw.co.in/sigma_content/img/p-4.png" loading="lazy" alt="" className="w-full h-1/2 mb-4 hover:scale-105" />
          <img src="https://stw.co.in/sigma_content/img/123.jpg" loading="lazy" alt="" className="w-full h-1/2 hover:scale-105" />
          <img src="https://stw.co.in/sigma_content/img/a2.jpg" loading="lazy" alt="" className="w-full hover:scale-105" />
        </div>
  
        {/* Third column */}
        <div className="col-span-1">
          <img src="https://stw.co.in/sigma_content/img/p-7.png" loading="lazy" alt="" className="w-full h-1/2 mb-4 hover:scale-105" />
          <img src="https://stw.co.in/sigma_content/img/p-6.png" loading="lazy" alt="" className="w-full h-1/2 mb-4 hover:scale-105" />
          <img src="https://stw.co.in/sigma_content/img/p-11.png" loading="lazy" alt="" className="w-full hover:scale-105" />
        </div>
  
        {/* Fourth column */}
        <div className="col-span-1">
          <img src="https://stw.co.in/sigma_content/img/p-92.webp" loading="lazy" alt="" className="w-full h-1/2 mb-4 hover:scale-105" />
          <img src="https://stw.co.in/sigma_content/img/p-12.png" loading="lazy" alt="" className="w-full h-[400px] mb-4 hover:scale-105" />
          <img src="https://stw.co.in/sigma_content/img/CL-2.jpg" loading="lazy" alt="" className="w-full h-[400px] mb-4 hover:scale-105" />
          
        </div>
      </div>
    </div>
        </Element>
    );
};

export default Images;