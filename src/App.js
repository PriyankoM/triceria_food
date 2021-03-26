import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Checkout from './component/checkout/Checkout';
import Home from "./Home";
function App() {

  return (<>
    
    <BrowserRouter>
 
    <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/checkout/:data" component={Checkout} />
     </Switch>
  
  </BrowserRouter>
    </>
  );
}

export default App;
