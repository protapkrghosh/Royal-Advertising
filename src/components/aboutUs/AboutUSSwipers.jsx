
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { companiesLogos } from '../../data/data';
const AboutUSSwipers = () => {
    return (
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper max-w-[1265px] mx-auto"
      >
      {companiesLogos.map(
        ((companyLogo,index) => <SwiperSlide key={index}><img src={companyLogo} alt="" /></SwiperSlide>)
      )}
    </Swiper>
    );
};

export default AboutUSSwipers;