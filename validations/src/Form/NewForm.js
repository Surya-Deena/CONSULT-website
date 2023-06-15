import React from 'react'
import { useForm } from 'react-hook-form'

function NewForm() {
    const {register,handleSubmit,formState:{errors}}=useForm({mode:'onTouched'})
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
        <label>Name</label>
        <input type='text' {...register("name",{required:"Enter the details ", minLength:{value:3,message:"min 3 char"}})} />
        <p>{errors.name?.errors}</p>
        </div>
        <div>
        <label>Number</label>
        <input type='text' {...register("number",{required:"Enter the details ", minLength:{value:3,message:"min 3 char"}})} />
        <p>{errors.name?.errors}</p>
        </div>
        <div>
        <label>Name</label>
        <input type='text' {...register("name",{required:"Enter the details ", minLength:{value:3,message:"min 3 char"}})} />
        <p>{errors.name?.errors}</p>
        </div>
        <button type='submit'>Save</button>
    </form>
    </>
  )
}

export default NewForm