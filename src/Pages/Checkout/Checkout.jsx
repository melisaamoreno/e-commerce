import {
  addToCart,
  addItem,
  quitItem,
  removeProduct,
} from '../../redux/slices/cartSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { BsTrash } from 'react-icons/bs'

export const Checkout = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  console.log(cartItems)

  const sumPrices = () => {
    let sumaDeProducts = 0

    cartItems.forEach((prod) => {
      sumaDeProducts = prod.attributes.price * prod.cartQuantity
    })

    return { sumaDeProducts }
  }

  const checkout = async ({ email, password }) => {
    const response = await fetch(
      `http://localhost:1337/api/users/${id}?populate[0]=orders`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: email, password }),
      }
    )
    const user = await response.json()
    dispatch(addToCart(user))
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

          <GridItem>${sumPrices().sumaDeProducts}</GridItem>
        </Grid>
      ))}
    </>
  )
}
