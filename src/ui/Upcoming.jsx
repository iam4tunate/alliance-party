import { IoLocationSharp, IoTime } from "react-icons/io5";

const Upcoming = () => {
  return (
    <div id="events" className="bg-gray">
      <div className="maxW padX py-20 max-sm:py-16">
        <div className="text-center flex flex-col items-center pb-10">
          <div className="font-DMSefif text-[40px] max-sm:text-3xl text-primary">
            Upcoming Activities & Events
          </div>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8">
          <div className="border border-primary border-opacity-50 grid grid-cols-[min-content_1fr] gap-x-4 py-6 px-4 max-sm:px-2">
            <div className="border border-primary border-opacity-50 flex flex-col items-center justify-center gap-y-2 py-3 px-5">
              <span className="font-DMSefif font-semibold text-3xl">01</span>
              <span className="text-base">Feburary</span>
            </div>
            <div className="space-y-2">
              <span className="bg-primary px-2 py-0.5 text-xs lg:text-sm text-white">
                Election
              </span>
              <div className="text-2xl max-sm:text-xl">
                Gubernatorial Election
              </div>
              <div className="text-base flex items-center gap-x-0.5">
                <IoLocationSharp />
                <span>Nigeria</span>
              </div>
            </div>
          </div>
          <div className="border border-primary border-opacity-50 grid grid-cols-[min-content_1fr] gap-x-4 py-6 px-4 max-sm:px-2">
            <div className="border border-primary border-opacity-50 flex flex-col items-center justify-center gap-y-2 py-3 px-5">
              <span className="font-DMSefif font-semibold text-3xl">29</span>
              <span className="text-base">Feburary</span>
            </div>
            <div className="space-y-2">
              <span className="bg-primary px-2 py-0.5 text-xs lg:text-sm text-white">
                Convention
              </span>
              <div className="text-2xl max-sm:text-xl">National Convention</div>
              <div className="text-base flex items-center gap-x-0.5">
                <IoLocationSharp />
                <span>Ondo state</span>
              </div>
            </div>
          </div>
          <div className="border border-primary border-opacity-50 grid grid-cols-[min-content_1fr] gap-x-4 py-6 px-4 max-sm:px-2">
            <div className="border border-primary border-opacity-50 flex flex-col items-center justify-center gap-y-2 py-3 px-5">
              <span className="font-DMSefif font-semibold text-3xl">13</span>
              <span className="text-base">March</span>
            </div>
            <div className="space-y-2">
              <span className="bg-primary px-2 py-0.5 text-xs lg:text-sm text-white">
                Celebration
              </span>
              <div className="text-2xl max-sm:text-xl">
                Swearing-in of elected candidates
              </div>
              <div className="text-base flex items-center gap-x-0.5">
                <IoLocationSharp />
                <span>Nigeria</span>
              </div>
            </div>
          </div>
          <div className="border border-primary border-opacity-50 grid grid-cols-[min-content_1fr] gap-x-4 py-6 px-4 max-sm:px-2">
            <div className="border border-primary border-opacity-50 flex flex-col items-center justify-center gap-y-2 py-3 px-5">
              <span className="font-DMSefif font-semibold text-3xl">04</span>
              <span className="text-base">April</span>
            </div>
            <div className="space-y-2">
              <span className="bg-primary px-2 py-0.5 text-xs lg:text-sm text-white">
                Meeting
              </span>
              <div className="text-2xl max-sm:text-xl">Executives Meeting
              </div>
              <div className="text-base flex items-center gap-x-0.5">
                <IoLocationSharp />
                <span>Ondo state</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Upcoming;
