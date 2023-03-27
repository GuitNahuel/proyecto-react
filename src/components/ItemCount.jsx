import React from "react";
import { useState } from "react";
import {Text, ButtonGroup,Button, Center, Tag} from "@chakra-ui/react";

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);

    function aumentar() {
        if (count < props.stock) {
            setCount(count + 1);
        }
    }

    function disminuir() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <ButtonGroup  isAttached variant="outline">
                    <Button  colorScheme='red' onClick={disminuir}>
                    -
                    </Button>
                    <Tag>
                    {count}
                    </Tag>
                    <Button  colorScheme='green' onClick={aumentar}>
                    +
                    </Button>
                    <Button
                        onClick={() => props.onAdd(count)}
                    >
                        Agregar al carrito
                    </Button>
                <Center>
                    <Tag>
                    El stock disponible es: {props.stock} unidades
                    </Tag>
                    </Center>
                    
        </ButtonGroup>
    );
};

export default ItemCount;
