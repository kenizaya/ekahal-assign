import React, { useEffect, useState } from 'react'

const useFetchTodos = (url) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  console.log(url)

  const fetchTodo = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()

      setData(data)
      setLoading(false)
    } catch (e) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchTodo(url)
  }, [])

  return { data, loading, error }
}

export default useFetchTodos
