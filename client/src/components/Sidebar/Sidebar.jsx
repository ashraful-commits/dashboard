import { Link, useLocation } from "react-router-dom";
import useAuthUser from "../../hooks/useAuthUser";
import { useEffect } from "react";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuthUser();

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div className="sidebar " id="sidebar">
        <div className="sidebar-inner  slimscroll">
          <div id="sidebar-menu" className="sidebar-menu ">
            <ul>
              <li className="menu-title ">
                <span>Main</span>
              </li>
              {user?.role?.permissions?.includes("Dashboard") && (
                <li className={`${location.pathname == "/" ? "active" : ""}`}>
                  <Link to="/">
                    <i className="fe fe-home"></i> <span>Dashboard</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Order") && (
                <li className={`${location.pathname == "/order"}`}>
                  <Link to="/order">
                    <i className="fe fe-bolt"></i> <span>Order</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Products") && (
                <li className={`${location.pathname == "/products"}`}>
                  <Link to="/products">
                    <i className="fe fe-bolt"></i> <span>Products</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Catagory") && (
                <li className={`${location.pathname == "/catagory"}`}>
                  <Link to="/catagory">
                    <i className="fe fe-bolt"></i> <span>Catagory</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Brands") && (
                <li className={`${location.pathname == "/brands"}`}>
                  <Link to="/brands">
                    <i className="fe fe-bolt"></i> <span>Brands</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Tags") && (
                <li className={`${location.pathname == "/tags"}`}>
                  <Link to="/tags">
                    <i className="fe fe-bolt"></i> <span>Tags</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("User") && (
                <li className={`${location.pathname == "users/"}`}>
                  <Link to="/users">
                    <i className="fe fe-user"></i> <span>User</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Role") && (
                <li className={`${location.pathname == "/role"}`}>
                  <Link to="/role">
                    <i className="fa fa-anchor"></i> <span>Role</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Permission") && (
                <li className={`${location.pathname == "/permission"}`}>
                  <Link to="/permission">
                    <i className="fe fe-lock"></i> <span>Permission</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /Sidebar --> */}
    </>
  );
};

export default Sidebar;
