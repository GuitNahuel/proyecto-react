import React from 'react'
import { Image, Box, Center,Text, AbsoluteCenter, Flex } from '@chakra-ui/react'

const Welcome = () => {
  return (
    <Center>
            <Text fontSize='4xl' color="red">Bienvenidos  a HerraMás</Text>
    <Box boxSize='xl'>
      <Image src="https://arcencohogar.vtexassets.com/arquivos/ids/327033-600-600?v=637944645787400000&width=600&height=600&aspect=true" alt='Herramienta' />
    </Box>
    </Center>
    
  )
}

export default Welcome