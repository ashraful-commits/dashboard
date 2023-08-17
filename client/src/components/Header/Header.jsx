import logo from "../../assets/img/logo.png";
import doctorthumb from "../../assets/img/doctors/doctor-thumb-01.jpg";
import patient1 from "../../assets/img/patients/patient1.jpg";
import patient2 from "../../assets/img/patients/patient2.jpg";
import patient3 from "../../assets/img/patients/patient3.jpg";
import avatar from "../../assets/img/profiles/avatar-01.jpg";
import logosmall from "../../assets/img/logo-small.png";
import useDropdown from "../../hooks/useDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../../features/auth/authApiSlice";
import { Toastify } from "../../helper/Toastify";
import { setMessageEmpty } from "../../features/auth/authSlice";
import useAuthUser from "../../hooks/useAuthUser";
const Header = () => {
  const { dropdown, dropfunc, refdown } = useDropdown();
  const mini_sidebar = useRef(null);

  const handleToggle = () => {
    document.body.classList.toggle("mini-sidebar");
  };
  const handleToggleIcon = (e) => {
    e.target.classList.toggle(".dropdown-toggle:after");
    console.log(e.target);
    dropfunc();
  };
  console.log(mini_sidebar);
  const {
    dropdown: notiDrop,
    dropfunc: notidropfunc,
    refdown: notirefdown,
  } = useDropdown();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, message, error } = useAuthUser();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(LogoutUser());
  };
  useEffect(() => {
    if (error) {
      Toastify(error, "error");
      dispatch(setMessageEmpty());
    }
    if (message) {
      Toastify(message, "success");
      dispatch(setMessageEmpty());
    }

    if (!user) {
      navigate("/login");
    }
  }, [error, message, user, dispatch, navigate]);
  //==================== dispatch

  return (
    <>
      {/* <!-- Header --> */}
      <div className="header ">
        {/* <!-- Logo --> */}
        <div className=" header-left">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/" className="logo logo-small">
            <img src={logosmall} alt="Logo" width="30" height="30" />
          </Link>
        </div>
        {/* <!-- /Logo --> */}

        <a onClick={handleToggle} href="#!" id="toggle_btn">
          <i className="fe fe-text-align-left"></i>
        </a>

        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        {/* <!-- Mobile Menu Toggle --> */}
        <a className="mobile_btn" id="mobile_btn">
          <i className="fa fa-bars"></i>
        </a>
        {/* <!-- /Mobile Menu Toggle --> */}

        {/* <!-- Header Right Menu --> */}
        <ul className="nav user-menu">
          {/* <!-- Notifications --> */}
          <li ref={notirefdown} className="nav-item dropdown noti-dropdown">
            <a
              onClick={notidropfunc}
              href="#!"
              className="dropdown-toggle nav-link"
              // data-toggle="dropdown"
            >
              <i className="fe fe-bell"></i>
              <span className="badge badge-pill">3</span>
            </a>
            {/* dropdown menu  */}
            {notiDrop && (
              <div
                className="dropdown-menu notifications d-block"
                style={{ transform: "translate(-315px,0px)" }}
              >
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <a href="javascript:void(0)" className="clear-noti">
                    Clear All
                  </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={doctorthumb}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                Dr. Ruby Perrin
                              </span>
                              Schedule
                              <span className="noti-title">
                                her appointment
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={patient1}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Charlene Reed</span>
                              has booked her appointment to
                              <span className="noti-title">
                                Dr. Ruby Perrin
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                6 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={patient2}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Travis Trimble</span>
                              sent a amount of $210 for his
                              <span className="noti-title">appointment</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                8 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={patient3}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Carl Kelly</span>{" "}
                              send a message
                              <span className="noti-title"> to his doctor</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="#">View all Notifications</a>
                </div>
              </div>
            )}
          </li>
          {/* <!-- /Notifications --> */}

          {/* <!-- User Menu --> */}
          <li ref={refdown} className="nav-item dropdown has-arrow">
            <a
              onClick={(e) => handleToggleIcon(e)}
              href="#"
              className="dropdown-toggle nav-link"
              // data-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src={user?.photo ? user.photo : avatar}
                  alt={user?.name}
                  width="31"
                />
              </span>
            </a>
            {dropdown && (
              <div
                className="dropdown-menu d-block"
                style={{ transform: "translate(-135px,0px)" }}
              >
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img
                      src={user?.photo ? user?.photo : avatar}
                      alt={user?.name}
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="user-text">
                    <h6>{user?.name}</h6>
                    <p className="text-muted mb-0">{user?.role?.name}</p>
                  </div>
                </div>
                <Link className="dropdown-item" to="/profile">
                  My Profile
                </Link>
                <Link className="dropdown-item" to="/setting">
                  Settings
                </Link>
                <a onClick={handleLogOut} className="dropdown-item" href="##">
                  Logout
                </a>
              </div>
            )}
          </li>
          {/* <!-- /User Menu --> */}
        </ul>
        {/* <!-- /Header Right Menu --> */}
      </div>
      {/* <!-- /Header --> */}
    </>
  );
};

export default Header;
