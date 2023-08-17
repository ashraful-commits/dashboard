import { useEffect } from "react";

import PopupModel from "../../components/PopupModel/PopupModel";
import DataTable from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import { generateRandomPassword } from "../../helper/Randompass";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import {
  DeletUserData,
  UserCreate,
  updateUserData,
} from "../../features/user/userApiSlice";
import {
  getPermissionData,
  setMessageEmpty,
} from "../../features/user/userSlice";
import { Toastify } from "../../helper/Toastify";
import { getTimeAgo } from "../../helper/TimeAgofunc";
const Users = () => {
  const dispatch = useDispatch();
  const { user, role, error, message } = useSelector(getPermissionData);
  const { input, setInput, handleInput } = useFormFields({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  //==============hadndle pass generagtor

  const handleRandompassword = (e) => {
    e.preventDefault();

    const randPass = generateRandomPassword(20);
    setInput((prevState) => ({
      ...prevState,
      password: randPass,
    }));
  };
  //=========================create user
  //=======================delete user
  const handleDeleteUser = (id) => {
    dispatch(DeletUserData(id));
  };
  const handleUderEditModal = (id) => {
    setInput(user.find((item) => item._id === id));
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(UserCreate(input));
    setInput({ name: "", email: "", password: "", role: "" });
  };
  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(
      updateUserData({
        name: input.name,
        email: input.email,
        role: input.role,
        id: input._id,
      })
    );
    setInput({ name: "", email: "", password: "", role: "" });
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
  }, [error, message, dispatch]);
  useEffect(() => {
    new DataTable(".datatable");
  }, []);
  return (
    <>
      <PageHeader title={"User"} />
      <button
        data-target="#userModalpopup"
        data-toggle="modal"
        className="btn btn-primary my-2"
      >
        Add new User
      </button>
      <div className="row">
        <PopupModel target="userModalpopup">
          <form action="" onSubmit={handleCreateUser}>
            <div className="my-3">
              <label htmlFor="">Name</label>
              <input
                name="name"
                onChange={handleInput}
                value={input.name}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleInput}
                value={input.email}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Password </label>
              <input
                name="password"
                onChange={handleInput}
                value={input.password}
                type="text"
                className="form-control"
                placeholder="password"
              />
              <button
                onClick={handleRandompassword}
                className="badge badge-info text-light"
              >
                Random Password
              </button>
            </div>
            <div className="my-3">
              <label htmlFor="">Role </label>

              <select name="role" onChange={handleInput} id="">
                <option value="">..select..</option>
                {role?.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Create new User
            </button>
          </form>
        </PopupModel>
        {/* eidt modal  */}
        <PopupModel target="userEditModel">
          <form action="" onSubmit={handleUpdateUser}>
            <div className="my-3">
              <label htmlFor="">Name</label>
              <input
                name="name"
                onChange={handleInput}
                value={input.name}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleInput}
                value={input.email}
                className="form-control"
                placeholder="Email"
              />
            </div>
            {/* <div className="my-3">
              <label htmlFor="">Password </label>
              <input
                name="password"
                onChange={handleInput}
                value={input.password}
                type="text"
                className="form-control"
                placeholder="password"
              />
              <button
                onClick={handleRandompassword}
                className="badge badge-info text-light"
              >
                Random Password
              </button>
            </div> */}
            <div className="my-3">
              <label htmlFor="">Role </label>

              <select name="role" onChange={handleInput} id="">
                <option value="">..select..</option>
                {role?.map((item, index) => {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Update new User
            </button>
          </form>
        </PopupModel>
        <div className="col-md-12">
          {/* <!-- Recent Orders --> */}
          <div className="card card-table">
            <div className="card-header">
              <h4 className="card-title">Appointment List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                {user && (
                  <table className="table table-hover datatable table-center mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>CreatedAt</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user?.map((item, index) => {
                        return (
                          <tr key={index} className="my-2">
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item?.role?.name}</td>
                            <td>{getTimeAgo(item.createdAt)}</td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id="status_1"
                                  className="check"
                                  checked
                                />
                                <label
                                  htmlFor="status_1"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td className="text-right">
                              <div className="action">
                                <button
                                  onClick={() => handleDeleteUser(item._id)}
                                  className="btn btn-danger mx-1"
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                                <button
                                  data-target="#userEditModel"
                                  data-toggle="modal"
                                  onClick={() => handleUderEditModal(item._id)}
                                  className="btn btn-warning"
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
          {/* <!-- /Recent Orders --> */}
        </div>
      </div>
    </>
  );
};

export default Users;
