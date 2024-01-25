import { FaPlay } from "react-icons/fa6";
import CAMPAIGN from "../assets/images/campaign5.jpg";

const Statistics = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${CAMPAIGN})` }}
        className="bg-cover bg-center bg-no-repeat h-[25rem] w-full flex items-center justify-center"
      >
        <div className="bg-primary bg-opacity-90 rounded-full w-[4.8rem] h-[5rem] flex items-center justify-center">
          <FaPlay className="text-white text-[2.7rem]" />
        </div>
      </div>
      <div className="bg-primary">
        <div className="py-12 padX maxW flex flex-wrap items-center justify-between max-sm:justify-center gap-x-12 gap-y-12 text-gray">
          <div className="text-center">
            <div className="text-5xl max-md:text-4xl font-Heebo600 pb-1 space-x-0.5">
              10M<span className="text-4xl">+</span>
            </div>
            <span className="text-base">Registered Members</span>
          </div>
          <div className="text-center">
            <div className="text-5xl max-md:text-4xl font-Heebo600 pb-1">36</div>
            <span className="text-base">States Covered</span>
          </div>
          <div className="text-center">
            <div className="text-5xl max-md:text-4xl font-Heebo600 pb-1">252</div>
            <span className="text-base">Successful Campaign</span>
          </div>
          <div className="text-center">
            <div className="text-5xl max-md:text-4xl font-Heebo600 pb-1 space-x-0.5">
              100<span className="text-4xl">+</span>
            </div>
            <span className="text-base">Offices Held</span>
          </div>
          <div className="text-center">
            <div className="text-5xl max-md:text-4xl font-Heebo600 pb-1 space-x-0.5">
              <span>80</span>
              <span className="text-3xl">%</span>
            </div>
            <span className="text-base">Success Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
