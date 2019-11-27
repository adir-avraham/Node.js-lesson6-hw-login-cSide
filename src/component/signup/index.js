import React, {useState} from 'react';
import axios from 'axios';
import useCustomForm from '../../hooks/useCustomForm'



const registerUrl = ('http://localhost:4000/register')


export default function SignUp(props) {

const initialState = {
  fullName: "",
  age: "",
  email: "",
  password: "",
}

const [data, handleChange] = useCustomForm(initialState);
const [message, setMessage] = useState('Hello!'); 


const handleRegister = async (data) => {
  const result = await axios.post(registerUrl, data)
  if (result.data.details) {
    console.log(result)
    props.history.push('/register');
    const {message} = result.data.details[0];
    setMessage(message) 
  } else {
  const {redirect, message} = result.data
  if (redirect) {
    props.history.push('/login')
  } else {
    console.log(result)
    props.history.push('/register')
    setMessage(message)
  }
}}


  return (
    <div className="container">
    <div className="row justify-content-md-center">
      <div className="text-center col-lg-4">
        <form className="form-signin">
          <img className="mb-4" src="https://www.fundraisingdirectory.com.au/wp-content/uploads/2018/12/signup-new-logo-announcement.png" alt="" width="272" height="92" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
          <label htmlFor="fullName" className="sr-only">Full Name </label>
          <input  
          id="fullName" 
          className="form-control" 
          placeholder="Full name"
          name="fullName" 
          required
          onChange={handleChange}
          />
          <label htmlFor="inputAge" className="sr-only">Age</label>
          <input  
          id="inputAge" 
          className="form-control" 
          placeholder="Age"
          name="age" 
          required
          onChange={handleChange}
          />
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input  
          id="inputEmail" 
          className="form-control" 
          placeholder="Email address"
          name="email" 
          required
          onChange={handleChange}
          />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          name="password"
          required
          onChange={handleChange}
          />
          <div className="checkbox mb-3">
          {message === "Hello!" ? <span>{message}</span> : <span className="text-danger">{message}</span>}
          </div>
          <button className="btn btn-lg btn-primary btn-block"
          type="button"
          onClick={()=>{
            handleRegister(data)
          }}
          >Sign up</button>
        </form>
      </div>
    </div>
  </div>
  );
}
