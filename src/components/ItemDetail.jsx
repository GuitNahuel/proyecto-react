import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
    Center,
} from "@chakra-ui/react";
import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({ producto }) => {
    const {id,title, price, stock, category, image, description}=producto
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '400px' }}
                src={image}
                alt='Caffe Latte'
            />
            <Stack>
                <CardBody>
                    <Heading size='xl'>{title}</Heading>
                    <Text py='10'>{description}</Text>
                    <Text py='10'>CATEGORIA: {category}</Text>

                    <Heading size='l'>${price}</Heading>
                </CardBody>
                <CardFooter>
                    <Center className="card-footer">
                        <ItemCount
                            stock={stock}
                            id={id}
                            price={price}
                            name={title}
                        />
                    </Center>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default ItemDetail;
