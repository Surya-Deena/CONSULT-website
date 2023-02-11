import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Cartbtn = () => {

  const state=useSelector((state)=>state.addItems)//write the name of the file name not the function name
  return (
    <>
      <button className=" btn btn-outline-dark ms-1">
        <NavLink className="nav-link" to="/cart">
          <span className="fa fa-shopping-cart me-1" />
          Cart ({state.length})
        </NavLink>
      </button>
    </>
  );
};
