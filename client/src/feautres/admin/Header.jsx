import USER from "../../assets/images/passport.jpg";
import { IoMenu } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

const Header = ({ sidebar, setSidebar }) => {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-[250px] xl:left-[300px] z-[999] bg-white border-b border-gray border-solid h-[78px] px-8  flex items-center justify-between">
      <div className="lg:hidden flex items-center space-x-6 lg:space-x-0 pr-16">
        {sidebar ? (
          <LiaTimesSolid
            onClick={() => setSidebar(false)}
            className="text-3xl"
          />
        ) : (
          <IoMenu onClick={() => setSidebar(true)} className="text-3xl" />
        )}
        <div className="font-DMSefif text-xl font-black">KALESANWA</div>
      </div>
      <form className="w-[350px] hidden md:block mr-auto">
        <input
          className="input h-12 w-full"
          type="text"
          placeholder="Search Here..."
        />
      </form>
      <img
        className="w-[40px] h-[40px] object-cover rounded-full"
        src={USER}
        alt=""
      />
    </header>
  );
};
export default Header;
