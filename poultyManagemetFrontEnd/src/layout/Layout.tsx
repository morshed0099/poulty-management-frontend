import { NavLink, Outlet } from "react-router-dom";

const layout = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col lg:flex-row">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full lg:hidden">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>

          <div className="lg:flex  overflow-scroll   hidden min-h-screen  w-[300px] bg-gray-600">
            <div className="md:fixed to-0%  bg-amber-700 min-h-screen  w-[300px] fixed top-0">
              <ul className="">
                {/* Sidebar content here */}
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Sles Order
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100  rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <NavLink to="/sales">Create Sales</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">All Sales Order</NavLink>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex-1 h-auto">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  p-4">
            {/* Sidebar content here */}
           <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Sles Order
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <NavLink to="/sales">Create Sales</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">All Sales Order</NavLink>
                    </li>
                  </ul>
                </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default layout;
