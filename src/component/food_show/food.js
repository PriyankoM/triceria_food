import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './food.css';
import { Card, Button } from 'react-bootstrap';
import Dropdown from './dropdown'
function FoodCard(params) {
    let [quantity, quantityset] = useState(0);
    let [lquantity, lquantityset] = useState(0);
    let [mquantity, mquantityset] = useState(0);
    let [squantity, squantityset] = useState(0);
    const [dropvalue, changevalue] = useState("Medium");
    function plusquentity(p) {
        if(dropvalue==="Large"){
            lquantity = lquantity + 1;
            lquantityset(lquantity);
            quantityset(lquantity)
            params.insertdata({"size":dropvalue,"id":params.item.id,"quantity":lquantity,"priceunit":params.item.size[dropvalue],"name":params.item.name})

        }
         else if(dropvalue==="Medium"){
            mquantity=mquantity+1;
            mquantityset(mquantity);
            quantityset(mquantity);
            params.insertdata({"size":dropvalue,"id":params.item.id,"quantity":mquantity,"priceunit":params.item.size[dropvalue],"name":params.item.name})
        }
        else{
            squantity=squantity+1;
            squantityset(squantity);
            quantityset(squantity);
            params.insertdata({"size":dropvalue,"id":params.item.id,"quantity":squantity,"priceunit":params.item.size[dropvalue],"name":params.item.name})
        }
        

    }
    function minusquentity(p) {
        if(dropvalue==="Large"){
            lquantity = lquantity - 1;
            lquantityset(lquantity);
            quantityset(lquantity);
            params.removedata({"size":dropvalue,"id":params.item.id,"quantity":lquantity,"priceunit":params.item.size[dropvalue],"name":params.item.name});

        }
         else if(dropvalue==="Medium"){
            mquantity=mquantity-1;
            mquantityset(mquantity);
            quantityset(mquantity);
            params.removedata({"size":dropvalue,"id":params.item.id,"quantity":mquantity,"priceunit":params.item.size[dropvalue],"name":params.item.name});
        }
        else{
            squantity=squantity-1;
            squantityset(squantity);
            quantityset(squantity);
            params.removedata({"size":dropvalue,"id":params.item.id,"quantity":squantity,"priceunit":params.item.size[dropvalue],"name":params.item.name});
        }

    }
    
    function handelChange(parameter) {
        changevalue(parameter.target.value);
        if(parameter.target.value==="Small"){quantityset(squantity)}
        else if(parameter.target.value==="Large"){quantityset(lquantity)}
        else {quantityset(mquantity)}


    }
    

    return (
        
        <Card className="mx-4 my-4" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{params.item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Price {params.item.size[dropvalue]}</Card.Subtitle>
                <div className="row size_q">
                    <div className="size_q">
                        <p1>Size</p1>
                        <br />
                        <Dropdown size={params.item.size} dropvalue={dropvalue} handelChange={handelChange}/>
                    </div>
                    {quantity === 0 ? <div className="size_q2"> <Button onClick={plusquentity} variant="outline-success">add</Button> </div> : <div className="size_q3">

                        <p1>Quantity</p1>
                        <br />
                        <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                            <button type="button" onClick={minusquentity} className="btn btn-outline-success">-</button>
                            <button type="button" className="btn btn-outline-success">{quantity}</button>
                            <button type="button" onClick={plusquentity} className="btn btn-outline-success">+</button>
                        </div>
                    </div>}

                </div>
            </Card.Body>

        </Card>
    )

}
export default FoodCard;