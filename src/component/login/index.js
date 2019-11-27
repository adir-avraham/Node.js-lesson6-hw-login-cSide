import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import useCustomForm from '../../hooks/useCustomForm'
import useCustomClick from '../../hooks/useCustomClick';



const logInUrl = ('http://localhost:4000/login')


export default function Login(props) {

  const initialState = {
    email: "",
    password: "",
  }

  const [data, handleChange] = useCustomForm(initialState);
  const [element, handleClick] = useState("");
  const [message, setMessage] = useState('Hello');
  const [clicks, setClicks] = useState(0);

  const handleLogin = async (data) => {
    const result = await axios.post(logInUrl, data)
    const { redirect, message, token } = result.data
    if (redirect) {    
      props.history.push('/home')
      localStorage.setItem('token', token);
    } else {
      props.history.push('/login')
      setMessage(message)
    }
  }



  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="text-center col-lg-4">
          <form className="form-signin">
            <img className="mb-4" src="https://d1fklm6vjp0pky.cloudfront.net/wysiwyg/ves_gosmart/loginlogo-mobile.png" alt="" width="92" height="92" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <input
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              name="email"
              required
              onChange={handleChange}
            />
            <input type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              name="password"
              required
              onChange={handleChange}
            />
            <div className="checkbox mb-3">
              {message === "Hello" ? <span>{message}</span> : <span className="text-danger">{message}</span>}
            </div>
            <div className="custom-control custom-checkbox my-1 mr-sm-2">
              <input type="checkbox" className="custom-control-input" id="customControlInline"
              onChange={() => {if (!localStorage.getItem("user")) {localStorage.setItem('user', JSON.stringify(data))
            } else {
                localStorage.removeItem("user");
              } 
            }}
              />
                <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
              </div>
              <div style={{display:"inline-block"}}>
                {clicks === 0 ? <div></div> : <div>{clicks} Faield login</div>} 
              </div>
              <button className="btn btn-lg btn-primary btn-block mt-2"
                type="button"
                onClick={(e) => {
                  handleLogin(data)
                  setClicks(clicks + 1)
                  const { target } = e
                  handleClick(target)
                  console.log(element)
                }}
              >Sign in</button>
            </form>
          </div>
        </div>
      </div>

      );
    }
  
  
