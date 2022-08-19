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
} from '@chakra-ui/react'
import React from 'react'
import { BsCart4 } from 'react-icons/bs'

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

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

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue">Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
