import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="maxW padX flex items-stretch justify-between h-20">
      <div className="font-DMSefif text-2xl max-sm:text-xl font-bold text-primary self-center">
        Alliance Political Party
      </div>
      <ul className="flex items-center gap-x-6 text-lg text-dark max-lg:hidden">
        <li>Home</li>
        <li>Program</li>
        <li>Team</li>
        <li>News</li>
        <li>Contacts</li>
      </ul>
      <div className="flex items-center">
        <IoMenu className="text-3xl lg:hidden text-primary" />
        <Link to="/auth/register" className="pl-6 max-sm:hidden">
          <li className="flex items-center h-full text-secondary gap-x-2 font-Heebo600">
            <span>Become a member</span>
            <BsArrowRight />
          </li>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
