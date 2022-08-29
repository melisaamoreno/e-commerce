import { useState, useEffect } from 'react'

export const useFetch = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState()
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch(
      `http://localhost:1337/api/products?pagination[start]=${page}&pagination[limit]=9&populate=image`
    )
      .then((res) => res.json())
      .then((info) => {
        setData(info)
        setError(null)
      })

      .catch((err) => {
        setError(err)
      })
  }, [page])

  return { data, error, page, setPage }
}
