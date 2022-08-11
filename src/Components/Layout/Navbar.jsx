import { Heading, HStack, Link, Text } from '@chakra-ui/react'
import { BsCart4 } from 'react-icons/bs'
import { BiMoon } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import ModalAuth from '../Auth/ModalAuth'
// import { HiOutlineSun } from 'react-icons/hi'

export const Navbar = () => {
  return (
    <HStack
      justifyContent="space-between"
      color="white"
      bg="black"
      p="30px"
      borderBottom="1px solid white"
    >
      <Heading>
        <NavLink to="/">Ojo de pez</NavLink>
      </Heading>

      <HStack>
        <NavLink to="productos">Rental</NavLink>
        <Text>|</Text>
        <NavLink to="nosotros">Nosotros</NavLink>
        <Text>|</Text>
        <Link>
          <BsCart4 size="20px" />
        </Link>
        <ModalAuth />
        <BiMoon size="20px" />
      </HStack>
    </HStack>
  )
}
