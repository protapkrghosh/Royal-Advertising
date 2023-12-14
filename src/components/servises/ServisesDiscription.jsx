import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaAlipay } from 'react-icons/fa';
import { ourservises } from "../../data/data";
import useAOSInit from '../../hooks/useAosInit';

const ServisesDiscription = () => {
useAOSInit()
const imge = "https://images.wallpaperscraft.com/image/single/lines_wavy_white_141124_1350x2400.jpg"

const imgeStyle = {
    backgroundImage: `url(${imge})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
};
  return (
    <div style={imgeStyle} className="py-14">
             <h1 data-aos="fade-down" data-aos-duration="3000" className="text-primary text-center  my-10">Services We Provide</h1>
            <VerticalTimeline>
                {ourservises.map((ourservis, index) => (
                    <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: '#070234 ,bac' }}
                    contentArrowStyle={{ borderRight: '7px solid #070234' }}
                    iconStyle={{ background: '#070234', color: '#fff', border: '2px solid #fff' }}
                    icon={<FaAlipay />}
                    lineColor='#070234'
                >
                 <div className=' text-center'>
                 <img src={ourservis.img} className='mx-auto p-4' alt="" />
                    <h3 className="text-secendary">{ourservis.title}</h3>
                    <p className='text-third'>{ourservis.discription}</p>
                 </div>
              
                </VerticalTimelineElement>
                
                ))}
            </VerticalTimeline>
        </div>
  );
};

export default ServisesDiscription;
