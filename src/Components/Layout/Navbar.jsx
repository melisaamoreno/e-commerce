import { HStack, Text, useColorMode, Icon, Box } from '@chakra-ui/react'
import { BsSunFill } from 'react-icons/bs'
import { RiCameraLensFill } from 'react-icons/ri'
import { BiMoon } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import ModalAuth from '../Auth/ModalAuth'
import { Cart } from '../Cart/Cart'

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack justifyContent="space-between" color="white" bg="#001219" p="30px">
      <Box display="flex" flexDirection="row">
        <RiCameraLensFill size="45px" color="#f4a261" />
        <Text as="ins" fontSize="30px" ml="10px">
          <NavLink to="/">Ojo de pez</NavLink>
        </Text>
      </Box>

      <HStack>
        <NavLink to="/">Home</NavLink>
        <Text>|</Text>
        <NavLink to="productos">Rental</NavLink>
        <Text>|</Text>

        <Cart />
        <ModalAuth />

        <Icon color="white" onClick={toggleColorMode}>
          {colorMode === 'light' ? (
            <BiMoon size="25px" />
          ) : (
            <BsSunFill size="25px" />
          )}
        </Icon>
      </HStack>
    </HStack>
  )
}
