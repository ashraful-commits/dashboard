// create atuh slice

import { createSlice } from "@reduxjs/toolkit";
import { DeletUserData, UserCreate, createPermission, createRole, deletePermission, deleteRole, getAllPermission, getAllRole, getAllUserData, updateRole, updateStatusPermission, updateStatusRole, updateUserData } from "./userApiSlice";


const userSlice = createSlice({
  name: "user",
  initialState: {
   permission:null,
   role:null,
   user:null,
   error:null,
   message:null,
   loading:false
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPermission.pending,(state,action)=>{
      state.loading = true
    }).addCase(getAllPermission.rejected,(state,action)=>{
      state.loading = false,
      state.error = action.error.message
     }).addCase(getAllPermission.fulfilled,(state,action)=>{
            state.loading = false,
            state.message = action.payload.message,
            state.permission = action.payload.permission
     }).addCase(createPermission.pending,(state,action)=>{
      state.loading = true
       }).addCase(createPermission.rejected,(state,action)=>{
       state.error = action.error.message
    }).addCase(createPermission.fulfilled,(state,action)=>{
      state.permission=state.permission??[]
      state.permission.push(action.payload.permission)??[]
      state.message = action.payload.message
   }).addCase(deletePermission.pending,(state,action)=>{
    state.loading = true
 }).addCase(deletePermission.rejected,(state,action)=>{
  state.error = action.error.message,
  state.loading = false
}).addCase(deletePermission.fulfilled,(state,action)=>{
  state.message = action.payload.message,
  state.loading = false
  state.permission =[...state.permission.filter((item)=>item._id!==action.payload.permission._id)]
}).addCase(updateStatusPermission.pending,(state,action)=>{
  state.loading = true
}).addCase(updateStatusPermission.rejected,(state,action)=>{
  state.error = action.error.message,
  state.loading = false
}).addCase(updateStatusPermission.fulfilled,(state,action)=>{
  state.message = action.payload.message,
  state.loading = false
  state.permission[state.permission.findIndex((item)=>item._id ===action.payload.permission._id)]= action.payload.permission
}).addCase(createRole.pending,(state,action)=>{
  state.loading = true
}).addCase(createRole.rejected,(state,action)=>{
  state.error = action.error.message,
  state.loading = false
}).addCase(createRole.fulfilled,(state,action)=>{
  state.role=state.role??[]
  state.role.push(action.payload.role)
  state.message = action.payload.message
}).addCase(getAllRole.pending,(state,action)=>{
  state.loading = true
}).addCase(getAllRole.rejected,(state,action)=>{
  state.error = action.error.message,
  state.loading = false
}).addCase(getAllRole.fulfilled,(state,action)=>{
  state.role = action.payload.role
  state.message = action.payload.message
}).addCase(deleteRole.pending,(state,action)=>{
  state.loading = true
}).addCase(deleteRole.rejected,(state,action)=>{
state.error = action.error.message,
state.loading = false
}).addCase(deleteRole.fulfilled,(state,action)=>{
state.message = action.payload.message,
state.loading = false
state.role =[...state.role.filter((item)=>item._id!==action.payload.role._id)]
}).addCase(updateStatusRole.pending,(state,action)=>{
  state.loading = true
}).addCase(updateStatusRole.rejected,(state,action)=>{
  state.error = action.error.message,
  state.loading = false
}).addCase(updateStatusRole.fulfilled,(state,action)=>{
  state.message = action.payload.message,
  state.loading = false
  state.role[state.role.findIndex((item)=>item._id ===action.payload.role._id)]= action.payload.role
}).addCase(updateRole.pending,(state,action)=>{
  state.loading = true
}).addCase(updateRole.rejected,(state,action)=>{
  state.error = action.error.message,
  state.loading = false
}).addCase(updateRole.fulfilled,(state,action)=>{
  state.message = action.payload.message,
  state.loading = false
  state.role[state.role.findIndex((item)=>item._id ===action.payload.role._id)]= action.payload.role
}).addCase(UserCreate.pending,(state,action)=>{
  state.loading = true
}).addCase(UserCreate.rejected,(state,action)=>{
  state.error = action.error.message,
  state.loading = false
}).addCase(UserCreate.fulfilled,(state,action)=>{
  state.message = action.payload.message,
  state.user= state.user??[]
  state.loading = false
  state.user.push(action.payload)
}).addCase(getAllUserData.pending,(state,action)=>{
  state.loading = true
}).addCase(getAllUserData.rejected,(state,action)=>{
  state.error = action.error.message,
  state.loading = false
}).addCase(getAllUserData.fulfilled,(state,action)=>{
  state.message = action.payload.message,
  state.user= state.user??[]
  state.loading = false
  state.user= action.payload.user
}).addCase(DeletUserData.pending,(state,action)=>{
  state.loading = true
}).addCase(DeletUserData.rejected,(state,action)=>{
state.error = action.error.message,
state.loading = false
}).addCase(DeletUserData.fulfilled,(state,action)=>{
state.message = action.payload.message,
state.loading = false
state.user =[...state.user.filter((item)=>item._id!==action.payload.user._id)]
}).addCase(updateUserData.pending,(state,action)=>{
  state.loading = true
}).addCase(updateUserData.rejected,(state,action)=>{
  state.error = action.error.message,
  state.loading = false
}).addCase(updateUserData.fulfilled,(state,action)=>{
  state.message = action.payload.message,
  state.loading = false
  state.user[state.user.findIndex((item)=>item._id ===action.payload.user._id)]= action.payload.user
})
     
  },
});

export const getPermissionData = (state)=>state.User

export const { setMessageEmpty } = userSlice.actions;
export default userSlice.reducer;
