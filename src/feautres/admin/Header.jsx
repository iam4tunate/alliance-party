import PASSPORT from "../../assets/images/passport.jpg";
const Header = () => {
  return (
    <div className="bg-white fixed top-0 right-0 left-0 h-[13vh] z-10 flex items-center justify-between px-6">
      <div className="font-DMSefif text-3xl font-bold">AP ADMIN</div>
      <div className="">
        <img
          src={PASSPORT}
          alt=""
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
    </div>
  );
};
export default Header;
