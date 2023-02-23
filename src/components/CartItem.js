import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../Context/CartContext'
import CardAmountToggle from './CardAmountToggle'
import FormatPrice from './FormatPrice'

const CartItem = ({id,name,image,color,price,amount}) => {


    const {removeProduct,setIncrease, setDecrease}  = useCartContext();

  
  return (
    <div className='cart_heading grid grid-five-column'>

        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt="img"/>
                </figure>
            </div>

            <div>
                <p>{name}</p>
                <div className='color-div'>
                    <p>color:</p>
                    <div className="color-style" style={{
                        backgroundColor:color, color:color,
                    }}></div>

                </div>
            </div>
        </div>


        <div className="cart-hide">
            <p><FormatPrice price={price}/></p>
        </div>


        <CardAmountToggle  amount={amount} setDecrease={()=>setDecrease(id)} setIncrease={()=>setIncrease(id)} />



        <div className="cart-hide">
            <p><FormatPrice price={price*amount}/></p>
        </div>

        <div>
        <FaTrash className='remove_icon' onClick={()=> removeProduct(id)}/>
        </div>

     

    </div>
  )
}

export default CartItem