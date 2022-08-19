import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  HStack,
  Container,
  Box,
  Image,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'

export const ProductDetail = (params) => {
  const [details, setDetail] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:1337/api/products?populate=image&filters[id]=${id}`)
      .then((res) => res.json())
      .then(setDetail)
  }, [params])

  if (!details) {
    return null
  }

  return (
    <HStack>
      <Container
        mt="50px"
        borderRadius="10px"
        color="black"
        padding="2%"
        display="flex"
        key={details.id}
      >
        <Box>
          <Image borderRadius="10px" mr="10px" w="500px" />
        </Box>
        <Container>
          <Box>
            <Heading fontSize="25px" padding="5px">
              {details.id}
            </Heading>
            <Text>{details.description}</Text>
          </Box>
          <Button>Soy un boton</Button>
        </Container>
      </Container>
    </HStack>
  )
}
