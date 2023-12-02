import { useState } from 'react';
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
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
      <div className='w-[95%] md:w-[70%] mx-auto relative'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: '.custom-swiper-button-prev',
            nextEl: '.custom-swiper-button-next',
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper py-5"
          onSwiper={setSwiper}
        >
          {testimonialInfo.map((testimonial, index) => {
            return (
              <SwiperSlide key={index}>
                {/* Slide content */}
                <div className='flex flex-col justify-center items-center'>
                  <img src={testimonial?.img} alt="Person Image" className='w-24 rounded-full' />
                  <p className='w-[70%] mx-auto text-center text-[20px] my-10'>{testimonial?.description}</p>
                  <FaQuoteLeft className='text-4xl text-[#8F6DFF]' />
                  <h3 className='text-2xl font-bold mt-7 mb-2'>{testimonial?.name}</h3>
                  <p>{testimonial?.position}</p>
                </div>

                {/* Icons */}
                <div
                  className="custom-swiper-button-prev absolute top-[50%] cursor-pointer bg-slate-100 p-4 rounded-full"
                  onClick={handlePrevClick}
                >
                  <FaLongArrowAltLeft />
                </div>
                <div
                  className="custom-swiper-button-next absolute top-[50%] left-[87%] md:left-[95%] cursor-pointer bg-slate-100 p-4 rounded-full"
                  onClick={handleNextClick}
                >
                  <FaLongArrowAltRight />
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