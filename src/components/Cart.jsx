import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { Button, Card, Text, CardHeader } from '@chakra-ui/react'
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    if (cart.length === 0) {
        return (
            <Card>
                <CardHeader>
                    No tenes ningun producto en el carrito!
                </CardHeader>
                <Link to="/">
                    <Button colorScheme={"yellow"}>Ir a comprar </Button>
                </Link>
            </Card>
        );
    }

    return (
        <div className="cart-herra">
            {cart.map((producto) => (
                <CartItem key={producto.id} producto={producto} />
            ))}
            <div>
                <div>
                <Text fontSize='2xl'>Total a pagar: ${totalPrice()}</Text>
                </div>
                <div>
                    <Button colorScheme='yellow' onClick={clearCart}>
                        Limpiar carrito
                    </Button>
                </div>
                <div>
                    <Link to="/checkout">
                        <Button colorScheme='green'>Finalizar compra</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
