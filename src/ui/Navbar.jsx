import { BsArrowRight } from "react-icons/bs";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import LOGO from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <div
      id="home"
      className="bg-white maxW padX flex items-stretch justify-between h-[4.2rem]"
    >
      <div className="font-DMSefif text-2xl max-sm:text-xl font-bold text-primary self-center">
        <img src={LOGO} alt="" className="w-[8rem] object-cover" />
      </div>
      <ul className="flex items-center gap-x-10 text-base font-Heebo400 text-dark uppercase">
        <li className="max-lg:hidden cursor-pointer hover:text-secondary">
          <Scroll to="home" spy={true}>
            Home
          </Scroll>
        </li>
        <li className="max-lg:hidden cursor-pointer hover:text-secondary">
          <Scroll to="commitment" spy={true}>
            Our Commitment
          </Scroll>
        </li>
        <li className="max-lg:hidden cursor-pointer hover:text-secondary">
          <Scroll to="committee" spy={true}>
            Committee
          </Scroll>
        </li>
        <Link to="/auth/register" className="">
          <li className="flex items-center text-secondary gap-x-1 font-Heebo600 max-sm:font-Heebo700 uppercase text-lg max-sm:text-base max-[320px]:text-sm">
            <span>Become a member</span>
            <BsArrowRight className="max-sm:hidden" />
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
