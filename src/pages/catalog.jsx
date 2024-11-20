import "./styles/catalog.css";
import Product from "../components/product";
import React, { useEffect } from "react";
import { useState } from "react";
import dataService from "../services/dataService";

function Catalog() {

    const [catalog, setCatalog] = useState([]);

    function loadData() {
        let productList = dataService.getProducts();
        setCatalog(productList);

    }

    useEffect(function () {
        //when page loads
        loadData();

    }, [])

    if (!catalog.length) return "Loading...";

    return (
        <div className="content">
            <div>
                <h1>This is where Catalog go</h1>
            </div>
            <div>
                <Product data={catalog[0]}></Product>
                <Product data={catalog[1]}></Product>
                <Product data={catalog[2]}></Product>
                <Product data={catalog[3]}></Product>
                <Product data={catalog[4]}></Product>
                <Product data={catalog[5]}></Product>
                <Product data={catalog[6]}></Product>
                <Product data={catalog[7]}></Product>
                <Product data={catalog[8]}></Product>
            </div>

        </div>
    );
}

export default Catalog;