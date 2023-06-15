import React from 'react';
import { useForm } from 'react-hook-form'


function UseForm() {
  const {register, handleSubmit,formState:{errors}}=useForm();
  
  return (
    <div>
      <form onSubmit={handleSubmit((data)=>{console.log(data)})}>
        <label>User Name</label>
        <input type='text' id='username' 
        {...register("username",{require:"enter valid User Name",minLength:{value:4,message:"min 4 character required"}})}
         />
         <p>{errors.username?.message}</p>
        <label>Email id</label>
        <input type='text' id='email' 
        {...register("email",{require:"enter valid Email id",minLength:{value:4,message:"min 4 character required"},pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,message:"valid formate"}})}
         />
         <p>{errors.email?.message}</p>
        <label>Phone Number</label>
        <input type='number' id='number' 
        {...register("number",{require:"enter valid Phone Number",minLength:{value:9,message:"min 9 digits required"}})}
         />
         <p>{errors.number?.message}</p>
        <label>Age</label>
        <input type='number' id='age' maxLength={4} minLength={1}
        {...register("age",{require:"enter valid Age",minLength:1, maxLength:{value:3,message:"max 3 digits only required"}})}
         />
         <p>{errors.age?.message}</p>
         <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default UseForm