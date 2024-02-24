import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, initialUserState } from "../../models/user.model";
import { getAllUsers, saveUser } from "../../services/user.service";



const initialState:initialUserState={
    users:[],
    isError:false,
    isLoading:false,
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUsers.pending,(state)=>{state.isLoading=true;state.isError=false}) 
        .addCase(getAllUsers.fulfilled,(state,action:PayloadAction<User[]>)=>{
            state.users=action.payload;
            state.isLoading=false;
            state.isError=false
        }) 


        .addCase(saveUser.fulfilled,(state,action:PayloadAction<User>)=>{
              state.users.push(action.payload)
        })
    }
})

export default userSlice;
