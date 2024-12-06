import {useState} from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props){

    const [cart, SetCart] = useState([]);
    const [user, setUser] = useState({name:"Kendall",id:678856});

    function addToCart(prod){
        console.log("Adding to cart...");
        // add prod to the cart state variable
        // 3 steps
        let copy = [...cart];
        copy.push(prod);
        SetCart(copy);

    }
    function removeFromCart(){
        console.log("Removing from cart...")

    }
    function clearCart(){
        console.log("Cart Cleared!")

    }


    return(
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default GlobalProvider;