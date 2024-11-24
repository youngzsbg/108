import "./App.css";
import React from "react";
import Navbar from './components/navbar.jsx';
import Footer from "./components/footer.jsx";
import Catalog from "./pages/catalog.jsx";
import About from "./pages/about.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Admin from "./pages/admin.jsx";




function App(){
  return(
    
    <div className= "App">
      <Navbar></Navbar>
      <Catalog></Catalog>
      <Admin></Admin>
      <About></About>
      <Footer></Footer>      
     </div>
  );
}

export default App;
