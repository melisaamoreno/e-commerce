import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { Box, Image } from '@chakra-ui/react'

export const Carousel = () => {
  const [image, setImage] = useState([])
  useEffect(() => {
    fetch('http://localhost:1337/api/carousels?populate=image')
      .then((res) => res.json())
      .then((data) => setImage(data))
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Box p="20px" w="100%">
      {image.data && (
        <Slider {...settings}>
          {image.data.map((img) => (
            <Box key={img.id}>
              <Image
                w="100%"
                display="flex"
                h="fit-content"
                src={img.attributes.image.data.attributes.formats.large.url}
              />
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  )
}
