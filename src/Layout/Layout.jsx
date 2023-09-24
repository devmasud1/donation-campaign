import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const Layout = () => {
    return (
        <div>
            <Header></Header>
           <div className="max-w-[1440px] mx-auto">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Layout;