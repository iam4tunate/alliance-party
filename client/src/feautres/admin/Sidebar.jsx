import { FaUsers } from "react-icons/fa";
import AsideLink from "./AsideLink";
import { PiSquaresFourBold } from "react-icons/pi";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineReviews, MdOutlineLocalOffer } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <aside
      className={`${
        sidebar ? "translate-x-[0px]" : ""
      } w-[300px] lg:w-[250px] xl:w-[300px] border-r border-gray overflow-y-scroll scrollbar-hide fixed left-0 top-0 h-full bg-white z-50 -translate-x-[300px] lg:translate-x-[0]`}
    >
      <div className="">
        <div className="px-8 border-b border-gray h-[78px] flex flex-col items-start justify-center">
          <div className="font-DMSefif text-2xl font-black">kálésanwá</div>
          <span className="text-sm font-DMSefif italic pt-0.5">
            j&apos; òwûrò lo
          </span>
        </div>
        <div className="px-4 py-5">
          <div className="space-y-">
            <AsideLink
              name="Overview"
              url="overview"
              icon={<PiSquaresFourBold />}
              setSidebar={setSidebar}
            />
            <AsideLink
              name="Members"
              url="members"
              icon={<FaUsers />}
              setSidebar={setSidebar}
            />
            <AsideLink
              name="Auctions"
              url="auctions"
              icon={<RiAuctionLine />}
              setSidebar={setSidebar}
            />
            <AsideLink
              name="Offers"
              url="offers"
              icon={<MdOutlineLocalOffer />}
              setSidebar={setSidebar}
            />
            <AsideLink
              name="Reviews"
              url="reviews"
              icon={<MdOutlineReviews />}
              setSidebar={setSidebar}
            />
            <AsideLink
              name="Orders"
              url="orders"
              icon={<AiOutlineFileDone />}
              setSidebar={setSidebar}
            />
            <AsideLink
              name="Profile"
              url="profile"
              icon={<BiUserCircle />}
              setSidebar={setSidebar}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
