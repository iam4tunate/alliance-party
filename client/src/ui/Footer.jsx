import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp, IoLogoWhatsapp, IoMail } from "react-icons/io5";
import { RiFacebookCircleLine, RiTwitterLine } from "react-icons/ri";
import LOGO from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary h-[15rem] max-md:h-[20rem] max-sm:h-[25rem] flex flex-col justify-center fixed bottom-0 left-0 right-0">
      <div className="w-full maxW padX grid grid-cols-[1fr_4fr] max-sm:grid-cols-1 items-center gap-x-12 gap-y-12">
        <div className="space-y-2">
          <div className="text-3xl font-DMSefif text-white">kálésanwá.</div>
          <div className="flex items-center text-gray opacity-80 text-3xl gap-x-4">
            <RiFacebookCircleLine />
            <RiTwitterLine />
            <IoLogoWhatsapp />
          </div>
        </div>
        <div className="flex max-lg:flex-wrap gap-x-10 gap-y-6 items-center justify-between text-gray max-md:text-lg max-sm:text-base">
          <div className="flex items-center gap-x-2">
            <IoLocationSharp className="text-2xl text-secondary max-md:text-2xl" />
            <span>Akure Ondo, Nigeria</span>
          </div>
          <div className="flex items-center gap-x-2">
            <FaPhone className="text-2xl text-secondary max-md:text-2xl" />
            <span className="">+123 0000000000</span>
          </div>
          <div className="flex items-center gap-x-2">
            <IoMail className="text-2xl text-secondary max-md:text-2xl" />
            <span className="">kalesanwa@mail.org</span>
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
      <hr className="text-gray opacity-20 my-10" />
      <div className="flex flex-col gap-y-1 items-center justify-center text-gray text-center opacity-80 text-sm py-6 padX absolute bottom-0 left-0 right-0 font-Heebo400">
        <span className="">2024 © kálésanwá Group - Ondo, Nigeria.</span>
        <span>Designed by I-CUBE WA LIMITED. info@cubegroupng.com</span>
      </div>
    </footer>
  );
};
export default Footer;
