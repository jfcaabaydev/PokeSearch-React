import './SearchBar.css'

function SearchBar({onSearch}) {
  return (
    <div className="search-bar-container">
      <input className="search-input" type="search" placeholder="Search Pokemon..." onChange={(e) => onSearch(e.target.value)} />
    </div>
  )
}

export default SearchBar;