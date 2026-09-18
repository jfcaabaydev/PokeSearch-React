import PokemonCard  from "./PokemonCard";
import './PokemonGrid.css'

function PokemonGrid({pokemonList, onSelectPokemon}) {


  return (
    <div className="pokemon-grid">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} sprite={pokemon.sprites.front_default} onClick={() => onSelectPokemon(pokemon)} />
      ))}
    </div>
  )
}

export default PokemonGrid;