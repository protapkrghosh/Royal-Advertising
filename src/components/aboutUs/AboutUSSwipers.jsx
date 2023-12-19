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
      modules={[FreeMode, Autoplay]}
      className="mySwiper lg:w-8/12 mx-auto  lg:pl-[100px] "
    >
      {companiesLogos.map((imge, index) => (
        <SwiperSlide key={index}>
          <div className="pt-[20px]    ">
            <img src={imge} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AboutUSSwipers;
