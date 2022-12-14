import { HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
} from 'react-icons/ai'

export const Footer = () => {
  return (
    <HStack justifyContent="space-between" color="white" bg="#001219" p="30px">
      <Text>Hecho por Melisa Moreno - 2022</Text>

      <HStack>
        <Link>
          <AiOutlineTwitter size="20px" />
        </Link>
        <Link>
          <AiFillYoutube size="20px" />
        </Link>
        <Link>
          <AiOutlineInstagram size="20px" />
        </Link>
      </HStack>
    </HStack>
  )
}
