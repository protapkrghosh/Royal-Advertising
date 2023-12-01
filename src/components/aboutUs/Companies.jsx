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
  const companiesLogos = [
    "https://reflectivedesign.in/wp-content/uploads/2023/05/reflective-website-logo-6-150x150.png",
    "https://reflectivedesign.in/wp-content/uploads/2023/05/reflective-website-logo-7-150x150.png",
    "https://reflectivedesign.in/wp-content/uploads/2023/05/reflective-website-logo-8-150x150.png",
    "https://reflectivedesign.in/wp-content/uploads/2023/05/reflective-website-logo-9-150x150.png",
    "https://reflectivedesign.in/wp-content/uploads/2023/05/reflective-website-logo-10-150x150.png",
    "https://reflectivedesign.in/wp-content/uploads/2023/05/reflective-website-logo-1-150x150.png",
    "https://reflectivedesign.in/wp-content/uploads/2023/05/reflective-website-logo-2-150x150.png",
    "https://reflectivedesign.in/wp-content/uploads/2023/05/reflective-website-logo-3-150x150.png",
    "https://reflectivedesign.in/wp-content/uploads/2023/05/reflective-website-logo-4-150x150.png",
    "https://reflectivedesign.in/wp-content/uploads/2023/05/reflective-website-logo-5-150x150.png",
  ];

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
