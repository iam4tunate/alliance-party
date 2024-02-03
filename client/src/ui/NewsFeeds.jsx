import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import { Link } from "react-router-dom";

const NewsFeeds = ({
  prevRef,
  nextRef,
  setBegin,
  setEnd,
  setInit,
  articles,
  setArticles,
}) => {
  const [isLoading, setLoading] = useState(false);
  const server = "https://kalesanwa-server.vercel.app/";
  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        const res = await axios.get(server);
        setArticles(res.data);
        setLoading(false);
      } catch (error) {
        //? *****************************Find solution to this error
        console.log(error.message);
        // setLoading(false);
      }
    };
    getArticles();
  }, [server]);

  function extractSRC(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    // Extract the src attribute value
    const srcValue = doc.querySelector("img").getAttribute("src");
    return srcValue;
  }

  function formatDate(date) {
    let formatted = { day: "numeric", month: "long", year: "numeric" };
    let articleDate = new Date(date).toLocaleDateString("en-NG", formatted);
    return articleDate;
  }

  if (isLoading) return <div className=" loader mx-auto"></div>;

  return (
    <div className="relative">
      {articles.length > 0 && (
        <div className="absolute top-0 left-0 bg-dark z-20 py-1.5 px-3.5 bg-opacity-70 w-fit">
          <span className="font-DMSefif text-xl max-md:text-lg text-gray uppercase">
            News feeds
          </span>
        </div>
      )}
      <Swiper
        slidesPerView={1}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setBegin(swiper.isBeginning);
          setEnd(swiper.isEnd);
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        onInit={() => setInit(true)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {articles.map((feed) => (
          <SwiperSlide key={feed.item.title} className="w-full">
            <Link to={feed.item.link} target="_blank" rel="noopener noreferrer">
              <div className="relative h-[35rem] max-lg:h-[35rem] max-md:h-[30rem] max-sm:h-[25rem]">
                <img
                  src={extractSRC(feed.item.content)}
                  alt="party activity"
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-0 left-0 bottom-0 bg-dark bg-opacity-90 px-3 py-6 max-sm:py-4 text-gray opacity-90 space-y-5">
                  <div className="text-sm uppercase mb-4">
                    {formatDate(feed.item.pubDate)}
                  </div>
                  <span className=" text-3xl max-md:text-2xl max-sm:text-xl font-Heebo300 max-md:font-Heebo400 tracking-normal">
                    {feed.item.title}
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default NewsFeeds;
