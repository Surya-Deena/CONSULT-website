import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react'

function End(){
    return(
        <Container fluid className='mt-5 end text-center pb-3'>
            <h1 className='text-dark pt-3'>Stay Update!!!</h1>
           <Container className='mt-3'>
           <InputGroup className="mb-3">
        <Form.Control
          placeholder="Your Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className='p-3 '
        />
        <InputGroup.Text id="basic-addon2" className='sign'>Sign Up</InputGroup.Text>
      </InputGroup>
           </Container>
        </Container>
    );
}
export default End;