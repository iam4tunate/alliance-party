import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp, IoLogoWhatsapp, IoMail } from "react-icons/io5";
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { RiFacebookCircleLine, RiTwitterLine } from "react-icons/ri";

import LOGO from "../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary pt-16">
      <div className="maxW padX grid grid-cols-[1fr_4fr] max-sm:grid-cols-1 items-center gap-x-12 gap-y-12">
        <div className="space-y-2">
          <img src={LOGO} alt="" className="w-[10rem] h-[6rem] object-cover" />
          <div className="flex items-center text-gray text-4xl max-md:text-3xl gap-x-4 pl-2">
            <RiFacebookCircleLine />
            <RiTwitterLine />
            <IoLogoWhatsapp />
          </div>
        </div>
        <div className="flex max-lg:flex-wrap gap-x-10 gap-y-6 items-center justify-between text-gray max-md:text-lg max-sm:text-base">
          <div className="flex items-center gap-x-4 max-md:gap-x-2">
            <IoLocationSharp className="text-3xl text-secondary max-md:text-2xl" />
            <span>
            22 Obafemi Awolowo Rd
              <br /> Lagos, Nigeria
            </span>
          </div>
          <div className="flex items-center gap-x-4 max-md:gap-x-2">
            <FaPhone className="text-3xl text-secondary max-md:text-2xl" />
            <div className="flex flex-col">
              <span className="">+123 9608224266</span>
              <span className="">+123 9608224266</span>
            </div>
          </div>
          <div className="flex items-center gap-x-4 max-md:gap-x-2">
            <IoMail className="text-3xl text-secondary max-md:text-2xl" />
            <div className="flex flex-col">
              <span className="">ap@gmail.com</span>
              <span className="">ap@yahoomail.ng</span>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center text-gray text-4xl gap-x-4">
          <RiFacebookCircleLine />
          <RiTwitterLine />
          <IoLogoWhatsapp />
        </div> */}
        {/* <div className="text-gray flex items-start gap-x-28">
          <div className="flex flex-col text-base gap-y-2">
            <span className="font-Heebo500">Open Hours</span>
            <span className="opacity-90">Mon - Sat: 8am - 5pm</span>
            <span className="opacity-90">Sunday: Closed</span>
          </div>
          <div className="flex flex-col text-base gap-y-3">
            <span className="font-Heebo500">Useful Links</span>
            <span className="opacity-90 font-Heebo300 underline">Vision & Mission</span>
            <span className="opacity-90 font-Heebo300 underline">Our Committee</span>
            <span className="opacity-90 font-Heebo300 underline">Upcoming Events</span>
            <span className="opacity-90 font-Heebo300 underline">Become a member</span>
          </div>
        </div> */}
      </div>
      <hr className="text-gray opacity-50 mt-10" />
      <div className="flex items-center justify-center text-sm py-6 padX">
        <span className="text-gray text-center">
          2024 © AP Political Party - Nigeria. Designed by CubeHub (123456789)
        </span>
      </div>
    </footer>
  );
};
export default Footer;
