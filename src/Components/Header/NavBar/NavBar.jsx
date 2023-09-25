import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-slate-200 bg-opacity-50">
      <div className="max-w-[1440px] mx-5 lg:mx-auto flex justify-between items-center ">
        <div className="hidden md:block">
          <img src="https://i.ibb.co/FDy9XXq/Logo.png" alt="" />
        </div>
        <div>
          <nav className="w-[50%] md:w-full mx-auto">
            <ul className="flex gap-10 md:gap-8 py-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
