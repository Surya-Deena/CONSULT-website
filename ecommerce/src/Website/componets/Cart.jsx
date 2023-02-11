import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delItem, minus, plus } from "../redux/actions";

const Cart = () => {
  const state = useSelector((state) => state.addItems);
  const count = useSelector((state) => state.counts);
  const dispatch = useDispatch();
  

  const handleClose = (item) => {
    dispatch(delItem(item));
    return;
  };

  var total = 0;
  var i = 0;
  var col=0;
  const itemList = (item) => {
    i++;
    var cal=count*item.price
    total += cal ;
    return (
      <>
        <li className="list-group-item d-flex justify-content-between lh-sm ">
          <div>
            <h6 className="float-start">{i} .</h6>
            <h6 className="my-0 float-end ms-2 ">{item.title}</h6>
          </div>
          <span className="text-muted">₹{cal}</span>
        </li>
      </>
    );
  };

  const cartItems = (cartItem) => {
    const btnMinus=(count)=>{
      (count===1)?dispatch(delItem(cartItem)):dispatch(minus(cartItem)) 
    };
    
    col= count * (cartItem.price)
    return (
      <>
        <div className="px-4 my-5 py-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container py-4">
            <button
              onClick={() => handleClose(cartItem)}
              className="btn-close float-end "
              aria-label="close"
            ></button>
            <div className="row justify-content-center ">
              <div className="col-md-4">
                <img
                  src={cartItem.img}
                  alt={cartItem.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-5">
                <h3>{cartItem.title}</h3>
                <div className="px-4 bg-light rounded-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-8">
                      <p className="lead fw-bold">
                        {count} X ₹ {cartItem.price} = ₹ {col}
                      </p>
                      </div>
                      <div className="col-4">
                      {(count===1)?<button
                        className="btn btn-outline-dark me-4"
                        onClick={() =>dispatch(delItem(cartItem))}
                      >
                        <i className="fa fa-trash" />
                      </button>:
                      <button
                        className="btn btn-outline-dark me-4"
                        onClick={() =>btnMinus(count)}
                      >
                        <i className="fa fa-minus" />
                      </button>}
                      {(count>9)?
                      <button className="btn btn-outline-muted me-4" disabled><i className="fa fa-plus"/></button>:
                      <button
                        className="btn btn-outline-dark me-4"
                        onClick={() => dispatch(plus())}
                      >
                        <i className="fa fa-plus" />
                      </button>
                        }
                      </div>
                    </div>
                  </div>
                  <p>{cartItem.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  const emptyCart = () => {
    return (
      <>
        <div className="px-4 my-5 py-5 bg-light reounded-3 ">
          <div className="container py-4">
            <div className="row">
              <h1>Your Cart is Empty</h1>
            </div>
          </div>
        </div>
      </>
    );
  };

  const checkin = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && (
        <div className="container list-group mb-3 w-50">
          {state.map(itemList)}
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (INR)</span>
            <strong>₹{total}</strong>
          </li>
        </div>
      )}
      {state.length !== 0 && checkin()}
    </>
  );
};

export default Cart;
