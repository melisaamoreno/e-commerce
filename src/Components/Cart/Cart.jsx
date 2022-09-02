import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Icon,
  Box,
} from '@chakra-ui/react'
import React from 'react'
import { BsCart4, BsTrash } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../../redux/slices/cartSlice'
import { NavLink } from 'react-router-dom'

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <Icon ref={btnRef} onClick={onOpen}>
        <BsCart4 size="25px" />
      </Icon>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mi Carrito</DrawerHeader>

          <DrawerBody>
            {cartItems?.map((prod) => (
              <Box
                key={prod.id}
                borderBottom="1px solid white"
                p="10px"
                display="flex"
                justifyContent="space-between"
              >
                {prod.attributes.title}

                <BsTrash
                  color="red"
                  size="20px"
                  onClick={() => dispatch(removeProduct(prod.id))}
                />
              </Box>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue">
              <NavLink to="checkout">Checkout</NavLink>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
