import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { newsFeeds } from "../data";
import "swiper/css";

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="bg-primary max-lg:h-full max-lg:pb-10">
      <div className="flex max-lg:flex-col max-lg:gap-y-16 items-center justify-between max-w-screen-2xl max-2xl:ml-auto 2xl:mx-auto 2xl:padX max-lg:px-0 lg:pl-10">
        <div className="w-[45%] max-lg:pt-16 max-lg:w-full text-gray max-lg:padX">
          <div className="font-DMSefif text-7xl max-lg:text-6xl max-sm:text-5xl pb-5 leading-[1.1] max-sm:leading-[1.08]">
            Welcome to <span className="text-secondary">kálésanwá</span> Group.
          </div>
          <p className="text-xl max-sm:text-lg font-Heebo300">
            A dynamic socio-political strategy development entity, a leading
            force that offers crucial support to candidates and political
            parties for significant advancement.
          </p>
          <Link to="/auth/register">
            <button className="bg-secondary text-white px-6 py-4 mt-6 text-lg font-Heebo500 uppercase outline-none">
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
            {newsFeeds.map((feed) => (
              <SwiperSlide key={feed.id} className="">
                <Link to={feed.url} target="_blank" rel="noopener noreferrer">
                  <div className="relative h-[40rem] max-lg:h-full max-sm:h-[25rem] max-lg:pb-10 max-sm:pb-6">
                    <img
                      src={feed.img}
                      alt="party activity"
                      className="h-[100%] w-full object-cover"
                    />
                    <div className="absolute right-0 left-0 bottom-0 bg-dark bg-opacity-90 px-3 py-6 max-sm:py-3 text-white space-y-5">
                      <div className="bg-white bg-opacity-80 text-primary w-fit px-4 py-1 text-base max-sm:text-sm mb-4">
                        News Feed
                      </div>
                      <span className=" text-4xl max-md:text-2xl font-Heebo300 max-md:font-Heebo400 tracking-normal">
                        {feed.title}
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Hero;
