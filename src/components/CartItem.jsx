import React from "react";
import { useCartContext } from "../context/CartContext";
import { Heading,Button, Text, Tag } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'


const CartItem = ({ producto }) => {
    const { removeItem } = useCartContext();

    const subtotal = producto.precio * producto.quantity;
    return (
        <div className="item-herra">
            <div>
            <Avatar size='2xl' alt={producto.titulo} src={producto.imagen} />
            </div>
            <div>
                <Tag size={"xl"}>
                    {producto.titulo}({producto.quantity}){" "}
                </Tag>
            </div>

            <div>
                <Tag size={"xl"}>
                    Precio: ${subtotal}
                </Tag>
            </div>
            <div>
                <Button colorScheme="red" onClick={() => removeItem(producto.id)}>
                    <SmallCloseIcon/>
                    Eliminar del carrito
                </Button>
            </div>
        </div>
    );
};

export default CartItem;
