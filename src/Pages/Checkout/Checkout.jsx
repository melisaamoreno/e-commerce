import { addItem, quitItem, removeProduct } from '../../redux/slices/cartSlice'

import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
  useToast,
} from '@chakra-ui/react'
import { BsTrash } from 'react-icons/bs'

export const Checkout = () => {
  const toast = useToast()
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)

  const orders = async () => {
    const response = await fetch('http://localhost:1337/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: { Item: cartItems } }),
    })
    const order = await response.json()
    console.log(order)
    toast({
      title: 'Reserva realizada con exito',
      description: 'Gracias por elegirnos',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <>
      <Heading p="20px">Mis pedidos</Heading>

      {cartItems?.map((item) => (
        <Grid templateColumns="repeat(5, 1fr)" gap={3} key={item.id} ml="10%">
          <GridItem>
            <Image
              w="80px"
              p="10px"
              src={item.attributes.image.data.attributes.url}
            />
          </GridItem>
          <GridItem>
            <Text mt="10px">{item.attributes.title} </Text>
          </GridItem>
          <GridItem display="flex">
            <GridItem fontSize="12px" mt="10px" mr="10px">
              Cant. de días
            </GridItem>
            <Button
              size="xs"
              borderRadius="5px"
              color="black"
              w="25px"
              m="5px"
              isDisabled={item.cartQuantity === 1}
              onClick={() => dispatch(quitItem(item.id))}
            >
              -
            </Button>
            <Box
              bg="white"
              borderRadius="5px"
              color="black"
              w="25px"
              mt="5px"
              h="25px"
              textAlign="center"
              key={item.id}
            >
              {item.cartQuantity}
            </Box>

            <Button
              borderRadius="5px"
              size="xs"
              color="black"
              w="25px"
              m="5px"
              onClick={() => dispatch(addItem(item.id))}
            >
              +
            </Button>
          </GridItem>
          <GridItem mb="-20px">
            <Button size="sm">
              <BsTrash
                color="red"
                size="20px"
                onClick={() => dispatch(removeProduct(item.id))}
              />
            </Button>
          </GridItem>
          <GridItem></GridItem>
        </Grid>
      ))}
      <Box
        display="flex"
        justifyContent="end"
        mr="150px"
        mt="20px"
        mb="20px"
        w="90%"
        p="10px"
      >
        {' '}
        <Button size="lg" colorScheme="blue" onClick={orders}>
          Reservar
        </Button>
      </Box>
    </>
  )
}
