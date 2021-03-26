import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './foodcart.css';
function FoodCart(params){

    return(
        <Card className="mx-2 my-2" style={{width:'45rem'}}>
  <Card.Header>{params.item.name}</Card.Header>
  <Card.Body className="inerdiv row" >
  <div >
      <p1>Total Quantity</p1>
      <br/>
      <p1>{params.item.quantity}</p1>
    </div>
    <div className="rohan2">
      <p1>Size</p1>
      <br/>
      <p1>{params.item.size}</p1>
    </div>
    <div className="rohan3">
      <p1>Total Price</p1>
      <br/>
      <p1>{params.item.quantity*params.item.priceunit}</p1>
    </div>
  </Card.Body>
</Card>
    )

}
export default FoodCart;