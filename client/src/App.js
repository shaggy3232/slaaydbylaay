import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch,Link,Redirect  } from "react-router-dom"
import Mainpage from "./Pages/homepage/homepage";
import Nopagefound from "./Pages/404/404";


function App() {
  return (
    <React.Fragment>
       
    <Router>
      <Switch>
      <Route exact path="/" component = {Mainpage}/>
      <Route exact path= "/404" component ={ Nopagefound}></Route>  
      <Redirect to ="/404"/>   
      </Switch>
    </Router>
    
    </React.Fragment>
  );
}

export default App;
