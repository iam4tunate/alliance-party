import { PiSquaresFour, PiUsers } from "react-icons/pi";
// import LOGO from "../../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen fixed w-[270px] px-3 py-6 space-y-1.5 font-poppinsMedium bg-[#212b36] text-gray flex flex-col items-start">
      <div className="text-xl font-poppinsSemibold font-DMSefif capitalize">kálésanwá admin</div>
      <div className="pt-5 text-base">
      <div
        onClick={() => navigate("/admin/overview")}
        className="flex items-center gap-x-3 px-3 py-3 cursor-pointer"
      >
        <span>
          <PiSquaresFour className="text-xl" />
        </span>
        <span>Overview</span>
      </div>
      <div
        onClick={() => navigate("/admin/members")}
        className="flex items-center gap-x-3 px-3 py-3"
      >
        <span>
          <PiUsers className="text-xl" />
        </span>
        <span className="">Members</span>
      </div>
      </div>
    </div>
  );
};
export default Sidebar;
