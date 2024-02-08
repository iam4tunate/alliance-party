import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-[270px_1fr]">
      <div className="col-start-1 col-end-2 ">
        <Sidebar />
      </div>
      <div className="col-start-2 col-end-3 h-full">
        <Header/>
        <Outlet />
      </div>
    </div>
  );
};
export default AdminLayout;
