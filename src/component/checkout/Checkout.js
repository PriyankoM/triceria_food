import './../../App.css';
import Navbar from './../navbar/navbar';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodCart from './foodcart';
import { Container, Col, Row, Card, Button,ListGroup } from "react-bootstrap";
function Checkout(params) {
    console.log(params.match.params.data);
    let cartdata=window.atob(params.match.params.data)
    cartdata=JSON.parse(cartdata);
    let totalprice=0;
    cartdata.forEach(ele => {
        totalprice=totalprice+(ele.quantity*ele.priceunit);
        
    });
    let gst=(totalprice*0.18)


    return (<div className="App">
  <Navbar />
  <Container style={{backgroundColor: 'rgb(242, 242, 242)'}}>
    <Row>
      <Col style={{backgroundColor: 'rgb(242, 242, 242)'}} sm={9}>
        <div  className="row">
          {
            cartdata.map((item, key) =>
              <FoodCart
                item={item}
              />
            )
          }
        </div>
      </Col>
      <Col sm={3}>
        <Card className="my-2" style={{ width: '18rem',height:'20rem' }}>
          <Card.Body>
           <Card.Title>Price Details</Card.Title>
    <ListGroup variant="flush">
  <ListGroup.Item className="row">Total Price  <p1 className="pricestyle">{'\u20B9'}{totalprice}</p1></ListGroup.Item>
  <ListGroup.Item className="row">GST (18%)<p1 className="pricestyle">{'\u20B9'}{gst}</p1></ListGroup.Item>
  <br/>
  <ListGroup.Item className="row">Grand Total  <p1 className="pricestyle">{'\u20B9'}{totalprice+gst}</p1></ListGroup.Item>
  
</ListGroup>      
          </Card.Body>
          <Button variant="success">Place order</Button>
        </Card></Col>
    </Row>
  </Container>

  {/* </div>
  </div> */}

</div>
  );

}

export default Checkout;
