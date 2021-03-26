import './App.css';
import Navbar from './component/navbar/navbar';
import React, { useState } from 'react'
import FoodCard from './component/food_show/food';
import 'bootstrap/dist/css/bootstrap.min.css';
import fooditems from './fooditems.json'
import {Col, Row, Card, Button } from "react-bootstrap";
 import {Redirect} from 'react-router-dom';


let l = [];
function Home() {
  
  const [checkoutvalue,checkoutstate]=useState(false);
  function checkoutchange(p) {
    checkoutstate(!checkoutvalue);
    
  }
  function insertdata(parameter){
      let b=true;
    l.forEach(function(i) {
      if (i.id===parameter.id && i.size===parameter.size){
        i.quantity=parameter.quantity;
        b=false
      }
    });
    if(b){
      l.push(parameter);
    }
  

  }
  function removedata(parameter){
  l.forEach(function(i,n) {
    if (i.id===parameter.id && i.size===parameter.size){
      if(parameter.quantity===0){
        l.splice(n, 1);

      }
      else{
      i.quantity=parameter.quantity;
      }
    }
  });

}


  if(checkoutvalue){
    let newl=window.btoa(JSON.stringify(l))
    return <Redirect to={`/checkout/${newl}`} />
  }
  
  return (<div className="App">
  <Navbar />
  <div style={{backgroundColor: 'rgb(242, 242, 242)'}}>
    <Row>
      <Col style={{backgroundColor: 'rgb(242, 242, 242)'}} sm={9}>
        <div  className="row">
          {
            fooditems.map((item, key) =>
              <FoodCard
                item={item}
                insertdata={insertdata}
                removedata={removedata}
              />
            )
          }
        </div>
      </Col>
      <Col sm={3}>
        <Card className="my-2" style={{ width: '18rem',height:'15rem' }}>
          <Card.Body>
            <Card.Title>My Cart</Card.Title>
            <Row>
    
    </Row>            
          </Card.Body>
          <Button onClick={checkoutchange} variant="primary">checkout</Button>
        </Card></Col>
    </Row>
  </div>

  {/* </div>
  </div> */}

</div>
  );
}

export default Home;
