import React, { useState } from "react";
import { useForm } from "react-hook-form";


function Radiobutton() {
  const {register,handleSubmit,formState:{errors}}=useForm({
    name: "",
    number: "",
    email: "",
    desc: "",
    course: "",
    agree: false,
    gender: "",
  })
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    desc: "",
    course: "",
    agree: false,
    gender: "",
  });


  const onChange = (e) => {
    const { value, name, type, checked } = e.target;
    setUser((user) => ({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const showData = (data) => {
    setUser(data)
    console.log(user);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    showData();
  };
  return (
    <div className="text-center ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name :
          <input name="name" value={user.name} type="text" onChange={onChange}  {...register('name',{required:"Enter the User name",minLength:{value:3,message:"min 3 character"}}) }/>
        <div>{errors.name?.message}</div>
        </label>
        <br />
        <label>
          Number :
          <input name="number" value={user.number} onChange={onChange} />
        </label>
        <br />
        <label>
          Email :
          <input name="email" value={user.email} onChange={onChange} />
        </label>
        <br />
        <label>
          Description :
          <input name="desc" value={user.desc} onChange={onChange} />
        </label>
        <br />
        <label>
          Course :
          <select name="course" value={user.course} onChange={onChange}>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
            <option value="Web Developer">Web developer</option>
          </select>
        </label>
        <br />
        <label className="ms-5 ps-5">
          Agree <input type="checkbox" name="agree" value={user.agree} onChange={onChange} />
        </label>
        <br />
        <label>
          Gender :
          <span className="ms-3">
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={onChange}
              checked={user.gender ==="Male"}
            /> 
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={onChange}
              checked={user.gender ==="Female"}
            /> 
            Female
            <input
              type="radio"
              name="gender"
              value="Others"
              onChange={onChange}
              checked={user.gender ==="Others"}
            /> 
            Others
            <br />
          </span>
        </label>
        <div>
          <button type="submit">onSubmit</button>
        </div>
      </form>
      
    </div>
  );
}

export default Radiobutton;
