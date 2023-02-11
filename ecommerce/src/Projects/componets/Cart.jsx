import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delCart } from "../redux/action"; 

const Cart = () => {
  const state = useSelector((state) => state.addCart);
  const dispatch = useDispatch();

  const handleClose = (product) => {
    dispatch(delCart(product));
    return;
  };

  var total = 0;
  var i = 0;
  const productList = (product) => {
    total += product.price;
    i++;
    return (
      <>
        <li className="list-group-product d-flex justify-content-between lh-sm ">
          <div>
            <h6 className="float-start">{i} .</h6>
            <h6 className="my-0 float-end ms-2 ">{product.title}</h6>
          </div>
          <span className="text-muted">₹{product.price}</span>
        </li>
      </>
    );
  };

  const products = (product) => {
    var gty=1;
    return (
      <>
        <div className="px-4 my-5 py-5 bg-light rounded-3" key={product.id}>
          <div className="container py-4">
            <button
              onClick={() => handleClose(product)}
              className="btn-close float-end "
              aria-label="close"
            ></button>
            <div className="row justify-content-center ">
              <div className="col-md-4">
                <img
                  src={product.img}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-5">
                <h3>{product.title}</h3>
                <div className="px-4 bg-light rounded-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-8">
                      <p className="lead fw-bold">
                        {gty} X ₹ {product.price} = ₹ {gty * product.price}
                      </p>
                      </div>
                      <div className="col-4">
                      <button
                        className="btn btn-outline-dark me-4"
                        onClick={() =>(product)}
                      >
                        <i className="fa fa-minus" />
                      </button>
                      <button
                        className="btn btn-outline-dark me-4"
                        onClick={() => (product)}
                      >
                        <i className="fa fa-plus" />
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

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
      {state.length !== 0 && state.map(products)}
      {state.length !== 0 && (
        <div className="container list-group mb-3 w-50">
          {state.map(productList)}
          <li className="list-group-product d-flex justify-content-between">
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
