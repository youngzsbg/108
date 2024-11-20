import "./styles/product.css";
import QuantityPicker from "./quantityPicker";
import React from "react";


function Product(props){
    return(
        <div className="product">
            <span>ID: {props.data._id}</span>
            <img src={props.data.image} alt=""/>
            <h3>{props.data.title}</h3>
            
            <div className="prices">
                <label className="total">${props.data.price}</label>
                <label className="unit">${props.data.price}</label>
            </div>
            <div className="parent">  
                <QuantityPicker></QuantityPicker>
                <button className = "btn btn-sm btn-success">Add</button>
            </div> 
        </div>
    );
}

export default Product;