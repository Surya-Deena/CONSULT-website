import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const Login = () => {

  // const [log,setLog]=useState("Login")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // setLog("Logout");
  };


  return (
    <>
      <button className="btn btn-outline-dark me-2" onClick={handleShow}>
       <i className="fa fa-sign-in"/> Login
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="butns">
                <Button className="w-100 mb-4" href="https://accounts.google.com/v3/signin/identifier?dsh=S-1560161059%3A1676039905646234&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dchrome-profile-chooser%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession"><i className="fa fa-google me-2"/>Sign in with Google</Button>
                <Button className="w-100 mb-4" href="https://www.facebook.com/login/"><i className="fa fa-facebook me-2"/>Sign in with Facebook</Button>
            </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <button className="btn btn-outline-dark w-100" type="submit">Submit</button>              
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
