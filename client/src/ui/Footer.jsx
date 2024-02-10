import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp, IoLogoWhatsapp, IoMail } from "react-icons/io5";
import { RiFacebookCircleLine, RiTwitterLine } from "react-icons/ri";
import LOGO from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary h-[17rem] max-lg:h-[20rem] max-md:h-[22rem] max-sm:h-[33rem] flex flex-col gap-y-12 justify-between pt-12 fixed bottom-0 left-0 right-0">
      <div className="w-full maxW padX grid grid-cols-[min-content_1fr] max-sm:grid-cols-1 gap-x-12 gap-y-12">
        <div className="space-y-3.5">
          <div className="flex flex-col">
            <div className="text-3xl font-DMSefif text-white">kálésanwá.</div>
            <span className="text-lg font-DMSefif text-white italic">
              j' òwûrò lo
            </span>
          </div>
          <div className="flex items-center text-gray opacity-80 text-2xl gap-x-4">
            <RiFacebookCircleLine />
            <RiTwitterLine />
            <IoLogoWhatsapp />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6 text-gray text-lg">
          <div className="flex items-center gap-x-2.5">
            <IoLocationSharp className="text-3xl text-secondary max-md:text-2xl" />
            <span>
              Plot 1, Ala GRA <br /> Akure
            </span>
          </div>
          <div className="flex items-center gap-x-2.5">
            <FaPhone className="text-3xl text-secondary max-md:text-2xl" />
            <div className="flex flex-col">
              <span className="">Ondo North +234 703 472 1313</span>
              <span className="">Ondo Central +234 803 379 3991</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2.5">
            <IoMail className="text-3xl text-secondary max-md:text-2xl" />
            <div className="flex flex-col">
              <span className="">Ondo South +234 812 024 7554</span>
              <span className="">State Liaison- 07080780513</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 items-center justify-center text-gray text-center opacity-80 text-sm py-6 padX absolute bottom-0 left-0 right-0 font-Heebo400">
        <span className="">2024 © kálésanwá Group - Akure, Nigeria.</span>
        <span>Designed by I-CUBE WA LIMITED. info@cubegroupng.com</span>
      </div>
    </footer>
  );
};
export default Footer;
