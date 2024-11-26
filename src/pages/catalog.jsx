import "./styles/catalog.css";
import Product from "../components/product";
import React, { useEffect } from "react";
import { useState } from "react";
import dataService from "../services/dataService";

function Catalog() {

    const [catalog, setCatalog] = useState([]);
    const [categories, setCategories] = useState([]);


    function loadData() {
        let productList = dataService.getProducts();
        setCatalog(productList);

        let categoriesList = dataService.getCategories();
        setCategories(categoriesList);

    }

    useEffect(function () {
        //when page loads
        loadData();

    }, [])

    if (!catalog.length) return "Loading...";

    return (
        <div className="content page">
            <div>
                <h1>This is where Catalog go</h1>
            </div>
            <div className="filters">
                {categories.map(cat => <button>{cat}</button>)}
            </div>
            
            <div>
               
               {catalog.map(prod => <Product data={prod}></Product>)}
            </div>

        </div>
    );
}

export default Catalog;