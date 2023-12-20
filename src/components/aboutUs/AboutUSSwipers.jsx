import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";
import { companiesLogos } from "../../data/data";

const AboutUSSwipers = () => {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: false,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Autoplay]}
      className="mySwiper lg:w-11/12 mx-auto px-3 md:px-0 mb-5 lg:pl-[100px] "
    >
      {companiesLogos.map((imge, index) => (
        <SwiperSlide key={index}>
          <div className="pt-[20px]">
            <img src={imge} alt="company images" className="w-28 h-[55px] md:h-[100px] flex items-center" loading="lazy" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AboutUSSwipers;
