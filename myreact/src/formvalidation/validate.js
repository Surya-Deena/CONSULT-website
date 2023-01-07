import React, {useState } from 'react'
import './validate.css'

function Validate() {
    const [form,setForm]=useState({name:'',email:'',password:'',conpass:''})
    const [valid,setValid]= useState({name:'',email:'',password:'',conpass:''});

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setForm({...form,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let errors=valid;
        if(!form.name){
            errors.name='user name is required';
        }else{
            errors.name='';
        }
        
        const emailCond="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
        if(!form.email){
        errors.name='user name is required'
        }else if(!form.email.match(emailCond)){
            errors.email = 'Please ingress a valid email address';
        } else {
          errors.email = '';
        }
    const cond1 = '/^(?=.*[a-z]).{6,20}$/';
    const cond2 = '/^(?=.*[A-Z]).{6,20}$/';
    const cond3 = '/^(?=.*[0-9]).{6,20}$/';
    const password = form.password;
    if (!password) {
      errors.password = 'password is required';
    } else if (password.length < 6) {
      errors.password = 'password must be longer than 6 characters';
    } else if (password.length >= 20) {
      errors.password = 'password must shorter than 20 characters';
    } else if (!password.match(cond1)) {
      errors.password = 'password must contain at least one lowercase';
    } else if (!password.match(cond2)) {
      errors.password = 'password must contain at least one capital letter';
    } else if (!password.match(cond3)) {
      errors.password = 'password must contain at least a number';
    } else {
      errors.password = '';
    }

    if (!form.conpass) {
      errors.conpass = 'password confirmation is required';
    } else if (form.conpass !== form.password) {
      errors.conpass = 'password does not match confirmation password';
    } else {
      errors.password = '';
    }

    return setValid(errors);


    }

  return (
    <div className='contaniner form text-center'>
        <h1>Form valid</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>User name :</label>
                <input type='text' placeholder='name' name='name'  onChange={(e) => handleChange(e)}
              value={form.name}
            />
            {valid.name && <p>{valid.name}</p>}
            {valid.name && console.log(valid)}
                <label>Email Id :</label>
                <input type='email' name='email'  placeholder='Email id' onChange={(e) => handleChange(e)}
              value={form.email}
              required
            />
            {valid.email && <p>{valid.email}</p>}
                <label>password :</label>
                <input type='password' placeholder='password' name='password' onChange={(e) => handleChange(e)}
              value={form.password}
              required
            />
            {valid.password && <p>{valid.password}</p>}
                <label>Confirm password :</label>
                <input type='password' placeholder='Confirm password'name='conpass' onChange={(e) => handleChange(e)}
              value={form.conpass}
              required
            
            /><br/> <br/>
            <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Validate;