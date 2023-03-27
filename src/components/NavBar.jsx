import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import {
    Flex,
    Box,
    Spacer,
    Heading,
    Container,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from "@chakra-ui/react";

const NavBar = () => {
    const { cart } = useCartContext();

    return (<>
        <Container maxW="150rem" bg="red" color="#262626">
            <Flex alignItems="center" gap="2">
                <Box p="10" w="300px" h="100">
                    <Heading size="md" color={"yellow"}>
                        <Link to={"/"}>HerraMás</Link>
                    </Heading>
                </Box>
                <Spacer />
                <Box>
                    <Menu>
                        <Link to={"/"}>
                        <Button colorScheme='yellow'>Inicio</Button>
                        </Link>
                    </Menu>
                    <Menu>
                        <MenuButton
                            as={Button}
                            colorScheme='yellow'
                            m="5"
                        >
                            Categorias
                        </MenuButton>
                        <MenuList bg='yellow.400'>
                            <Link to={`/category/${"electricas"}`}>
                                <MenuItem bg='yellow.400'>Herramientas Electricas</MenuItem>
                            </Link>
                            <Link to={`/category/${"manuales"}`}>
                                <MenuItem bg='yellow.400'>Herramientas Manuales</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <div>
                    {cart.length === 0 ? null : <CartWidget />}
                </div>
            </Flex>
        </Container>
    </>
    );
};

export default NavBar;