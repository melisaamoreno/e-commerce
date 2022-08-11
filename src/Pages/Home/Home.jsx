import {
  Box,
  Grid,
  Heading,
  Image,
  Container,
  VStack,
  Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Carousel from '../../Components/Carousel/Carousel'

export const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(
      'https://strapiecommerce-production-4333.up.railway.app/api/products?populate=categories&populate=image'
    )
      .then((res) => res.json())
      .then((info) => setData(info))
  }, [])

  return (
    <>
      {/*<Carousel></Carousel>*/}
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

                  <Button margin="15px">Ver detalles</Button>
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
