import { useState } from "react";
import avatar from "../../assets/img/profiles/avatar-01.jpg";
import useAuthUser from "../../hooks/useAuthUser";
import { useDispatch } from "react-redux";
import {
  updateUser,
  updateUserPassword,
} from "../../features/auth/authApiSlice";

const Profile = () => {
  const { user, error, message } = useAuthUser();
  const dispatch = useDispatch();
  const [Id, setId] = useState(null);
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [Password, setPassword] = useState({
    old_password: "",
    password: "",
    con_password: "",
  });
  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const hnadlePassword = (e) => {
    setPassword((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEditData = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    console.log(user._id);
    setId(userData._id);
    setInput({
      name: userData.name,
      email: userData.email,
    });
  };
  const handleEditPassword = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));

    setId(userData._id);
  };
  const handleuserRegisterUpdate = (e) => {
    e.preventDefault();
    console.log(Id);
    dispatch(updateUser({ Id, input }));
  };
  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    console.log(Password);
    dispatch(
      updateUserPassword({
        Id,
        data: {
          old_password: Password.old_password,
          password: Password.password,
        },
      })
    );
  };
  return (
    <>
      {/* <!-- Page Wrapper --> */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* <!-- Page Header --> */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Profile</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Profile</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}

          <div className="row">
            <div className="col-md-12">
              <div className="profile-header">
                <div className="row align-items-center">
                  <div className="col-auto profile-image">
                    <a href="#">
                      <img
                        className="rounded-circle"
                        alt={user?.name}
                        src={user?.photo ? user?.photo : avatar}
                      />
                    </a>
                  </div>
                  <div className="col ml-md-n2 profile-user-info">
                    <h4 className="user-name mb-0">{user?.name}</h4>
                    <h6 className="text-muted">{user?.email}</h6>
                  </div>
                  <div className="col-auto profile-btn">
                    <a href="#" className="btn btn-primary">
                      Edit
                    </a>
                  </div>
                </div>
              </div>
              <div className="profile-menu">
                <ul className="nav nav-tabs nav-tabs-solid">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#per_details_tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={handleEditPassword}
                      className="nav-link"
                      data-toggle="tab"
                      href="#password_tab"
                    >
                      Password
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content profile-tab-cont">
                {/* <!-- Personal Details Tab --> */}
                <div className="tab-pane fade show active" id="per_details_tab">
                  {/* <!-- Personal Details --> */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title d-flex justify-content-between">
                            <span>Personal Details</span>
                            <a
                              onClick={handleEditData}
                              className="edit-link"
                              data-toggle="modal"
                              href="#edit_personal_details"
                            >
                              <i className="fa fa-edit mr-1"></i>Edit
                            </a>
                          </h5>
                          <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">
                              Name
                            </p>
                            <p className="col-sm-10">{user?.name}</p>
                          </div>

                          <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">
                              Email ID
                            </p>
                            <p className="col-sm-10">{user?.email}</p>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Edit Details Modal --> */}
                      <div
                        className="modal fade"
                        id="edit_personal_details"
                        aria-hidden="true"
                        role="dialog"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Personal Details</h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form onSubmit={handleuserRegisterUpdate}>
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    onChange={handleInput}
                                    value={input.name}
                                    name="name"
                                    placeholder="Name"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    onChange={handleInput}
                                    value={input.email}
                                    placeholder="Email"
                                  />
                                </div>

                                <div className="form-group mb-0">
                                  <button
                                    className="btn btn-primary btn-block"
                                    type="submit"
                                  >
                                    Register
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /Edit Details Modal --> */}
                    </div>
                  </div>
                  {/* <!-- /Personal Details --> */}
                </div>
                {/* <!-- /Personal Details Tab --> */}

                {/* <!-- Change Password Tab --> */}
                <div id="password_tab" className="tab-pane fade">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Change Password</h5>
                      <div className="row">
                        <div className="col-md-10 col-lg-6">
                          <form onSubmit={handlePasswordUpdate}>
                            <div className="form-group">
                              <label>Old Password</label>
                              <input
                                type="password"
                                className="form-control"
                                name="old_password"
                                value={Password.old_password}
                                onChange={hnadlePassword}
                              />
                            </div>
                            <div className="form-group">
                              <label>New Password</label>
                              <input
                                name="password"
                                value={Password.password}
                                onChange={hnadlePassword}
                                type="password"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input
                                name="con_password"
                                value={Password.con_password}
                                onChange={hnadlePassword}
                                type="password"
                                className="form-control"
                              />
                            </div>
                            <button className="btn btn-primary" type="submit">
                              Save Changes
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Change Password Tab --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Page Wrapper --> */}
    </>
  );
};

export default Profile;
