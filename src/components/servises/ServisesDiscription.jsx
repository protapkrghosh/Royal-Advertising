import { FaArrowRight } from 'react-icons/fa';
import { ourservises } from "../../data/data";
import React, { useState } from 'react';

const ServisesDiscription = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="md:grid grid-cols-3 gap-4 w-9/12 mx-auto">
      {ourservises.map((servise, index) => (
        <div
          key={index}
          className="card w-full p-2 relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <figure>
            <img src={servise.img} alt={servise.title} />
          </figure>
          <div className="text-center">
            <h2 className="text-forth font-bold">{servise.title}</h2>
            <p className='text-third '>{servise.discription}</p>
            <div className='flex items-center   mx-auto w-full gap-2'>
            <p
              className={` opacity-0 transition-opacity duration-300 text-[#070234] md:ml-20 ml-24 font-bold ${hoveredIndex === index ? 'opacity-100 && translate-x-0' : ''}`}
            >
             Read More
            </p>
            
              <FaArrowRight className={`transform transition-transform duration-300 cursor-pointer   border rounded-full ${hoveredIndex === index ? 'translate-x-full' : 'translate-x-0'}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServisesDiscription;
