import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("valid name"),
  number: yup
    .string()
    .required("valid number")
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      "enter valid number"
    ),
  email: yup.string().required("valid mail").email("email required"),
  first:yup.string().required(),
  second:yup.string().required(),
  third:yup.string().required(),
  password: yup
    .string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, "enter valid password"),
  conpass: yup.string().oneOf([yup.ref("password")], "password must be match"),
});

function NewValidation() {
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    first:"",
    second:"",
    password: "",
    conpass: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handle = (data) => {
    setUser(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handle)}>
        <div className="grp">
          <label>User Name</label>
          <input type="text" id="name" {...register("name")} />
          <span>{errors.name?.message}</span>
        </div>
        <div className="grp">
          <label>Phone Number</label>
          <input type="text" id="number" {...register("number")} />
          <span>{errors.number?.message}</span>
        </div>
        <div className="grp">
          <label>Email</label>
          <input type="email" id="email" {...register("email")} />
          <span>{errors.email?.message}</span>
        </div>
        <div className="grp">
          <label id="check">Course
          <input type="checkbox" id="first" className="ms-1" value="first" /> java
          <input type="checkbox" id="second" className="ms-3" value="second" /> javascript
          <input type="checkbox" className="ms-3" id="third" value="third" /> React
          </label>
          <span>{errors.check?.message}</span>
        </div>
        <div className="grp">
          <label>Password</label>
          <input type="password" id="password" {...register("password")} />
          <span>{errors.password?.message}</span>
        </div>
        <div className="grp">
          <label>Confirm Password</label>
          <input type="password" id="conpass" {...register("conpass")} />
          <span>{errors.conpass?.message}</span>
        </div>
        <button type="submit">sign in</button>
      </form>
      <h1>Name : {user.name}</h1>
      <h1>Number : {user.number}</h1>
      <h1>Email : {user.email}</h1>
      <h1>Password : {user.password}</h1>
      <h1>Confirm Password : {user.conpass}</h1>
    </div>
  );
}

export default NewValidation;
