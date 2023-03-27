import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { Image, Box, Center,Text, AbsoluteCenter, Flex, Heading } from '@chakra-ui/react'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        const querybd = getFirestore();
        const queryCollection = collection(querybd, "productos");

        if (categoria) {
            const queryFilter = query(
                queryCollection,
                where("categoria", "==", categoria)
            );
            getDocs(queryFilter).then((res) =>
                setItems(
                    res.docs.map((product) => ({ id: product.id, ...product.data() }))
                )
            );
        } else {
            getDocs(queryCollection).then((res) =>
                setItems(
                    res.docs.map((product) => ({ id: product.id, ...product.data() }))
                )
            );
        }
    }, [categoria]);

    return (

        <div>
            <Center>
                <Heading fontSize='4xl' color="red">HerraMás</Heading>
                <Box boxSize='xl'>
                    <Image src="https://arcencohogar.vtexassets.com/arquivos/ids/327033-600-600?v=637944645787400000&width=600&height=600&aspect=true" alt='Herramienta' />
                </Box>
            </Center>
            <div className="shop-items">
                <ItemList productos={items} />
            </div>

        </div>
    );
};

export default ItemListContainer;