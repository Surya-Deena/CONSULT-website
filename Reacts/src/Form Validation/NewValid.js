import React, { useState } from "react";
import { useForm } from "react-hook-form";

function NewValid() {
  const [user, setUser] = useState({
    name: "",
    nummber: "",
    email: "",
    gender: "",
    course: "", 
    password: "",
    confirmPassword: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    name: "",
    nummber: "",
    email: "",
    gender: "male",
    course: [],
    password: "",
    confirmPassword: "",mode:"onTouched"
  });
  // const onChange=(e)=>{
  //   const {name,value}=e.target;
  //   setUser((state)=>({
  //     ...state,[name]:value,
  //   }))
  // }
  const onSubmit = (data) => {
    // e.preventDefault();
    setUser(data);
    console.log(user);
  };
  return (
    <div className="w-75 mx-auto px-5 pt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-75 mx-auto bg-light px-5 pt-4"
      >
        <div className="w-75 mx-auto">
          <label>Name :</label>
          <input
            type="text"
            name="name"
            className="w-100"
            {...register("name", { required: "Enter the Name" })}
          />
          <span className="text-danger">{errors.name?.message}</span>
        </div>
        <div className="w-75 mx-auto">
          <label>Number :</label>
          <input
            type="text"
            name="number"
            className="w-100"
            {...register("number", { required: "Enter the Number" })}
          />
          <span className="text-danger">{errors.number?.message}</span>
        </div>
        <div className="w-75 mx-auto">
          <label>Email :</label>
          <input
            type="email"
            name="email"
            className="w-100"
            {...register("email", { required: "Enter the email" })}
          />
          <span className="text-danger">{errors.email?.message}</span>
        </div>
        <div className="w-75 mx-auto">
          <label className="w-100">Gender : </label>
          <input
            type="radio"
            name="gender"
            value="male"
            className="ms-3 me-1" 
            {...register("gender", { required: "Select the Gender" })}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            className="ms-3 me-1"
            {...register("gender", { required: "Select the Gender" })}
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            value="others"
            className="ms-3 me-1"
            {...register("gender", { required: "Select the Gender" })}
          />{" "}
          Others <br />
          <span className="text-danger">{errors.gender?.message}</span>
          {
            (watch("gender")==="male")?<span>Male selected</span>:(watch("gender")==="female")?<span>Female selected</span>:(watch("gender")==="others")?<span>Others selected</span>:null
          }
        </div>
        <div className="w-75 mx-auto">
          <label className="w-100">course : </label>
          <input type="checkbox" name="course" value="MBA" {...register("course",{required:"Select any course"})} /> MBA
          <input type="checkbox" name="course" value="MCA" {...register("course",{required:"Select any course"})} /> MCA
          <input type="checkbox" name="course" value="BCA" {...register("course",{required:"Select any course"})} /> BCA
          <br/>
          <span>{
            user.course.toString()
          }</span>
          <span className="text-danger">{errors.course?.message}</span>
        </div>
        <div className="w-75 mx-auto">
          <label>Password :</label>
          <input
            type="password"
            name="password"
            className="w-100"
            {...register("password", { required: "Enter the password" })}
          />
          <span className="text-danger">{errors.password?.message}</span>
        </div>
        <div className="w-75 mx-auto">
          <label>Confirm Password :</label>
          <input
            type="password"
            name="confirmpassword"
            className="w-100"
            {...register("confirmpassword", {
              required: "Enter the confirm password",validate:{
                func:(val)=> (val===watch("password")||"not match")
                
                }
            })}
          />
          <span className="text-danger">{errors.confirmpassword?.message}</span>
        </div>
        <div className="d-flex justify-content-center py-4 ">
          <button type="submit" className="w-50 bg-info">
            Submit
          </button>
        </div>
      </form>
      <h1>Name: {user.name}</h1>
      <h1>Number: {user.number}</h1>
      <h1>Email: {user.email}</h1>
      <h1>Gender: {user.gender}</h1>
      <h1>course: {user.course.toString()}</h1>
      <h1>Password: {user.password}</h1>
      <h1>Confirm Password: {user.confirmpassword}</h1>
    </div>
  );
}

export default NewValid;
