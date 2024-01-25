import { Outlet } from "react-router-dom";
import BG from "../../assets/images/campaign5.jpg";
import LOGO from "../../assets/images/logo.png";

const Auth = () => {
  return (
    <div className="w-full">
      <div className="relative w-1/2 max-lg:w-full">
        <Outlet />
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),url(${BG})`,
        }}
        className="max-lg:hidden bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white text-center py-12 px-8 fixed top-0 right-0 bottom-0 w-1/2"
      >
        <div className="flex flex-col items-center">
          <img src={LOGO} alt="" className="w-[15rem] h-[10rem] object-cover" />
          <div className="text-4xl font-DMSefif pb-2 opacity-90 uppercase w-[90%] leading-tight">
            Alliance Political Party Membership Registration Form
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
