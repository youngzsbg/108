import "./styles/catalog.css";
import Product from "../components/product";
import React from "react";

function Catalog(){
    return(
        <div className="content">
            <div>
                <h1>This is where Catalog go</h1>
            </div>
            <div>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
           
        </div>
    );
}

export default Catalog;