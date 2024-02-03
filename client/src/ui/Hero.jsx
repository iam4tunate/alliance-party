import { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import NewsFeeds from "./NewsFeeds";

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setBegin] = useState(true);
  const [isEnd, setEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [articles, setArticles] = useState([]);

  return (
    <div className="relative bg-primary h-[35rem] max-lg:h-full max-lg:pb-16">
      <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-y-16 max-w-screen-2xl max-2xl:ml-auto 2xl:mx-auto 2xl:padX max-lg:px-0 lg:pl-10 max-lg:padX h-full">
        <div className="w-[45%] max-lg:pt-16 max-lg:w-full text-gray">
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
          {articles.length > 0 && (
            <div className="z-20 w-fit absolute bottom-8 max-lg:bottom-2 right-1/2 max-lg:right-4 max-lg:py-4 flex items-center gap-x-3 2xl:mr-4">
              <div
                ref={prevRef}
                className={`${
                  isBegin && "opacity-30"
                } opacity- border border-gray h-8 w-8 rounded-full flex items-center justify-center cursor-pointer shadow`}
              >
                <FaArrowLeft className="text-gray text-lg" />
              </div>
              <div
                ref={nextRef}
                className={`${
                  isEnd && "opacity-30"
                } opacity- border border-gray h-8 w-8 rounded-full flex items-center justify-center cursor-pointer shadow`}
              >
                <FaArrowRight className="text-gray text-lg" />
              </div>
            </div>
          )}
        </div>
        <div className="w-[50%] max-lg:w-full">
          <NewsFeeds
            prevRef={prevRef}
            nextRef={nextRef}
            setInit={setInit}
            setBegin={setBegin}
            setEnd={setEnd}
            articles={articles}
            setArticles={setArticles}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
