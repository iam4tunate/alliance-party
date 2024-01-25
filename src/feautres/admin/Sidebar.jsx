import { PiSquaresFour, PiUsers } from "react-icons/pi";
import LOGO from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen fixed w-[270px] px-3 py-6 space-y-1.5 font-poppinsMedium bg-white text-primary">
      {/* <div className="text-xl font-poppinsSemibold flex items-center font-DMSefif">
        <img src={LOGO} alt="" className="w-20 h-20 object-cover" />
        <span>APL ADMIN</span>
      </div> */}
      <divz
        onClick={() => navigate("/admin/overview")}
        className="flex items-center gap-x-3 px-3 py-3 hover:bg-gray-200 rounded-md cursor-pointer transition-all duration-100 ease-in-out delay-75"
      >
        <span>
          <PiSquaresFour className="text-2xl" />
        </span>
        <span>Overview</span>
      </divz>
      <div
        onClick={() => navigate("/admin/members")}
        className="flex items-center gap-x-3 px-3 py-3 hover:bg-gray-200 rounded-md cursor-pointer transition-all duration-150 ease-in-out delay-75"
      >
        <span>
          <PiUsers className="text-2xl" />
        </span>
        <span className="">Members</span>
      </div>
    </div>
  );
};
export default Sidebar;
