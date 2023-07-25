import React from 'react'

function SearchBar({
  query,
  isLoading,
  handleSubmit,
  setQuery
}) {
  return (
    <>
    <form onSubmit ={handleSubmit}>
      <input value={query} disabled={isLoading} className="form-control" placeholder="Search Recips" onChange={(event)=>setQuery(event.target.value)}/>

      < input type="submit" className="btn" value="Search" disabled={isLoading || !query}  />
    </form>

    </>
  )
}

export default SearchBar