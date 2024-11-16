import "./styles/quantityPicker.css"
import { useState } from "react";
import React from "react";

function QuantityPicker(){

    const [quantity, setQuantity] = useState(1);

    function increase(){
        const val = quantity + 1;
        setQuantity(val);
    }
    
    function decrease(){
        if(quantity === 1) return;

        const val = quantity - 1;
        setQuantity(val);
    }
    return(

        <div className= "qt-picker">
            <button className= "btn btn-sm btn-outline-dark" onClick= {decrease} disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button className= "btn btn-sm btn-outline-dark" onClick= {increase}>+</button>
        </div>

    );
}

export default QuantityPicker;