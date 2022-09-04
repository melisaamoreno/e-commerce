import {
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { Login } from './Login'
import { Register } from './Register'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import { IoIosLogOut } from 'react-icons/io'

function ModalAuth() {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const logoutClick = () => {
    dispatch(logout())
  }
  return (
    <>
      {user ? (
        <IoIosLogOut size="20px" onClick={logoutClick} />
      ) : (
        <>
          <BiUserCircle
            size="20px"
            onClick={() => {
              setOverlay(<OverlayOne />)
              onOpen()
            }}
          />

          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Tabs>
                  <TabList>
                    <Tab>Iniciar sesión</Tab>
                    <Tab>Registrarse</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Login />
                    </TabPanel>
                    <TabPanel>
                      <Register />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  )
}

export default ModalAuth
