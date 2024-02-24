import { createAsyncThunk } from "@reduxjs/toolkit";



import axios from 'axios'
export const getProducts=createAsyncThunk('products/get',async()=>{
    return axios.get('https://fakestoreapi.com/products')
    .then(res=>res.data)
    .catch(err=>new Error(err)
    )
})