import "./App.css";
import Navbar from './components/navbar.jsx';
import Footer from "./components/footer.jsx";
import Catalog from "./pages/catalog.jsx"

function App(){
  return(
    
    <div className= "App">
      <Navbar></Navbar>
      <h1>Hello World React!</h1>
      <Catalog></Catalog>
      <Footer></Footer>      
      
    </div>
  );
}

export default App;
