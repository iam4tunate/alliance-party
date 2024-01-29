import CAMPAIGN from "../../assets/images/campaign1.jpg";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { newsFeeds } from "../../data";
import { Link } from "react-router-dom";

const NewsFeed = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div id="blog" className="bg-white">
      <div className="maxW padX py-20 max-sm:py-16">
        <div className="text-center flex flex-col items-center pb-12">
          <div className="font-DMSefif text-4xl max-sm:text-3xl  text-primary">
            News feed
          </div>
        </div>
        <div className="relative">
          <div
            ref={prevRef}
            className={`${
              isBegin && "hidden"
            } z-10 absolute top-1/3 left-0 -translate-x-5 max-lg:-translate-x-0 bg-white h-10 w-10 rounded-full flex items-center justify-center cursor-pointer shadow`}
          >
            <FaArrowLeft className="text-secondary" />
          </div>
          <div
            ref={nextRef}
            className={`${
              isEnd && "hidden"
            } z-10 absolute top-1/3 right-0 translate-x-5 max-lg:translate-x-0 bg-white h-10 w-10 rounded-full flex items-center justify-center cursor-pointer shadow`}
          >
            <FaArrowRight className="text-secondary" />
          </div>
          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
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
              {newsFeeds.map((news) => (
                <SwiperSlide key={news.id}>
                  <Link to={news.url} target="_blank" rel="noopener noreferrer">
                    <div className="border border-primary border-opacity-20">
                      <img src={news.img} alt={news.title} />
                      <div className="px-2 py-4">
                        <div className="font-Heebo500 text-xl">
                          {news.title}
                        </div>
                        {/* <div className="text-sm pt-1.5 pb-2">
                          14 February, 2024
                        </div>
                        <p className="text-base">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words.
                        </p>
                        <div className="font-Heebo500 text-base pt-5">
                          Read more
                        </div> */}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsFeed;
