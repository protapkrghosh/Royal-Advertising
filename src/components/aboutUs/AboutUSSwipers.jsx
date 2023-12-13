import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./swiper.css"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from 'swiper/modules';
import { companiesLogos } from '../../data/data';

const AboutUSSwipers = () => {
  return (
   <Swiper
  slidesPerView={4}
  spaceBetween={30}
  freeMode={true}
  pagination={{
    clickable: false,
  }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  modules={[FreeMode, Autoplay]} // Use Pagination instead of pagination
  className="mySwiper md:w-8/12 mx-auto pb-12"
>
  {companiesLogos.map((imge, index) => (
    <SwiperSlide key={index}>
      <div className='mt-64 '>
      <img src={imge} alt="" />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
  );
};

export default AboutUSSwipers;
