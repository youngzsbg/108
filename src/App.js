import "./App.css";
import React from "react";
import Navbar from './components/navbar.jsx';
import Footer from "./components/footer.jsx";
import Catalog from "./pages/catalog.jsx";
import About from "./pages/about.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Admin from "./pages/admin.jsx";
import Home from "./pages/home.jsx";
import Cart from "./pages/cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalProvider from "./components/context/globalProvider.jsx";
import ShoppingList from "./pages/shoppinglist.jsx";



function App(){
  return(
    <GlobalProvider>
      <BrowserRouter>
        <div className= "App">
          <Navbar/>
          
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/home" element={<Home/>}> </Route>
            <Route path="/catalog" element={<Catalog/>}> </Route>
            <Route path="/admin" element={<Admin/>}> </Route>
            <Route path="/about" element={<About/>}> </Route>
            <Route path="/cart" element={<Cart/>}> </Route>
            <Route path="/list" element={<ShoppingList/>}> </Route>
          </Routes>
                      
          <Footer/>      
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
