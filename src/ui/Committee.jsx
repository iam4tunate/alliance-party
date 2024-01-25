import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { COMMITTEES } from "../data";
import "swiper/css";
import "swiper/css/navigation";

const Committee = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="maxW padX py-20 max-sm:py-16">
      <div className="text-center flex flex-col items-center pb-12">
        <div className="font-DMSefif text-5xl max-md:text-4xl  text-primary">
          AP National Working Committee
        </div>
      </div>
      <div className="relative">
        <div
          ref={prevRef}
          className={`${
            isBegin && "hidden"
          } z-10 absolute top-1/2 left-0 -translate-x-5 bg-white h-12 w-12 rounded-full flex items-center justify-center cursor-pointer shadow-black shadow-sm max-sm:hidden`}
        >
          <FaArrowLeft className="text-secondary" />
        </div>
        <div
          ref={nextRef}
          className={`${
            isEnd && "hidden"
          } z-10 absolute top-1/2 right-0 translate-x-5 bg-white h-12 w-12 rounded-full flex items-center justify-center cursor-pointer shadow-black shadow-sm max-sm:hidden`}
        >
          <FaArrowRight className="text-secondary" />
        </div>
        <div className="">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            className="mySwiper"
            onSlideChange={(swiper) => {
              setIsBegin(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            onInit={() => setInit(true)}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {COMMITTEES.map((comm) => (
              <SwiperSlide key={comm.id}>
                <div className="">
                  <img src={comm.img} alt="atiku" className="" />
                  <div className="flex flex-col text-center pt-2">
                    <span className="font-Heebo500">{comm.name}</span>
                    <span className="text-sm">{comm.position}</span>
                  </div>
                  {/* <div className="flex items-center justify-center gap-x-2 mt-2">
                    <img src={FACEBOOK} alt="facebook" className="w-8" />
                    <img src={TWITTERX} alt="twitter" className="w-8" />
                    <img src={YOUTUBE} alt="youtue" className="w-8" />
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Committee;
