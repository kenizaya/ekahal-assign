import { useEffect, useState } from 'react'

const colors = [
  'bg-[#002159]',
  'bg-[#01337D]',
  'bg-[#03449E]',
  'bg-[#0552B5]',
  'bg-[#0967D2]',
  'bg-gray-100',
]

const Table = ({ data, setFilteredData, changeBackground }) => {
  const [sortOrder, setSortOrder] = useState('asc')

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const compareUsers = (a, b) => {
    if (sortOrder === 'asc') {
      return a.FirstNameLastName.localeCompare(b.FirstNameLastName)
    } else {
      return b.FirstNameLastName.localeCompare(a.FirstNameLastName)
    }
  }

  useEffect(() => {
    setFilteredData((prev) => prev.sort(compareUsers)), [sortOrder]
  })

  return (
    <table className='border-collapse w-full text-sm text-blue-900 tracking-wide rounded-lg border-1 border-gray-200 table-fixed shadow-md'>
      <thead>
        <tr className='bg-gray-100 text-gray-600 uppercase text-xs font-bold'>
          <th
            colSpan={2}
            className='py-4 px-2 bg-gray-100 cursor-pointer hover:underline'
            onClick={() => toggleSortOrder()}
          >
            Name
          </th>
          <th className='py-4 px-2 bg-gray-100 cursor-pointer hover:underline'>
            Job
          </th>
          <th className='py-4 px-2 bg-gray-100 cursor-pointer hover:underline'>
            Company
          </th>
          <th className='py-4 px-2 bg-gray-100 cursor-pointer hover:underline'>
            Email
          </th>
          <th className='py-4 px-2 bg-gray-100 cursor-pointer hover:underline'>
            Phone
          </th>
        </tr>
      </thead>
      <tbody className='bg-white'>
        {data.map((user) => {
          return (
            <tr
              key={user.ID}
              className={`${
                changeBackground ? 'even:bg-[#BAE3FF]' : 'even:bg-gray-100'
              } even:text-gray-600 bg-white text-gray-700`}
            >
              <td colSpan={2} className='py-3 px-2 text-center'>
                {user.FirstNameLastName}
              </td>
              <td className='py-3 px-2 text-center'>{user.JobTitle}</td>
              <td className='py-3 px-2 text-center'>{user.Company}</td>
              <td className='py-3 px-2 text-center'>{user.Email}</td>
              <td className='py-3 px-2 text-center'>{user.Phone}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
