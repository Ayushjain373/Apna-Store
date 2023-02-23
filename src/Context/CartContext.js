import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer"
const CartContext = createContext();


const getLocalCartData = ()=>{

    let newCartData = localStorage.getItem("ApnaCart")

   const parseData = JSON.parse(newCartData)
   if(!Array.isArray(parseData)) return [];


   return parseData;


}
const initalState = {

    cart: getLocalCartData(),
    total_items:0,
    total_amount:0,
    shipping_fee: 5000,

}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initalState);


    const addToCart = (id, color, amount, product) => {

        dispatch({ type: "Add_To_Cart", payload: { id, color, amount, product } });


    }


    const setIncrease=(id)=>{
        dispatch({type:"Set_Increment",payload:id})
    }

    const setDecrease=(id)=>{
        dispatch({type:"Set_Decrement",payload:id})
    }

    const removeProduct = (id) => {

        console.log(id)


        dispatch({ type: "Remove_Item", payload: id })

    }

    const clearCart = ()=>{

        dispatch({type:"Clear_Cart"})

    }
    /// to add data in localstorage

    useEffect(()=>{

        dispatch({ type: "Cart_Total_Item" });
        dispatch({ type: "Cart_Total_Price" });

        localStorage.setItem("ApnaCart",JSON.stringify(state.cart))
        

    },[state.cart])

    return <CartContext.Provider value={{ ...state, addToCart, removeProduct,clearCart,setIncrease,setDecrease }}>
        {children}
    </CartContext.Provider>
}


const useCartContext = () => {
    return useContext(CartContext)  /// gloabl context hooks 
}


export  { CartProvider, useCartContext }