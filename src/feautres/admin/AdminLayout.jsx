import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-[270px_1fr] grid-rows-[13vh_1fr]">
      <div className="col-start-1 col-end-2 row-start-2 row-end-3">
        <Sidebar />
      </div>
      <div className="col-start-1 col-end-3 row-start-1 row-end-2">
        <Header />
      </div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 h-full overflow-x-hidden min-h-[85vh]">
        <Outlet />
      </div>
    </div>
  );
};
export default AdminLayout;
