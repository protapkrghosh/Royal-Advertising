import { useState } from 'react';
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { testimonialInfo } from '../../data/data'
import { FaQuoteLeft } from "react-icons/fa";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Testimonial = () => {
  const [swiper, setSwiper] = useState(null);

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  }

  return (
    <Element name="Testimonial" className="element">
      <div className='w-[96%] md:w-[70%] mx-auto relative'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: '.custom-swiper-button-prev',
            nextEl: '.custom-swiper-button-next',
          }}
          modules={[Navigation, Autoplay]} 
          className="mySwiper py-5"
          onSwiper={setSwiper}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {testimonialInfo.map((testimonial, index) => {
            return (
              <SwiperSlide key={index}>
                {/* Slide content */}
                <div className='flex flex-col justify-center items-center'>
                  <img src={testimonial?.img} alt="Person Image" className='w-24 h-24 rounded-full ' />
                  <p className='w-[90%] md:w-[70%] mx-auto text-justify md:text-center tracking-tighter md:tracking-normal text-[20px] my-4 md:my-10'>{testimonial?.description}</p>
                  <FaQuoteLeft className='text-4xl text-[#8F6DFF]' />
                  <h3 className='text-2xl font-bold mt-3 md:mt-7 md:mb-2'>{testimonial?.name}</h3>
                  <p>{testimonial?.position}</p>
                </div>

                {/* Icons */}
                <div className='flex md:flex-none justify-center md:justify-normal space-x-3 md:-space-x-6 lg:-space-x-5 mt-3 md:mt-0'>
                  <div
                    className="custom-swiper-button-prev md:absolute md:top-[50%] cursor-pointer bg-slate-100 hover:bg-slate-200 duration-200 p-2 md:p-4 rounded-full"
                    onClick={handlePrevClick}
                  >
                    <FaLongArrowAltLeft className='text-[20px] md:text-base'/>
                  </div>
                  <div
                    className="custom-swiper-button-next md:absolute md:top-[50%] left-[87%] md:left-[95%] cursor-pointer bg-slate-100 hover:bg-slate-200 duration-200 p-2 md:p-4 rounded-full"
                    onClick={handleNextClick}
                  >
                    <FaLongArrowAltRight className='text-[20px] md:text-base'/>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Element>
  );
};

export default Testimonial;
