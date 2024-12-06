import { Link } from "react-router-dom";
import "./styles/home.css"


function Home(){
    return(
    <div className="home page">

        <h1>Welcome to the Home Page</h1>
        <div className="top-images">
            
            <img src="/images/lady.jpg" alt="" />
            
        
        </div>
        <div className="button">

             <Link className="btn btn-info" to="/catalog">Explore Our Catalog</Link>
        </div>
        <h2>Enjoy our lovely Selection</h2>
        
    </div>
  );  
}
export default Home;