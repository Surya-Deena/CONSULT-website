import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Display from "./Display";
//  npm i react-hook-form

function Validation() {

  const adultNo = 10;
  const childNo = 2;
  // array 
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];
  const {
    register,
    handleSubmit,
    formState: { errors },watch
  } = useForm({mode:"onChange"});
  const [user, setUser] = useState({
    name: "",
    ticket: "",
    adult: "",
    child:"",
    childCount:"",
    seat: [],
    total:"",
  });

  const onSubmit=(data)=>{
    setUser(data);
    console.log(user);
  }

  return (
    <div className="mx-5 py-5">
      <div className="form">
        <h1 className="text-center pt-3">Ticket Booking</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 py-4">
          <div className="grp">
            <label>User Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", {
                required: "Enter the name",
                minLength: { value: 3, message: "min 3 character required" },
              })}
            />
            <p> {errors.name?.message}</p>
          </div>
          <div className="grp">
            <label>No.of.ticket :</label>
            <input
              type="text"
              id="ticket"
              name="ticket"
              {...register("ticket", {
                required: "Enter the No of ticket",
                validate: {
                  // two, val are user given name
                  two9: (val) => {
                    return  val >= 2 || "enter min 2 tickets";
                  },
                  twl: (val) => {
                    return val <= 10 || "max 10 tickets";
                  },
                },
              })}
            />
            <p> {errors.ticket?.message}</p>
          </div>
          <div className="grp">
            <label>Adult : </label>
            <input
              type="text"
              name="adult"
              id="adult"
              {...register("adult", { required: "Enter the Adult count",
              validate:{
                zero:(val)=>{
                  return val>=1 || `Min ticket limit 1`
                },
                max:(val)=>{
                  // watch - usage is take that field name's value
                  return val<=Number(watch("ticket")) || `Max ticket limit ${watch("ticket")}`
                },
              }
              })}
            />
            <p> {errors.adult?.message}</p>
          </div>
          {/* {watch("ticket")!==watch("adult")? */}
          <div className="radio">
            <label>is Child : </label>
            <input
              type="radio"
              id="yes"
              name="child"
              value="yes"
              {...register("child", { required: "select" })}
            />{" "}
            yes
            <input
              type="radio"
              id="no"
              name="child"
              value="no"
              {...register("child", { required: "Select child" })}
            />
            No
            {watch("child")==="yes" 
            ? // ternery opt
            (
              <div className="grp">
                <label className="w-100">child tickets : </label>
                <input
                  type="text"
                  className="w-50 ms-5"
                  id="childCount"
                  name="childCount"
                  {...register("childCount", {
                    required: "Enter the Child count",  
                    validate:{
                      max:(val)=>{
                        return val<=Number(watch("ticket"))-(watch("adult")) ||`Ticket limit ${watch("ticket")-watch("adult")}`
                      },
                      miss:(val)=>{
                      return val>=Number(watch("ticket"))-(watch("adult"))|| `${(watch("ticket"))-(watch("adult"))-val} ticket is Balance`
                      }
                      }
                    }
                  )}
                />
                <p> {errors.childCount?.message}</p>
              </div>
            ) : null}
            <p>{errors.child?.message}</p>
          </div>
         {/* :null} */}
          <div className="radio">
            <label className="w-100">Seat No:</label>
            {arr.map((no) => (
              <span>
                <input type="checkbox" id="seat" className="me-1" name="seat" value={`A-${no}`} {...register("seat",{required:"select the seats",
                //
                validate:{
                  seat:()=>{
                    return watch("seat").length==watch("ticket")||`Your ticket limit ${watch("ticket")} seats`
                  }
                }
                //
              })}/>
                 A-{no}
              </span>
            ))}
            <p>{errors.seat?.message}</p>
          </div>
          <div className="radio mb-3">
            <label>Price : </label>
            <span className="h5" id="price">
              ₹ {user.total = (adultNo * Number(user.adult) +
                (watch("child")=="yes" ? childNo * Number(user.childCount) : 0))}
            </span>
          </div>
          <div className="button h5 ">
            {/* <Link to={<Display/>}> */}
             <button type="submit" href={<Display/>}>Submit</button>
            {/* </Link> */}
          </div>
        </form>
      </div>
      <Display user={user}/>
    </div>
  );
}

export default Validation;
