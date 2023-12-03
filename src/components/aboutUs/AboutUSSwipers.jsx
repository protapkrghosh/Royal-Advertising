
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
import { companiesLogos } from '../../data/data';
const AboutUSSwipers = () => {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          // When window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
          // When window width is >= 1200px
          1100: {
            slidesPerView: 5,
          },
        }}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        
        className="mySwiper lg:max-w-[1265px] mx-auto mt-44 "
      >
      <div  className=''>
      {companiesLogos.map(
        ((companyLogo,index) => <SwiperSlide  key={index}><img src={companyLogo} alt="" /></SwiperSlide>)
      )}
      </div>
    </Swiper>
    );
};

export default AboutUSSwipers;