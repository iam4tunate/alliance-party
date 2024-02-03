import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { COMMITTEES } from "../data";
import "swiper/css";
import "swiper/css/navigation";
import PLACEHOLDER from "../assets/images/user_plachoder.jpg";

const Committee = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div id="committee" className="bg-white">
      <div className="maxW padX py-20 max-sm:py-16">
        <div className="text-center flex flex-col items-center pb-16">
          <div className="font-DMSefif text-4xl max-sm:text-3xl  text-primary">
            Kálésanwá National Committee
          </div>
        </div>
        <div className="relative">
          <div
            ref={prevRef}
            className={`${
              isBegin && "hidden"
            } opacity-80 z-10 absolute top-1/2 left-0 -translate-x-5 max-lg:-translate-x-0 bg-gray h-10 w-10 rounded-full flex items-center justify-center cursor-pointer shadow`}
          >
            <FaArrowLeft className="text-secondary opacity-80" />
          </div>
          <div
            ref={nextRef}
            className={`${
              isEnd && "hidden"
            } opacity-80 z-10 absolute top-1/2 right-0 translate-x-5 max-lg:translate-x-0 bg-gray h-10 w-10 rounded-full flex items-center justify-center cursor-pointer shadow`}
          >
            <FaArrowRight className="text-secondary opacity-80" />
          </div>
          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="mySwiper"
              onSlideChange={(swiper) => {
                setIsBegin(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              modules={[Navigation]}
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
                  <div className="bg-gray">
                    <img src={PLACEHOLDER} alt="atiku" className="" />
                    <div className="flex flex-col text-center py-2">
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
    </div>
  );
};
export default Committee;
