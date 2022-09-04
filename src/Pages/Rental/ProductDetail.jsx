import { useState, useEffect } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import {
  Image,
  Heading,
  Text,
  Button,
  HStack,
  Container,
  useToast,
} from '@chakra-ui/react'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

export const ProductDetail = (params) => {
  const toast = useToast()
  const [details, setDetail] = useState(null)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`http://localhost:1337/api/products/${id}?populate=image`)
      .then((res) => res.json())
      .then(setDetail)
  }, [params])

  if (!details) {
    return null
  }

  const handleAddToCart = () => {
    dispatch(addToCart(details?.data))
    toast({
      title: 'Producto agregado',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <HStack
      w="100%"
      borderRadius="10px"
      color="black"
      padding="10%"
      display="flex"
    >
      <Container>
        <Image
          borderRadius="10px"
          mr="10px"
          w="350px"
          src={details.data.attributes.image.data.attributes.url}
        />
      </Container>

      <Container>
        <Heading fontSize="25px">{details.data.attributes.title}</Heading>
        <Text mt="10px">{details.data.attributes.description}</Text>
        <Text fontWeight="bold" mt="5px">
          Precio por día:
        </Text>
        <Text>${details.data.attributes.price}</Text>

        {
          <Button
            bg="red.300"
            mt="10px"
            size="lg"
            onClick={() => handleAddToCart(details)}
          >
            <BsCart4 size="25px" />
          </Button>
        }
      </Container>
    </HStack>
  )
}
