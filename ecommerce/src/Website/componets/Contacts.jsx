import React from 'react';
import Form from 'react-bootstrap/Form';

export const Contacts = () => {
  return (
    <>
    <div className="container mb-3 py-5">
      <div className="row">
        <div className="col-12 text-center py-4 my-4">
          <h1>Have Some Questions?</h1><hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center">
          <img src="" alt="" height="300px" width="400px" />
        </div>
        <div className="col-md-6">
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="name" placeholder="User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </Form>
        </div>
      </div>
    </div>
    </>
  )
}
