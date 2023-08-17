import { useEffect, useState } from "react";

import PopupModel from "../../components/PopupModel/PopupModel";
import DataTable from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import {
  createPermission,
  deletePermission,
  updateStatusPermission,
} from "../../features/user/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPermissionData } from "../../features/user/userSlice";
import { Toastify } from "../../helper/Toastify";
import { setMessageEmpty } from "../../features/user/userSlice";

import swal from "sweetalert";
import { getTimeAgo } from "../../helper/TimeAgofunc";
const Permission = () => {
  const dispatch = useDispatch();
  const { permission, error, message } = useSelector(getPermissionData);

  const [input, setInput] = useState({
    name: "",
  });

  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(createPermission(input));
    setInput({ name: "" });
  };
  const handleCheckedChange = (id, status) => {
    dispatch(updateStatusPermission({ id, status }));
  };
  //==========
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof!  file has been deleted!", {
          icon: "success",
        });
        dispatch(deletePermission(id));
      } else {
        swal(" file is safe!");
      }
    });
  };

  useEffect(() => {
    new DataTable(".datatable");
  }, []);
  useEffect(() => {
    if (error && permission) {
      Toastify(error, "error");
      dispatch(setMessageEmpty());
    }
    if (message) {
      Toastify(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch, permission]);
  return (
    <>
      <PageHeader title={"Permission"} />
      <button
        data-target="#permissionModel"
        data-toggle="modal"
        className="btn btn-primary my-2"
      >
        Add new Permission
      </button>
      <div className="row">
        <PopupModel target="permissionModel">
          <form onSubmit={handleFormSubmit}>
            <div className="my-3">
              <label htmlFor="">Permission Name</label>
              <input
                onChange={handleInput}
                name="name"
                value={input.name}
                type="text"
                className="form-control my-3"
              />
              <button
                data-target="#permissionModel"
                data-toggle="modal"
                className="btn btn-primary btn-block"
              >
                Add new Permission
              </button>
            </div>
          </form>
        </PopupModel>
        <div className="col-md-12">
          {/* <!-- Recent Orders --> */}
          <div className="card card-table">
            <div className="card-header">
              <h4 className="card-title">Permission List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                {permission && (
                  <table className="table table-hover datatable table-center mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Created Time</th>
                        <th>Status</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...permission].reverse().map((item, index) => {
                        return (
                          <tr key={index}>
                            <td style={{ width: "15px" }}>{index + 1}</td>
                            <td>{item?.name}</td>
                            <td>{item?.slug}</td>
                            <td>{getTimeAgo(item?.createdAt)}</td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id={item?.name}
                                  className="check"
                                  checked={item?.status ? true : false}
                                  onChange={() =>
                                    handleCheckedChange(item._id, item.status)
                                  }
                                />
                                <label
                                  htmlFor={item.name}
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td className="text-right">
                              <button
                                onClick={() => handleDelete(item?._id)}
                                className="btn btn-danger"
                              >
                                <i className="fa fa-trash"></i>
                              </button>
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

export default Permission;
