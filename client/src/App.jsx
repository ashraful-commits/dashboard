import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

import { LogedinUser } from "./features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import {
  getAllPermission,
  getAllRole,
  getAllUserData,
} from "./features/user/userApiSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPermission());
    dispatch(getAllRole());
    dispatch(getAllUserData());
  }, [dispatch]);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(LogedinUser());
    }
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
