import {
  Heading,
  Input,
  Text,
  Slider,
  SliderTrack,
  Box,
  SliderThumb,
  SliderFilledTrack,
  VStack,
  Image,
  Button,
  Container,
  Grid,
  Alert,
} from '@chakra-ui/react'

import { useFetch } from '../../Hooks/useFetch'

export const Products = () => {
  const { data, error, page, setPage } = useFetch()

  return (
    <>
      <VStack m="20px">
        <Heading color="black">Productos</Heading>
        <Input w="300px" placeholder="Buscar"></Input>
        <Text color="black">Filtrar por precio</Text>
        <Slider defaultValue={10} min={0} max={300} step={30} w="400px">
          <SliderTrack bg="red.900">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="tomato" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
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
        {error && <Alert>Ha ocurrido un error</Alert>}
      </VStack>
      <Container display="flex" justifyContent="center" padding="20px">
        Prev{' '}
        <Button
          mr="20px"
          ml="15px"
          bg="white"
          onClick={() => setPage(page - 1)}
        >
          {'<'}
        </Button>
        <Button
          mr="20px"
          ml="15px"
          bg="white"
          onClick={() => setPage(page + 1)}
        >
          {' >'}
        </Button>
        Next
      </Container>
    </>
  )
}
