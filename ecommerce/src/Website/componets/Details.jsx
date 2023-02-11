import React, {useState } from "react";
import { useParams } from "react-router";
import { Data } from "./Data";
import { useDispatch } from "react-redux";
import { addItem,delItem } from "../redux/actions/index";

export const Details = () => {

    const [cartBtn,setCartBtn]=useState("Add to Cart");

  const proid = useParams();
  const proDetail = Data.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);
  const dispatch=useDispatch();

  const handleCart=(product)=>{    
    if(cartBtn === "Add to Cart"){
      dispatch(addItem(product));
    setCartBtn("Remove from Cart");
  }else{
    dispatch(delItem(product));
    setCartBtn("Add to Cart");
  }
  }
  return (
    <>
      <div className="container py-5 my-5 ">
        <div className="row ">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="lead fw-bold">₹ {product.price}</h2>
            <p>{product.desc}</p>
            <button className="btn btn-outline-primary " onClick={()=>handleCart(product)}>{cartBtn}</button>
          </div>
        </div>
      </div>
    </>
  );
};
