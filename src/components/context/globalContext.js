import { createContext } from "react";

//Its a promise/ interface 
// its a description of the data structure
// but not implementation




const GlobalContext = createContext({
    cart:[],
    user:{},

addToCart: () => {},
removeFromCart: () => {},
clearCart: () => {}


});

export default GlobalContext;