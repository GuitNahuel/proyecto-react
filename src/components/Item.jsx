import React from 'react';
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
import { Link } from "react-router-dom"




const Item = ({ id,title, price, image}) => {
    return ( 
        <div>
        <div key={id}>
            <Card maxW='sm' >
                <CardBody>
                    <Image
                        boxSize='300px'
                        src={image}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{title}</Heading>
                        <Text color='black' fontSize='2xl'>
                            ${price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='yellow'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='black'>
                            Add to cart
                        </Button>
                        <Button variant="solid" colorScheme="yellow">
                            <Link to={`/item/${id}`}>Detalles</Link>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
        </div>
    )
}
export default Item