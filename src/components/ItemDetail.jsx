import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
    Divider,
    Button,
    Center,
    Flex,
    ButtonGroup,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const ItemDetail = ({ data }) => {

    const { id } = useParams();

    const dataFilter = data.filter((dato) => dato.id == id);

    return (
        <>
            {dataFilter.map((dato) => (
                <div key={dato.id}>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '400px' }}
                            src={dato.image}
                            alt='Caffe Latte'
                        />
                        <Stack>
                            <CardBody>
                                <Heading size='xl'>{dato.title}</Heading>
                                <Text py='10'>{dato.description}</Text>
                                <Text py='10'>CATEGORIA: {dato.category}</Text>

                                <Heading size='l'>${dato.price}</Heading>
                            </CardBody>
                            <CardFooter>
                            <Link to={`/cart`}>
                                <Button variant='solid' colorScheme='blue'>
                                    Agregar al Carrito
                                </Button>
                            </Link>
                            </CardFooter>
                        </Stack>
                    </Card>
                </div>
            ))}
        </>
    );
};

export default ItemDetail;
