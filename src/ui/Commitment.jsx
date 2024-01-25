import { MISSIONS, VISIONS } from "../data";
import { IoFlag } from "react-icons/io5";

const Commitment = () => {
  return (
    <div className="pt-48 max-lg:pt-20 pb-20 max-sm:pt-16 max-sm:pb-16 maxW padX grid grid-cols-2 max-lg:grid-cols-1 gap-x-12 gap-y-8">
      <div className="col-start-1 col-end-2 space-y-3">
        <div className="bg-primary text-white col-start-2 col-end-3 max-lg:col-start-1 max-lg:col-end-2 py-6 px-4 max-sm:px-2 h-fit">
          <span className="font-DMSefif text-3xl">Mission</span>
          {MISSIONS.map((mission) => (
            <div
              key={mission.id}
              className="pt-6 before:w-2 before:h-2 before:rounded-full before:bg-white before:bg-opacity-80 before:inline-block before:mt-2 gap-x-3 grid grid-cols-[min-content_1fr]"
            >
              <div className="">
                <div className="text-lg font-Heebo500">{mission.title}</div>
                <p className="font-Heebo300 text-lg max-sm:text-base opacity-90 leading-normal">
                  {mission.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray py-6 px-4 max-sm:px-2">
          <span className="font-DMSefif text-primary text-3xl">Vision</span>
          {VISIONS.map((vision) => (
            <div
              key={vision.id}
              className="pt-6 before:w-2 before:h-2 before:rounded-full before:bg-primary before:inline-block before:mt-2 gap-x-3 grid grid-cols-[min-content_1fr]"
            >
              <div className="">
                <div className="text-lg font-Heebo500">{vision.title}</div>
                <p className="font-Heebo400 text-lg max-sm:text-base text-primary opacity- leading-normal">
                  {vision.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-lg:row-start-1 max-lg:row-end-2">
        {/* <span className="bg-gray flex items-center gap-x-2 rounded-md py-2 px-2 w-fit text-base font-Heebo500">
          <IoFlag className="text-secondary" />
          <span>Our Commitment</span>
        </span> */}
        <div className="py-5 px-4 max-sm:px-2">
          <span className="font-DMSefif text-primary text-3xl">About Us</span>
          <div className="pt-3 max-sm:text-lg leading-normal text-secondary">
            <p className="pb-2">
              <span className="font-Heebo500">The Kalesanwa Group</span> is a
              socio-economic and political strategy development organization,
              founded with a vision to emerge as a preeminent political pressure
              group, offering crucial support to candidates and political
              parties.
            </p>
            <p className="pb-2">
              Among our core objectives is the promotion of ancestral values
              such as uprightness, selflessness, humility, and service to
              humanity, along with the fundamental democratic principle of
              allowing people to choose their leaders. In line with our mission,
              our communications focus on socio-economic, political, and
              developmental issues.
            </p>
            <p>
              We uphold a standard of mutual respect, requiring all posts and
              comments to align with the group's values and refrain from insults
              or abuses in any form. New members are encouraged to register
              themselves in other to become a verified member.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Commitment;
