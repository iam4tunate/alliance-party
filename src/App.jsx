import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./ui/Home";
import Auth from "./feautres/auth/Auth";
import Register from "./feautres/auth/Register";
import Login from "./feautres/auth/Login";
import AdminLayout from "./feautres/admin/AdminLayout";
import Overview from "./feautres/admin/Overview";
import Members from "./feautres/admin/Members";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />}>
          <Route index element={<Navigate replace to="register" />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate replace to="overview" />} />
          <Route path="overview" element={<Overview />} />
          <Route path="members" element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
