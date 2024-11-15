import "./styles/catalog.css";
import Product from "../components/product";

function Catalog(){
    return(
        <div className="catalog">
            <h3>This is where Catalog go</h3>
            <Product></Product>
        </div>
    );
}

export default Catalog;