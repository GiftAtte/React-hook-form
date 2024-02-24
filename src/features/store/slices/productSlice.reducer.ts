import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import { Product, productInitialState } from "../../models/product.model";
import { getProducts } from "../../services/product.service";





const initialState:productInitialState={
    product:[],
    isError:false,
    isLoading:false
}


const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
       setProducts:(state,action:PayloadAction<Product[]>)=>{
                 state.product=action.payload
       },
       
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state)=>{state.isLoading=true;state.isError=false})
        .addCase(getProducts.rejected,(state)=>{state.isError=true;state.isLoading=false})
        .addCase(getProducts.fulfilled,(state,action:PayloadAction<Product[]>)=>{
             state.product=action.payload;
             state.isLoading=false 
             state.isError=false
        })
    }

})

export default productSlice;
export const {setProducts}=productSlice.actions;

