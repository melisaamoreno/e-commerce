import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import { GiRobotAntennas } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

export const Error = () => {
  return (
    <VStack color="white" m="10%" h="100%">
      <GiRobotAntennas size="50px" />
      <Heading color="red.600">404</Heading>
      <Text>Lo siento, parece que la página que estas buscando no existe</Text>
      <Button bg="red.600">
        {' '}
        <NavLink to="/">Volver</NavLink>
      </Button>
    </VStack>
  )
}
