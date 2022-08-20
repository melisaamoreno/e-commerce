import {
  Heading,
  Input,
  Box,
  VStack,
  Image,
  Button,
  Container,
  Grid,
  Alert,
} from '@chakra-ui/react'

import { useFetch } from '../../Hooks/useFetch'
import { NavLink } from 'react-router-dom'

export const Products = () => {
  const { data, error, page, setPage } = useFetch()

  return (
    <>
      <VStack>
        <Input w="300px" placeholder="Buscar" mt="15px"></Input>
      </VStack>

      <VStack>
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
        <Button mr="20px" ml="15px" onClick={() => console.log('click')}>
          Prev
        </Button>
        <Button mr="20px" ml="15px" onClick={() => console.log('click')}>
          Next
        </Button>
      </Box>
    </>
  )
}
