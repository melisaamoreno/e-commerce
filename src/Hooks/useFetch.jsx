import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const useFetch = (params) => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const [error, setError] = useState()
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(
      'http://localhost:1337/api/products?pagination[limit]=9&populate=image'
    )
      .then((res) => res.json())
      .then((info) => {
        setData(info)
        setError(null)
      })

      .catch((err) => {
        setError(err)
      })
  }, [params])

  return { data, error, id, page, setPage }
}
