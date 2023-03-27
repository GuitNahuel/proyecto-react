import React from "react";
import { Link } from "react-router-dom";
import {
    Image,
    Card,
    CardBody,
    CardFooter,
    Stack,
    Heading,
    Divider,
    ButtonGroup,
    Button,
    Text
} from '@chakra-ui/react'

const Item = ({ info }) => {
    return (
        <div>
        <div>
            <Card maxW='sm' >
                <CardBody>
                    <Image
                        boxSize='300px'
                        src={info.imagen}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{info.titulo} </Heading>
                        <Text color='black' fontSize='2xl'>
                            ${info.precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                        <Button variant="solid" colorScheme="yellow">
                            <Link to={`/product/${info.id}`}>Detalles</Link>
                        </Button>
                </CardFooter>
            </Card>
        </div>
        </div>
    );
};

export default Item;