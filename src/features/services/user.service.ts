import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'



export const getAllUsers=createAsyncThunk('users/get',async()=>{

return axios.get("https://fakestoreapi.com/users")
              .then(res=>res.data)
              .catch(err=>new Error(err)
              )
})





export const saveUser=createAsyncThunk('users/save',async(data)=>{
    return axios.post("https://fakestoreapi.com/users",data)
                  .then(res=>res.data)
                  .catch(err=>new Error(err)
                  )
    })