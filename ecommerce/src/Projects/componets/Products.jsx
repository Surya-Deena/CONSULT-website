import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

export const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  },[]);

  const Loading = () => {
    return (
    <>
    <div className="col-md-3">
    <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
    <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
    <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
    <Skeleton height={350}/>
    </div>
    </>
    );
  };

  const filterProduct=(cat)=>{
    const updatedList=data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-4">
          <button className="btn btn-outline-dark" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark ms-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark ms-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark ms-2" onClick={()=>filterProduct("jewelery")}>Jewelerys</button>
          <button className="btn btn-outline-dark ms-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <Card className="h-100 text-center p-4"key={product.id}>
                  <Card.Img variant="top" src={product.image} height="250px"/>
                  <Card.Body>
                    <Card.Title>{product.title.substring(0,12)}...</Card.Title>
                    <Card.Text className="lead fw-bold">
                      ₹{product.price}
                    </Card.Text>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark" >Buy Now</NavLink>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-0">
            <h1 className="display-6 fw-bolder text-center">
              Latest Collections
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};
