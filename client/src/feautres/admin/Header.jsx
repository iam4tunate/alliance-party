import PASSPORT from "../../assets/images/passport.jpg";
const Header = () => {
  return (
    <div className="bg-white h-[9vh] z-10 flex items-center justify-end px-6 drop-shadow-md">
        <img
          src={PASSPORT}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
    </div>
  );
};
export default Header;
