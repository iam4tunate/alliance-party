import { NavLink } from "react-router-dom";

const ActiveStyle =
  "rounded-md relative inline-flex items-center w-full px-5 py-[16px] mb-2 bg-dark bg-opacity-20";
const styles =
  "rounded-md relative inline-flex items-center w-full px-5 py-[16px] mb-2 hover:bg-dark hover:bg-opacity-10";

const AsideLink = ({ url, icon, name, setSidebar }) => {
  return (
    <NavLink
      to={`/admin/${url}`}
      onClick={() => setSidebar(false)}
      className={({ isActive }) => (isActive ? ActiveStyle : styles)}
    >
      <div className="flex items-center gap-x-[10px]">
        <span className="text-xl">{icon}</span>
        <span className="font-Heebo500 text-base">{name}</span>
      </div>
    </NavLink>
  );
};
export default AsideLink;
