import { useForm } from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

type FormValues={
 username:string;
 email:string;
 password:string
}


export const Youtube=() =>{
  const form=useForm<FormValues>();
  const onSubmit=(data:FormValues)=>{
console.log(data)
  }
  const {register, control,handleSubmit}=form;
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="container">
    <div  className="form-group">
      <label htmlFor="username">UserName</label>
      <input type="text" {...register('username')}/>
    </div>
    <div  className="form-group">
      <label htmlFor="email">Email</label>
      <input type="text" {...register('email')}/>
    </div>
    <div  className="form-group">
      <label htmlFor="password">Password</label>
      <input type="text" {...register('password')}/>
    </div>
    <button>Submit</button>
    </div>
    </form>
    <DevTool control={control}/>
    </>
  )
}

