import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//=============== create user

export const getAllPermission = createAsyncThunk(
  "user/getAllPermission",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/permission",
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const getAllRole = createAsyncThunk(
  "user/getAllRole",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/role",
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const createPermission = createAsyncThunk(
  "user/createPermission",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/permission",
     data,{withCredentials:true}
      );
      return response.data
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const createRole = createAsyncThunk(
  "user/createRole",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/role",
     data,{withCredentials:true}
      );
      return response.data
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const deletePermission = createAsyncThunk(
  "user/deletePermission",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/permission/${id}`,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const deleteRole = createAsyncThunk(
  "user/deleteRole",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/role/${id}`,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const updateStatusPermission = createAsyncThunk(
  "user/updateStatusPermission",
  async ({id,status}) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/permission/${id}`,{status:!status},
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const updateStatusRole = createAsyncThunk(
  "user/updateStatusRole",
  async ({id,status}) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/role/${id}`,{status:!status},
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const updateRole = createAsyncThunk(
  "user/updateRole",
  async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:5050/api/v1/role/${data.id}`,data,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const UserCreate = createAsyncThunk(
  "user/UserCreate",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/createuser`,data,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const getAllUserData = createAsyncThunk(
  "user/getAllUserData",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/v1/auth/register`,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
     
export const DeletUserData = createAsyncThunk(
  "user/DeletUserData",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/auth/${id}`,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:5050/api/v1/auth/createuser/${data.id}`,data,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
     