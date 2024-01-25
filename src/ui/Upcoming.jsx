import { IoLocationSharp, IoTime } from "react-icons/io5";

const Upcoming = () => {
  return (
    <div className="bg-gray">
      <div className="maxW padX py-16">
        <div className="text-center flex flex-col items-center pb-10">
          <div className="font-DMSefif text-5xl max-md:text-4xl  text-primary">
            Upcoming Activities & Events
          </div>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8">
          <div className="border border-primary border-opacity-50 grid grid-cols-[min-content_1fr] gap-x-6 py-6 px-4 max-sm:px-2">
            <div className="border border-primary border-opacity-50 flex flex-col items-center justify-center gap-y-2 py-3 px-5">
              <span className="font-DMSefif font-semibold text-3xl">01</span>
              <span className="text-base">Feburary</span>
            </div>
            <div className="space-y-3">
              <span className="bg-primary px-2 py-0.5 text-sm text-white">
                Election
              </span>
              <div className="text-2xl max-sm:text-xl">
                Gubernetarial Election
              </div>
              <div className="flex max-sm:flex-col max-sm:items-start max-sm:gap-y-2 items-center gap-x-12 text-base">
                <div className="flex items-center gap-x-1">
                  <IoLocationSharp />
                  <span>Lagos state</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <IoTime />
                  <span>8:00 am</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-primary border-opacity-50 grid grid-cols-[min-content_1fr] gap-x-6 py-6 px-4 max-sm:px-2">
            <div className="border border-primary border-opacity-50 flex flex-col items-center justify-center gap-y-2 py-3 px-5">
              <span className="font-DMSefif font-semibold text-3xl">25</span>
              <span className="text-base">Feburary</span>
            </div>
            <div className="space-y-3">
              <span className="bg-primary px-2 py-0.5 text-sm text-white">
                Election
              </span>
              <div className="text-2xl max-sm:text-xl">Municipal Election</div>
              <div className="flex items-center max-sm:flex-col max-sm:items-start max-sm:gap-y-2 gap-x-12 text-base">
                <div className="flex items-center gap-x-1">
                  <IoLocationSharp />
                  <span>Ibeju-Lekki</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <IoTime />
                  <span>8:00 am</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-primary border-opacity-50 grid grid-cols-[min-content_1fr] gap-x-6 py-6 px-4 max-sm:px-2">
            <div className="border border-primary border-opacity-50 flex flex-col items-center justify-center gap-y-2 py-3 px-4">
              <span className="font-DMSefif font-semibold text-3xl">03</span>
              <span className="text-base">March</span>
            </div>
            <div className="space-y-2">
              <span className="bg-primary px-2 py-0.5 text-sm text-white">
                Celebraion
              </span>
              <div className="text-2xl max-sm:text-xl">
                Swearing-in of elected candidates
              </div>
              <div className="flex items-center max-sm:flex-col max-sm:items-start max-sm:gap-y-2 gap-x-12 text-base">
                <div className="flex items-center gap-x-1">
                  <IoLocationSharp />
                  <span>Nigeria</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <IoTime />
                  <span>8:00 am</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-primary border-opacity-50 grid grid-cols-[min-content_1fr] gap-x-6 py-6 px-4 max-sm:px-2">
            <div className="border border-primary border-opacity-50 flex flex-col items-center justify-center gap-y-2 py-3 px-4">
              <span className="font-DMSefif font-semibold text-3xl">08</span>
              <span className="text-base">Feburary</span>
            </div>
            <div className="space-y-2">
              <span className="bg-primary px-2 py-0.5 text-sm text-white">
                Convention
              </span>
              <div className="text-2xl max-sm:text-xl">National Convention</div>
              <div className="flex items-center max-sm:flex-col max-sm:items-start max-sm:gap-y-2 gap-x-12 text-base">
                <div className="flex items-center gap-x-1">
                  <IoLocationSharp />
                  <span>Nigeria</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <IoTime />
                  <span>8:00 am</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Upcoming;
