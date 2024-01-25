import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import LOGO from '../assets/images/logo.jpg'

const Navbar = () => {
  return (
    <div className="maxW padX flex items-stretch justify-between h-20">
      <div className="font-DMSefif text-2xl max-sm:text-xl font-bold text-primary self-center">
        <img src={LOGO} alt="" className="w-[8rem] object-cover"/>
      </div>
      <ul className="flex items-center gap-x-10 text-lg text-dark max-lg:hidden">
        <li>Home</li>
        <li>Programs</li>
        <li>Committee</li>
        <li>News</li>
        <li>Contacts</li>
      </ul>
      <div className="flex items-center">
        <IoMenu className="text-3xl lg:hidden text-primary" />
        <Link to="/auth/register" className="pl-6 max-sm:hidden">
          <li className="flex items-center h-full text-secondary gap-x-1 font-Heebo600 uppercase text-lg">
            <span>Become a member</span>
            <BsArrowRight />
          </li>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
