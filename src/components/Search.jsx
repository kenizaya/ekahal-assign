const Search = ({ setQuery }) => {
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  return (
    <div
      className='
    w-full flex justify-center'
    >
      <input
        type='text'
        placeholder='Search Name'
        className='input input-bordered w-full max-w-xs'
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

export default Search
