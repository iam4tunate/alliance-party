import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoFlag } from "react-icons/io5";
import { PARTNERS } from "../data";
import "swiper/css";

const Partners = () => {
  return (
    <div className="maxW padX py-20 max-sm:py-16">
      <div className="text-center flex flex-col items-center pb-12">
        <div className="font-DMSefif text-5xl max-md:text-4xl  text-primary">
          Our Partners
        </div>
      </div>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          470: {
            slidesPerView: 2.3,
          },
          600: {
            slidesPerView: 3,
          },
          850: {
            slidesPerView: 4,
          },
          1060: {
            slidesPerView: 5,
          },
          1310: {
            slidesPerView: 6,
          },
        }}
      >
        {PARTNERS.map((partner) => (
          <SwiperSlide key={partner.id}>
            <img
              src={partner.img}
              alt={partner.name}
              className="w-[10rem] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Partners;
