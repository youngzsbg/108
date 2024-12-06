import { useState } from "react";
import "./styles/shoppinglist.css";


function ShoppingList(){
    const [itemName, setItemName] = useState("");
    const [itemList, setItemList] = useState([]);
    
    function handleInputChange(e){
        const text = e.target.value;
        setItemName(text);
    }
    function addItem(){
        console.log(itemName);
        var copy = [...itemList];
        copy.push(itemName);
        setItemList(copy);
    }

     
    return(
        <div className="list page ">
            <h1>Build your Shopping List</h1>

            <div className="form"> 
                <input type="text" placeholder="Add items to your list" onBlur={handleInputChange}/>
                <button className="btn btn-sm btn-outline-dark" onClick={addItem}>Add</button>

            </div>

            <div className="items">
                <label>You have {itemList.length} items in your list</label>

                <ul>
                    {itemList.map((item, index) => <li key={index}>{item}</li>)}
                </ul>

            </div>

        </div>


    );

}

export default ShoppingList;