import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const useFetch = (params) => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const [error, setError] = useState()
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(
      'https://strapiecommerce-production-4333.up.railway.app/api/products?populate=categories&populate=image'
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
