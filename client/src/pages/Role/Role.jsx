import { useEffect, useState } from "react";

import PopupModel from "../../components/PopupModel/PopupModel";
import DataTable from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import useFormFields from "../../hooks/useFormFields";
import { getPermissionData } from "../../features/user/userSlice";
import { Toastify } from "../../helper/Toastify";
import { setMessageEmpty } from "../../features/user/userSlice";
import {
  createRole,
  deleteRole,
  updateRole,
  updateStatusRole,
} from "../../features/user/userApiSlice";
import { getTimeAgo } from "../../helper/TimeAgofunc";
import swal from "sweetalert";

const Role = () => {
  const dispatch = useDispatch();
  const { permission, error, message, role } = useSelector(getPermissionData);
  const [selected, setSelected] = useState([]);
  const [roleEdit, setRoleEdit] = useState({});
  const { input, handleInput, setInput } = useFormFields({ name: "" });

  const handleCheckedRoleChange = (id, status) => {
    console.log(id);
    dispatch(updateStatusRole({ id, status }));
  };
  const handleCheckboxchange = (e) => {
    const val = e.target.value;
    const updateList = [...selected];
    if (selected.includes(val)) {
      updateList.splice(selected.indexOf(val), 1);
    } else {
      updateList.push(val);
    }
    setSelected(updateList);
  };

  const handleRoleCreate = (e) => {
    e.preventDefault();

    dispatch(
      createRole({
        name: input.name,
        permissions: [...selected],
      })
    );
    setInput({
      name: "",
    });
    setSelected([]);
  };
  //=================== handle edit update
  const handleEditUpdate = (e) => {
    e.preventDefault();

    dispatch(
      updateRole({
        id: roleEdit._id,
        name: roleEdit.name,
        permissions: [...selected],
      })
    );
  };
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
        dispatch(deleteRole(id));
      } else {
        swal(" file is safe!");
      }
    });
  };
  //======================= edit
  const handleRoleEdit = (id) => {
    const editData = role.find((item) => item._id === id);
    setRoleEdit(editData);
    setSelected(editData.permissions);
  };
  //==================================input

  const handleEditInput = (e) => {
    setRoleEdit((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (error && role) {
      Toastify(error, "error");
      dispatch(setMessageEmpty());
    }
    if (message) {
      Toastify(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch, role]);
  useEffect(() => {
    new DataTable(".datatable");
  }, []);
  return (
    <>
      <PageHeader title={"Role"} />
      <button
        data-target="#rolemodle"
        data-toggle="modal"
        className="btn btn-primary my-2"
      >
        Add new Role
      </button>
      <div className="row">
        <PopupModel target="rolemodle">
          <form onSubmit={handleRoleCreate}>
            <div className="my-3">
              <label htmlFor="">Role Name</label>
              <input
                onChange={handleInput}
                name="name"
                value={input.name}
                type="text"
                className="form-control my-3"
              />
              <label className="d-flex">Add new Role</label>
              {permission?.map((item, index) => {
                return (
                  <label
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <input
                      type="checkbox"
                      value={item?.name}
                      checked={selected.includes(item?.name)}
                      onChange={handleCheckboxchange}
                      className=" my-3"
                    />
                    {item?.name}
                  </label>
                );
              })}
              <button
                data-target="#rolemodle"
                data-toggle="modal"
                className="btn btn-primary btn-block"
              >
                Add new Permission
              </button>
            </div>
          </form>
        </PopupModel>
        <PopupModel target="roleEdit">
          <form onSubmit={handleEditUpdate}>
            <div className="my-3">
              <label htmlFor="">Role Name</label>
              <input
                onChange={handleEditInput}
                name="name"
                value={roleEdit?.name}
                type="text"
                className="form-control my-3"
              />
              <label className="d-flex">Add new Role</label>
              {permission?.map((item, index) => {
                return (
                  <label
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <input
                      type="checkbox"
                      value={item?.name}
                      checked={selected?.includes(item?.name)}
                      onChange={handleCheckboxchange}
                      className=" my-3"
                    />
                    {item?.name}
                  </label>
                );
              })}
              <button className="btn btn-primary btn-block">
                Edit new Role
              </button>
            </div>
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
                {role && (
                  <table className="table table-hover datatable table-center mb-0">
                    <thead>
                      <tr>
                        <th style={{ width: "50px" }}>#</th>
                        <th>Role Name</th>
                        <th>Slug</th>
                        <th>Permissions</th>
                        <th>Created Time</th>
                        <th>Status</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {role?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td style={{ width: "50px" }}>{index + 1}</td>
                            <td>{item?.name}</td>
                            <td>{item?.slug}</td>
                            <td>
                              <ul>
                                {item?.permissions?.map((per, index) => {
                                  return <li key={index}>{per}</li>;
                                })}
                              </ul>
                            </td>
                            <td>{getTimeAgo(item?.createdAt)}</td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id={item?.name}
                                  className="check"
                                  checked={item?.status ? true : false}
                                  onChange={() =>
                                    handleCheckedRoleChange(
                                      item._id,
                                      item.status
                                    )
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
                                onClick={() => handleDelete(item._id)}
                                className="btn btn-danger"
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                              <button
                                data-target="#roleEdit"
                                data-toggle="modal"
                                className="btn btn-warning"
                                onClick={() => handleRoleEdit(item._id)}
                              >
                                <i className="fa fa-edit"></i>
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

export default Role;
