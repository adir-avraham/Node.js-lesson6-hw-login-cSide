import React from 'react';
import Navbar from './component/navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './component/signup';
import Login from './component/login';
import HomePage from './component/home'

const App: React.FC = () => {
  return (
    <div>


      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />      
          <Route path="/home" component={HomePage} />      
          <Route path="**" component={SignUp} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
