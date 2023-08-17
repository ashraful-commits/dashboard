import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//=============== create user

export const RegisterUser = createAsyncThunk(
  "auth/registerUser",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/auth/register",
        data,
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({Id,input}) => {
    try {
      const response = await axios.put(
        `http://localhost:5050/api/v1/auth/register/${Id}`,
        input,
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const updateUserPassword = createAsyncThunk(
  "auth/updateUserPassword",
  async ({Id,data}) => {
    console.log(data)
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/auth/passwrod/${Id}`,
        {...data},
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const LoginUser = createAsyncThunk("auth/LoginUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/login",
      data,{withCredentials:true}
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const LogoutUser = createAsyncThunk("auth/LogoutUser", async () => {
  try {
    const response = await axios.get(
      "http://localhost:5050/api/v1/auth/logout",
      {withCredentials:true}
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const LogedinUser = createAsyncThunk("auth/LogedinUser", async () => {
  try {
    const response =await axios.get("http://localhost:5050/api/v1/auth/me",{withCredentials:true});

    return response.data
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
