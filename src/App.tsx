import React from 'react';
import Navbar from './component/navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './component/signup';
import SignIn from './component/signin';

const App: React.FC = () => {
  return (
    <div>


      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/Signin" component={SignIn} />      
          <Route path="**" component={SignUp} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
