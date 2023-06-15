import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Validation from './Validation';
import Display from './Display';
import { BrowserRouter } from 'react-router-dom';


function Form() {
    const [user, setUser] = useState({
        name: "",
        ticket: "",
        adult: "",
        child:"",
        childCount:"",
        seat: [],
        total:"",
      });
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Validation user={user}/>} />
        <Route path='/tickets' element={<Display/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Form