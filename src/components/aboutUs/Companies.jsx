import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const Companies = () => {


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
        (companyLogo => <SwiperSlide><img src={companyLogo} alt="" /></SwiperSlide>)
      )}
    </Swiper>
  );
};

export default Companies;
