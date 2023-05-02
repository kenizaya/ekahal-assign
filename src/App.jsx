import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import useFetchTodos from './hooks/useFetchTodos'
import Table from './components/Table'
import Search from './components/Search'
import TableMobile from './components/TableMobile'

// Header image
// table 5 columns, 10 rows,
// data from a free api,
// mobile responsive
// sort and search
// change background color of table when hovering on header

const URL = 'https://give-me-users-forever.vercel.app/api/users/0/next'

const App = () => {
  const { data, loading, error } = useFetchTodos(URL)
  const [query, setQuery] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  const [showMobile, setShowMobile] = useState(false)
  const [changeBackground, setChangeBackground] = useState(false)

  useEffect(() => {
    if (data) setFilteredData(data.users.slice(0, 10))
  }, [data])

  useEffect(() => {
    if (data) setFilteredData(data.users.slice(0, 10))

    if (query)
      setFilteredData(
        data.users
          .slice(0, 10)
          .filter(
            (item) =>
              item.FirstNameLastName.toLowerCase()
                .split(' ')
                .includes(query.toLowerCase()) ||
              item.FirstNameLastName.toLowerCase()
                .split(' ')[0]
                .startsWith(query.toLowerCase())
          )
      )
  }, [query])

  const handleWindowSizeChange = () => {
    setShowMobile(window.innerWidth <= 1200)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  if (loading) return <div>Loading</div>
  if (error) return <div>Error</div>

  // console.log(filteredData)

  return (
    <div className='flex flex-col gap-10 w-full max-w-[1300px] mx-auto p-5 pb-8 '>
      <Header setChangeBackground={setChangeBackground} />
      <Search setQuery={setQuery} />
      {filteredData &&
        (showMobile ? (
          <TableMobile data={filteredData} />
        ) : (
          <Table
            data={filteredData}
            setFilteredData={setFilteredData}
            changeBackground={changeBackground}
          />
        ))}
    </div>
  )
}

export default App
