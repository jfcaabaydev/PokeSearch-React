import { useState, useEffect } from "react";
import SearchView from "./components/SearchView";
import DetailView from "./components/DetailView";



function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  
  useEffect(() => {
  async function fetchPokemonList() {
    // fetch from the server and save inside data variable
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();

    // fetch all individual pokemon details at once
    const details = await Promise.all(
      data.results.map(pokemon => 
        fetch(pokemon.url)
        .then(res => res.json())
      )
    );

    // save to state - this triggers a re-render with the data.
    setAllPokemon(details);
    setFilteredPokemon(details);
} 
fetchPokemonList(); 
}, []);
  

  function handleSearch(query) { 
    // filter allPokemon by name
    const filtered = allPokemon.filter(p => 
      p.name.includes(query.toLowerCase())
    );
    // update filteredPokemon state - triggers re-render with filtered list
    setFilteredPokemon(filtered);
  }

  return (
    <>
      <h1>PokéSearch</h1>
      {selectedPokemon ? (
        <DetailView pokemon={selectedPokemon} onBack={() => setSelectedPokemon(null)} />
      ) : (
        <SearchView onSearch={handleSearch} pokemonList={filteredPokemon} onSelectPokemon={(pokemon) => setSelectedPokemon(pokemon)} />
      )}
    </>
  )
}

export default App
