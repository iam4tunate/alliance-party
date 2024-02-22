import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="min-h-screen w-full grid lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr] bg-slate-100">
      <div className="">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      <div className="flex flex-col w-full bg-white">
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <div className="mt-[78px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AdminLayout;
