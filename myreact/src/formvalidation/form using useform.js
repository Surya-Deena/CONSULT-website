import React, { useState } from 'react'
import {useForm}from 'react-hook-form'
import './form.css'

function Formvalidate() {
  const{register,handleSubmit,errors}=useForm()
  const onSubmit=(data)=>{
    console.log(data);
  }

  return (
    <div className='head'>
      <h1 className='text-center my-3'>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div >
          <label>User Name</label>
          <input type='text' name='name' placeholder='User Name' 
          ref={register({required:"user name is required",
          minlenght:{value:4,message:"min 4 character required",
          maxlenght:{value:20,message:"20 character only accepted"}}})} />
        </div>
        <p>{errors.name?.message}</p>
        <div>
          <label>Phone Number</label>
          <input type='number' name='number' placeholder='Phone Number'
          ref={register({required:'Phone number is required',
          minlenght:{value:10,message:"10 character required",
          maxlenght:{value:10,message:"10 character required"}}})} />
        </div>
        <p>{errors.number?.message}</p>
        <div>
          <label>Email Id</label>
          <input type='email' name='email' placeholder='Email Id' ref={register({required:"user name is required",
          minlenght:{value:10,message:"min 4 character required",
          maxlenght:{value:30,message:"20 character only accepted"}},
          pattern:"/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"})} />
        </div>
        <p>{errors.email?.message}</p>
        <div>
          <label>Password</label>
          <input type='password' name='password' placeholder='Password' 
          ref={register({required:"user name is required",
          minlenght:{value:4,message:"min 4 character required",
          maxlenght:{value:20,message:"20 character only accepted"}},
          pattern:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"})} />
        </div>
        <p>{errors.password?.message}</p>
        <button className='container-fluid'>Submit</button>
      </form>
    </div>
  )
}
export default Formvalidate