import React from 'react'
import { useContext } from 'react'
import { CartContext } from './ShoppingCartProvider'

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    console.log(cart);
    
}

export default Cart