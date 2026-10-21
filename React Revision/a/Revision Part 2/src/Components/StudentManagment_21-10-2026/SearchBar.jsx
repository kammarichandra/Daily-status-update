
function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search-input"
      type="search"
      placeholder="Search by name, ID, or course..."
      value={search}
      onChange={event => setSearch(event.target.value)}
    />
  )
}

export default SearchBar
