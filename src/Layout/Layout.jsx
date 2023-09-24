import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mb-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
