import React from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import Form from "./Form";
import { Text, Button } from '@chakra-ui/react'
import { Card, CardBody} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cart, totalPrice, clearCart  } = useCartContext();

    const [orderId, setOrderId] = useState("");

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (cart.length === 0) {
        return (
                <Card>
                    <Text>No tenes ningun producto</Text>
                    <Link to="/">
                        <Button colorScheme='yellow'>Ir al inicio</Button>
                    </Link>
                </Card>
                    )}

    if (orderId) 
    {
        return (
            <Card as='b' >
                <CardBody>
                    <Text className="com-herra">
                        Muchas gracias por tu compra. Te dejamos el codigo de seguimiento : {orderId}
                    </Text>
                </CardBody>
            </Card >

        );
    }

    return (
            <div >
                <div className="form-herra">
                    <Form handleId={handleId} />
                </div>
                <div className="form-herra">
                    {cart.map((producto) => (
                        <CartItem key={producto.id} producto={producto} />
                    ))}
                    <Text fontSize='xl'>Total a pagar : ${totalPrice()}</Text>{" "}
                </div>
                
            </div>
    );
};

export default Checkout;
