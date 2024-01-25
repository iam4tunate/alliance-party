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
        <div className="w-[40%] max-lg:w-full text-white max-lg:padX">
          <div className="font-DMSefif text-7xl max-lg:text-6xl max-sm:text-5xl pb-2">
            Welcome to the{" "}
            <span className="text-secondary">Alliiance Party</span>.
          </div>
          <div className="font-DMSefif text-7xl max-lg:text-6xl max-sm:text-5xl pb-6">Become a part!</div>
          <p className="text-2xl max-sm:text-xl font-Heebo300">
            We are fighting for a better, fairer, and brighter future for every
            citizen.
          </p>
          <Link to="/auth/register">
            <button className="bg-secondary text-white px-10 py-4 mt-7 font-Heebo500 uppercase outline-none">
              Become a member
            </button>
          </Link>
        </div>
        <div className="w-[55%] max-lg:w-full">
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