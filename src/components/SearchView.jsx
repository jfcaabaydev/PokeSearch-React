import SearchBar from "./SearchBar";
import PokemonGrid from "./PokemonGrid";
import './SearchView.css'

function SearchView({onSearch, pokemonList, onSelectPokemon}) {

  return (
  <div className="search-view">
    <SearchBar onSearch={onSearch}/>
    <PokemonGrid pokemonList={pokemonList} onSelectPokemon={onSelectPokemon}/>
  </div>
  )
}

export default SearchView;