// create atuh slice

import { createSlice } from "@reduxjs/toolkit";
import { LogedinUser, LoginUser, LogoutUser, RegisterUser, updateUser, updateUserPassword } from "./authApiSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")):null,
    error: null,
    message: null,
    loadding: false,
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state, action) => {
        state.loadding = true;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadding = false;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
        state.loadding = false;
      })
      .addCase(LoginUser.pending, (state, action) => {
        state.loadding = true;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadding = false;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
        state.loadding = false;
        localStorage.setItem("user",JSON.stringify(action.payload.user))
      }).addCase(LogoutUser.pending, (state, action) => {
        state.loadding = true;
      }).addCase(LogoutUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadding = false;
      }).addCase(LogoutUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loadding = false;
        state.user = null
        localStorage.removeItem("user")
      }).addCase(LogedinUser.pending, (state, action) => {
        state.loadding = true;
      }).addCase(LogedinUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.user = null;
        state.loadding = false;
      }).addCase(LogedinUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
        state.loadding = false;
        
      }).addCase(updateUser.pending, (state, action) => {
        state.loadding = true; 
      }).addCase(updateUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadding = false;
      }).addCase(updateUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
        state.loadding = false;
      }).addCase(updateUserPassword.pending, (state, action) => {
        state.loadding = true;
      }).addCase(updateUserPassword.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadding = false;
        
      }).addCase(updateUserPassword.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = null;
        state.loadding = false;
        
      });
  },
});

export const getAuthData = (state)=>state.Auth

export const { setMessageEmpty } = authSlice.actions;
export default authSlice.reducer;
