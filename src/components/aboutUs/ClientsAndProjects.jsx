import CountUp from 'react-countup';
import React from "react";

const ClientsAndProjects = () => {
    const className = "text-xl font-semibold mb-1"
  return (
    <div className='bg-[#0C0833] text-white my-[100px]'>
      <div className='max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-y-12 justify-between text-center py-12'>
        <div>
          <p className={className}>Total Experience</p>
          <CountUp
            start={0}
            end={5}
            duration={4}
            separator=" "
            decimal=","
            suffix="+"
            className='text-4xl lg:text-6xl  font-bold'
          >
          </CountUp>
        </div>
        <div>
          <p className={className}>On Going Projects</p>
          <CountUp
            start={0}
            end={25}
            duration={4}
            separator=" "
            decimal=","
            suffix="+"
            className='text-4xl lg:text-6xl  font-bold'
          >
          </CountUp>
        </div>
        <div>
          <p className={className}>Complete Projects</p>
          <CountUp
            start={0}
            end={102}
            duration={4}
            separator=" "
            decimal=","
            suffix="+"
            className='text-4xl lg:text-6xl  font-bold'
          >
          </CountUp>
        </div>
        <div>
          <p className={className}>Happy Clients</p>
          <CountUp
            start={0}
            end={84}
            duration={4}
            separator=" "
            decimal=","
            suffix="+"
            className='text-4xl lg:text-6xl  font-bold'
          >
          </CountUp>
        </div>
      </div>
    </div>
  );
};

export default ClientsAndProjects;
