import {
  Heading,
  Input,
  Box,
  VStack,
  HStack,
  Image,
  Button,
  Container,
  Grid,
  Alert,
  Center,
} from '@chakra-ui/react'

import { useFetch } from '../../Hooks/useFetch'
import { NavLink } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'

export const Products = () => {
  const {
    data,
    error,
    page,
    setPage,
    setFilterProducts,
    //setFilterPrice,
  } = useFetch()

  return (
    <>
      <VStack>
        <HStack>
          <Center>
            <BiSearchAlt2 size="30px" />
            <Input
              w="600px"
              ml="10px"
              placeholder="Buscar producto"
              mt="10px"
              onChange={(e) => setFilterProducts(e.target.value)}
            ></Input>
          </Center>
        </HStack>

        {data.data && (
          <Grid templateColumns="repeat(3, 1fr)" gap={4} p="10px">
            {data.data.map((product) => (
              <Container
                w="400px"
                bg="gray.900"
                borderRadius="10px"
                padding="2%"
                display="flex"
                justifyContent="space-between"
                key={product.id}
              >
                <Box
                  bg="gray.900"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Heading
                    fontSize="20px"
                    padding="5px"
                    color="white"
                    bg="gray.900"
                  >
                    {product.attributes.title}
                  </Heading>

                  <Button margin="15px">
                    <NavLink to={`${product.id}`}>Ver detalles</NavLink>
                  </Button>
                </Box>

                <Image
                  w="200px"
                  src={product.attributes.image.data.attributes.url}
                />
              </Container>
            ))}
          </Grid>
        )}
        {error && <Alert>Ha ocurrido un error</Alert>}
      </VStack>

      <Box display="flex" justifyContent="center" padding="20px">
        <Button mr="20px" ml="15px" onClick={() => setPage(page - 1)}>
          Anterior
        </Button>
        <Button mr="20px" ml="15px" onClick={() => setPage(page + 1)}>
          Siguiente
        </Button>
      </Box>
    </>
  )
}
