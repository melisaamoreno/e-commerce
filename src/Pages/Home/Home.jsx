import {
  Box,
  Grid,
  Heading,
  Image,
  Container,
  VStack,
  Button,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Carousel } from '../../Components/Carousel/Carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useFetch } from '../../Hooks/useFetch'

export const Home = () => {
  const { data } = useFetch()

  return (
    <>
      <Carousel />
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
                    <NavLink to={`productos/${product.id}`}>
                      Ver detalles
                    </NavLink>
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
      </VStack>
    </>
  )
}
