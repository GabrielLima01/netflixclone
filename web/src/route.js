import React from 'react';
import { BrowserRouter, Route, Switch, Link, } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

const Routes = () =>{
    return(
   <BrowserRouter>
   <Switch>
       <Route path="/" exact component={Login} />
       <Route path="/home" exact component={Home} />
       <Link to="/home">Home</Link>
   </Switch>
   </BrowserRouter>
   );
};

export default Routes;
