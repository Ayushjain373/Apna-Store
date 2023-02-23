import React from "react";

const CartReducer = (state, action) => {
  //action deine krta hai kya hai kya nhi hai

  switch (action.type) {
    case "Add_To_Cart":
      let { id, color, amount, product } = action.payload;

      let exixtingProd = state.cart.find((curele) => curele.id === id + color);

      let cartProduct;
      if (exixtingProd) {
        let updated_Existing_Product = state.cart.map((curele) => {
          if (curele.id === id + color) {
            let newAmount = curele.amount + amount;

            if (newAmount >= curele.max) {
              newAmount = curele.max;
            }

            return {
              ...curele,
              amount: newAmount,
            };
          } else {
            return {
              ...curele,
            };
          }
        });

        return {
          ...state,
          cart: updated_Existing_Product,
        };
      } else {
        cartProduct = {
          id: id + color,
          name: product.name,
          amount,
          color,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
      }

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    case "Remove_Item":
      const updatedCart = state.cart.filter((curele) => {
        return curele.id !== action.payload;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    case "Clear_Cart":
      return {
        ...state,
        cart: [],
      };

    case "Set_Decrement":
      let updatedData = state.cart.map((curele) => {
        if (curele.id === action.payload) {
          let decAmount = curele.amount - 1;

          if (decAmount <= 0) {
            decAmount = 1;
          }

          return {
            ...curele,
            amount: decAmount,
          };
        } else {
          return curele;
        }
      });

      return {
        ...state,
        cart: updatedData,
      };
    case "Set_Increment":
      let updated = state.cart.map((curele) => {
        if (curele.id === action.payload) {
          let incAmount = curele.amount + 1;

          if (incAmount >= curele.max) {
            incAmount = curele.max;
          }

          return {
            ...curele,
            amount: incAmount,
          };
        } else {
          return curele;
        }
      });

      return {
        ...state,
        cart: updated,
      };
    case "Cart_Total_Item":
      let updatedItemValue;

      
        updatedItemValue = state.cart.reduce((initialValue,curele)=>{

          console.log(curele)
   
          let {amount} = curele
   
          initialValue = initialValue+amount;
   
          return initialValue;
   
       },0)
      
      
    

      return {
        ...state,
        total_items: updatedItemValue,
      }
     case "Cart_Total_Price":
      let totalPrice=0;

    
        totalPrice  = state.cart.reduce((initalValue,curele)=>{

          let{price,amount} = curele;

          initalValue = initalValue+(price*amount);

          return initalValue

        },0)
       
      return{

        ...state,
        total_amount:totalPrice,

      }

    // case "CART_ITEM_PRICE_TOTAL":
    //   let total_item, total_price
    // if(state.cart!==null)
    // {
    //    { total_item, total_price } = state.cart.reduce(
    //     (accum, curElem) => {
    //       let { price, amount } = curElem;

    //       accum.total_item += amount;
    //       accum.total_price += price * amount;

    //       return accum;
    //     },
    //     {
    //       total_item: 0,
    //       total_price: 0,
    //     }
    //   );
    // }
    //   return {
    //     ...state,
    //     total_items:total_item,
    //     total_amount: total_price,
    //   };

    default:
      return { ...state };
  }
};

export default CartReducer;
