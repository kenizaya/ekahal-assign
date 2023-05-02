const TableMobile = ({ data }) => {
  return (
    <>
      {data.map((user) => {
        return (
          <div
            key={user.ID}
            className='w-full max-w-[500px] mx-auto border border-gray-200 rounded-lg p-4 text-sm even:bg-gray-100
           even:text-gray-600'
          >
            <div className='flex justify-between items-center mb-2 '>
              <h3 className='text-gray-600 font-medium uppercase text-xs tracking-widest'>
                Name
              </h3>
              <p>{user.FirstNameLastName}</p>
            </div>
            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-gray-600 font-medium uppercase text-xs tracking-widest'>
                Job Title
              </h3>
              <p>{user.JobTitle}</p>
            </div>
            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-gray-600 font-medium uppercase text-xs tracking-widest'>
                Company
              </h3>
              <p>{user.Company}</p>
            </div>
            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-gray-600 font-medium uppercase text-xs tracking-widest'>
                Email
              </h3>
              <p>{user.Email}</p>
            </div>
            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-gray-600 font-medium uppercase text-xs tracking-widest'>
                Phone
              </h3>
              <p>{user.Phone}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default TableMobile
