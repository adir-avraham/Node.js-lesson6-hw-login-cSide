import React from 'react';
import axios from 'axios';


const registerUrl = ('http://localhost:4000/register ')


export default class SignUp extends React.Component <any,any> {

state = {
  fullName: "",
  age: 0,
  email: "",
  password: "",
  message: "hello"
}

handleOnChange = (event: any) =>{
  const { target } = event;
  this.setState({[target.name]: target.value})
}

handleRegister = async () => {
  const result = await axios.post(registerUrl, this.state)
  const {redirect, message} = result.data
  if (redirect) {
    alert(message)
    this.props.history.push('/login')
  } else {
    this.setState( {message: message})
  }
  console.log(this.state)
}

render() {

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
          onChange={this.handleOnChange}
          />
          <label htmlFor="inputAge" className="sr-only">Age</label>
          <input  
          id="inputAge" 
          className="form-control" 
          placeholder="Age"
          name="age" 
          required
          onChange={this.handleOnChange}
          />
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input  
          id="inputEmail" 
          className="form-control" 
          placeholder="Email address"
          name="email" 
          required
          onChange={this.handleOnChange}
          />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          name="password"
          required
          onChange={this.handleOnChange}
          />
          <div className="checkbox mb-3">
            <span>{this.state.message}</span>
          </div>
          <button className="btn btn-lg btn-primary btn-block"
          type="button"
          onClick={this.handleRegister}
          >Sign in</button>
        </form>
      </div>
    </div>
  </div>
  );
}
}