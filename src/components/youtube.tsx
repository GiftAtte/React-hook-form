import { useForm,useFieldArray } from 'react-hook-form';
import {DevTool} from '@hookform/devtools';
import { FormValues } from './model/user';



export const Youtube=() =>{
  const form=useForm<FormValues>({
   defaultValues:{
    username:"",
    email:"",
    password:"",
    social:{
      facebook:'',
      twitter:''
    },
   dob:new Date(),
   age:0
   }
  });
 
  const onSubmit=(data:FormValues)=>{
      console.log(data)
  }
  const {register, control,handleSubmit,formState}=form;
  const {errors}=formState;
  const {fields,append,remove}=useFieldArray({name:'phoneNumber',control})


const removeNumber=(index:number)=>remove(index) ;
const addNumber=()=>append({number:''}) ;       






  
  return (
    <div className='content'>
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="container">
    <div  className="form-group">
      <label htmlFor="username">UserName</label>
      <input type="text" {...register('username',{
        required:'username is required'
      })}/>
      <span className='text-danger'>{errors.username?.message}</span>
    </div>
    <div  className="form-group">
      <label htmlFor="email">Email</label>
      <input type="text" {...register('email')}/>
    </div>
    <div  className="form-group">
      <label htmlFor="password">Password</label>
      <input required type="text" {...register('password')}/>
    </div>
    <div  className="form-group">
      <label htmlFor="password">Facebook</label>
      <input required type="text" {...register('social.facebook')}/>
    </div>
    <div  className="form-group">
      <label htmlFor="password">Twitter</label>
      <input required type="text" placeholder='Enter twitter' {...register('social.twitter')}/>
    </div>
    <div  className="form-group">
      <label htmlFor="password">Age</label>
      <input required type="number" {...register('age',
      {required:'Age required',valueAsNumber:true})}/>
    </div>
    <div  className="form-group">
      <label htmlFor="password">Dob</label>
      <input required type="date" {...register('dob',
      {required:'Age required',valueAsDate:true})}/>
    </div>
           <div>
            <label htmlFor="phoneNumber">List Of Phone numbers</label>
            <div>
              {fields.map((field,index)=>{
                return (
                  <div className="form-group" key={field.id}> 
                    <div style={{display:'flex',gap:'10px'}}>
                    <input required type="text" {...register(`phoneNumber.${index}.number`)}/>
                    {index>0&&<button  onClick={()=>removeNumber(index)}>X</button>}
                    </div>
                   
                  </div>
                )
              })}
              <button type='button' onClick={()=>addNumber()}>Add Number</button>
            </div>
           </div>

    <button>Submit</button>
    </div>
    </form>
    <DevTool control={control}/>
    </div>
  )
}

