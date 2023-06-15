import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./test.css";

function Test() {
  const seats = [1, 2, 3, 4, 5, 6];
  const childno = 4;
  const adult = 10;
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    gender: "",
    course: "",
    ticket: "",
    adult: "",
    child: "",
    childCount: "",
    seat: [],
    total:"",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    setUser(data);
  };
  return (
    <div className="pt-2">
      {/* {!user.name? */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <h2 className="text-center mt-2 mb-3 fw-bold">Ticket Booking</h2>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            autoFocus
            className="w-75 ms-5 my-1"
            placeholder="Enter the Name"
            {...register("name", {
              required: "Enter the name",
              minLength: { value: 3, message: "Minimum 3 character required" },
            })}
          />
          <div className="err ms-5">{errors.name?.message}</div>
        </div>
        <div>
          <label htmlFor="number">Number :</label>
          <input
            type="number"
            className="w-75 ms-5 my-1"
            placeholder="Enter the Number"
            {...register("number", { required: "Enter the Number" })}
          />
          <div className="err ms-5">{errors.number?.message}</div>
        </div>
        <div>
          <label htmlFor="email">Email Id :</label>
          <input
            type="email"
            className="w-75 ms-5 my-1"
            placeholder="Enter the Email"
            {...register("email", { required: "Enter the Email" })}
          />
          <div className="err ms-5">{errors.email?.message}</div>
        </div>
        <div>
          <label htmlFor="gender">Gender :</label>
          <input
            type="radio"
            value="Male"
            className="ms-2"
            {...register("gender", { required: "Select the Gender" })}
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            className="ms-2"
            {...register("gender", { required: "Select the Gender" })}
          />{" "}
          Female
          <input
            type="radio"
            value="Others"
            className="ms-2"
            {...register("gender", { required: "Select the Gender" })}
          />{" "}
          Others
          <div className="err ms-5 ps-5">{errors.gender?.message}</div>
        </div>
        <div>
          <label htmlFor="course">Course :</label>
          <select
            className="ms-3"
            {...register("course", {
              required: "Select any Course",
              validate: {
                not: (val) => val !== "" || "select the course",
              },
            })}
          >
            <option value="">Select</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
          </select>
          <div className="err ms-5 ps-5">{errors.course?.message}</div>
        </div>
        <div>
          <label htmlFor="ticket">Ticket :</label>
          <input
            type="text"
            className="w-75 ms-5 my-1"
            placeholder="Enter the Ticket Count"
            {...register("ticket", {
              required: "Enter the Ticket Count",
              validate: {
                min: (val) => val >= 2 || "Minimum 2 ticket",
                max: (val) => val <= 12 || "Maximum 12 ticket",
              },
            })}
          />
          <div className="err ms-5">{errors.ticket?.message}</div>
        </div>
        <div>
          <label htmlFor="adult">Adult Count :</label>
          <input
            type="text"
            className="w-75 ms-5 my-1"
            placeholder="Enter the adult Count"
            {...register("adult", {
              required: "Enter the adult Count",
              validate: {
                zero: (val) => val >= 1 || `min 1 tickets`,
                func: (val) =>
                  val <= Number(watch("ticket")) ||
                  `Maximum ${watch("ticket")} tickets`,
              },
            })}
          />
          <div className="err ms-5">{errors.adult?.message}</div>
        </div>
        <div>
          <label htmlFor="child">child :</label>
          <input
            type="radio"
            value="Yes"
            className="ms-2"
            {...register("child", { required: "Select the Child",
            validate: {
              adult: () =>
                watch("ticket") != watch("adult") || "",
            },})}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            className="ms-2"
            {...register("child", {
              required: "Select the Child",
              validate: {
                adult: (val) =>(
                val==="No"?
                   watch("adult") === watch("ticket")||"Check Adult Count"
                  :null),
              },
            })}
          />{" "}
          No
          <div className="err ms-5 ps-5">{errors.child?.message}</div>
        </div>
        {watch("child")==="Yes"?
        (
          <div>
            <label htmlFor="childCount">Child Count :</label>
            <input
              type="text"
              className="w-75 ms-5 my-1"
              placeholder="Enter the Child Count"
              {...register("childCount", {
                required: "Enter the adult Count",
                validate: {
                  one: (val) =>
                    val>= 1||`Minimum 1 ticket`,
                  min: (val) =>
                    val >= watch("ticket") - watch("adult") ||
                    `Balance ${watch("ticket") - watch("adult")} ticket`,
                  equl: (val) =>
                    val <= watch("ticket") - watch("adult") ||
                    `min ${watch("ticket") - watch("adult")} ticket`,
                },
              })}
            />
            <div className="err ms-5">{errors.childCount?.message}</div>
          </div>
        ) : null}
        {/* Seats */}
        <div>
          <label htmlFor="seat">Seat : </label>
          <div className="ms-5">
            {seats.map((no) => (
              <span>
                <input
                  type="checkbox"
                  value={`A${no}`}
                  {...register("seat", {
                    required: "Select the Seats",
                    validate: {
                      seat: () =>
                        watch("seat").length == watch("ticket") ||
                        `Select ${watch("ticket")} Seats`,
                    },
                  })}
                />
                {` 
                A${no} `}
              </span>
            ))}
          </div>
          <div className="ms-5">
            {seats.map((no) => (
              <span>
                <input
                  type="checkbox"
                  value={`B${no}`}
                  {...register("seat", {
                    required: "Select the Seats",
                    validate: {
                      seat: () =>
                        watch("seat").length >= watch("ticket") ||
                        `Select ${watch("ticket")-watch("seat").length} Seats`,
                      max: () =>
                        watch("seat").length <= watch("ticket") ||
                        `remove ${watch("seat").length-watch("ticket")} Seats`,
                    },
                  })}
                />
                {` B${no} `}
              </span>
            ))}
          </div>
          <div className="err ms-5">{errors.seat?.message}</div>
        </div>
        <div>
          <label>Total Prize : </label>
          <span className="h5 ms-3">
            ₹ {''}
            {(user.total =user.name?
                (Number(watch("adult")) * adult) +
                (watch("child") == "Yes"
                  ? Number(watch("childCount")) * childno
                  : 0):0)
            }
          </span>
        </div>
        {/* button */}
        <button type="submit">Submit</button>
      </form>
      {/* : */}
      <div>
      <h1>Name : {user.name}</h1>
      <h1>Number : {user.number}</h1>
      <h1>Email : {user.email}</h1>
      <h1>Gender : {user.gender}</h1>
      <h1>Course : {user.course}</h1>
      <h1>Ticket : {user.ticket}</h1>
      <h1>Adult : {user.adult}</h1>
      <h1>Child : {user.child}</h1>
      {user.child==="Yes"?(
      <h1>Child Count : {user.childCount}</h1>
       ):null }
      <h1>Seat No : {user.seat.toString()}</h1>
      <h1>Total: ₹ {user.total}</h1>
      </div>
      {/* } */}
    </div>
  );
}

export default Test;
