import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { HERO_IMAGES } from "../data";
import "swiper/css";

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="bg-primary h-[40rem] max-lg:h-full">
      <div className=" pt-16 pb-16 max-lg:pb-10 flex max-lg:flex-col max-lg:gap-y-12 items-center justify-between max-w-screen-2xl max-2xl:ml-auto 2xl:mx-auto 2xl:padX max-lg:px-0 lg:pl-10">
        <div className="w-[45%] max-lg:w-full text-gray max-lg:padX">
          <div className="font-DMSefif text-7xl max-lg:text-6xl max-sm:text-5xl pb-5 leading-[1.1]">
            Welcome to <span className="text-secondary">kálésanwá</span> Group.
          </div>
          <p className="text-xl max-sm:text-lg font-Heebo300">
            A dynamic socio-political strategy development entity, a leading
            force that offers crucial support to candidates and political
            parties for significant advancement.
          </p>
          <Link to="/auth/register">
            <button className="bg-secondary text-white px-10 py-4 mt-7 font-Heebo500 uppercase outline-none">
              Become a member
            </button>
          </Link>
        </div>
        <div className="w-[50%] max-lg:w-full">
          <Swiper
            slidesPerView={1}
            className="mySwiper"
            onSlideChange={(swiper) => {
              setIsBegin(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            onInit={() => setInit(true)}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {HERO_IMAGES.map((img) => (
              <SwiperSlide key={img.id} className="">
                <img
                  src={img.img}
                  alt="party activity"
                  className="h-[40rem] max-lg:h-[25rem] max-sm:h-[15rem] w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Hero;
