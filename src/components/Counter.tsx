

import { increment,decrement } from '../features/store/slices/counterSlice.reducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../features/store/store.store'
import { useEffect } from 'react'
import { getProducts } from '../features/services/product.service'
import { getAllUsers, saveUser } from '../features/services/user.service'
import { User } from '../features/models/user.model'
const user={
  
  email:'John233@gmail.com',
  username:"bigstuff2",
  password:"111111",
  name:{
      firstname:"Gift",
      lastname:"Atte"
  }}
function CounterComponent() {

const counter=useSelector((state:RootState)=>state.counter.value)
const dispatch:AppDispatch=useDispatch();
const productState=useSelector((state:RootState)=>state.products)


useEffect(()=>{
dispatch(getProducts());
dispatch(getAllUsers())
},[dispatch])
  return (
        <div>
          {productState.isLoading && <h1>Loading ...</h1>}
          {productState.isError && <h1>Sorry!, there was an error fetching the data</h1>}
      {!productState.isLoading && !productState.isError&& <p>{counter}</p> }
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(saveUser(user))}>add User</button>
        </div>
  )
}

export default CounterComponent