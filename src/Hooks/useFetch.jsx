import { useState, useEffect } from 'react'
import qs from 'qs'

export const useFetch = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState()
  const [page, setPage] = useState(0)
  const [filterProducts, setFilterProducts] = useState('')
  const [filterCategories, setFilterCategories] = useState('')
  //const [filterPrice, setFilterPrice] = useState(0)

  const filterProduct = qs.stringify(
    {
      filters: {
        title: {
          $containsi: `${filterProducts}`,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  )

  const filterCategory = qs.stringify(
    {
      filters: {
        categories: {
          name: {
            $containsi: `${filterCategories}`,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  )

  useEffect(() => {
    fetch(
      // url de aldi `http://localhost:1337/api/products?populate=image&populate=categories&${page}&${filtersProducts}&${filtersCategories}&${filtersPrice}`
      `http://localhost:1337/api/products?pagination[start]=${page}&populate=image&populate=categories&pagination[limit]=9&${filterProduct}&${filterCategory}`
    )
      .then((res) => res.json())
      .then((info) => {
        setData(info)
        setError(null)
      })

      .catch((err) => {
        setError(err)
      })
  }, [page, filterProducts])

  return {
    data,
    error,
    page,
    setPage,
    setFilterProducts,
    setFilterCategories,
    //setFilterPrice,
  }
}
