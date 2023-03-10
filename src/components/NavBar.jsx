import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
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
    Avatar,
} from "@chakra-ui/react";

const NavBar = () => {
    return (
        <>
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
                                <MenuButton
                                    color="white"
                                    as={Button}
                                    size="md"
                                    variant="outline"
                                    colorScheme="black"
                                    m="5"
                                >
                                    Inicio
                                </MenuButton>
                            </Link>
                        </Menu>
                        <Menu>
                            <Link to={"/catalogue"}>
                                <MenuButton
                                    color="white"
                                    as={Button}
                                    size="md"
                                    variant="outline"
                                    colorScheme="black"
                                    m="5"
                                >
                                    Catalogo
                                </MenuButton>
                            </Link>
                        </Menu>
                        <Menu>
                            <MenuButton
                                color="white"
                                as={Button}
                                size="md"
                                variant="outline"
                                colorScheme="black"
                                m="5"
                            >
                                Categorias
                            </MenuButton>
                            <MenuList className="menu-list">
                                <Link to={`/category/${"electricas"}`}>
                                    <MenuItem>Herramientas Electricas</MenuItem>
                                </Link>
                                <Link to={`/category/${"manuales"}`}>
                                    <MenuItem>Herramientas Manuales</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Spacer />
                    <Box p="10" w="300px" h="100">
                        <Link to={"/cart"}>
                            <CartWidget />
                        </Link>
                    </Box>
                </Flex>
            </Container>
        </>
    );
};

export default NavBar;
