import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
    Center,
    Button
} from '@chakra-ui/react'

const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);

    const { addItem } = useCartContext();

    function onAdd(quantity) {
        setGoToCart(true);
        addItem(item, quantity);
    }

    return (
        <Center>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '400px' }}
                src={item.imagen}
                alt='Caffe Latte'
            />
            <Stack>
                <CardBody>
                    <Heading>{item.titulo}</Heading>
                    <Heading>${item.precio}</Heading>
                    <Text>{item.descripcion}</Text>
                </CardBody>
                {goToCart ? (
                    <div>
                            <Link to="/cart">
                                <Button colorScheme="yellow">Ir al carrito</Button>
                            </Link>
                        <Link to="/">
                        <Button colorScheme="red">
                            Seguir comprando
                        </Button>
                        </Link>
                        </div>
                        
                ) : (
                    <div>
                        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                    </div>
                )}
            </Stack>
        </Card>
        </Center>
    );
};

export default ItemDetail;