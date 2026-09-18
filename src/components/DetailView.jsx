import './DetailView.css'

function DetailView({pokemon, onBack}) {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Name: {pokemon.name}</p>
      <p>{pokemon.types.map(t => t.type.name).join(", ")}</p>
      <p>Height: {pokemon.height}, Weight: {pokemon.weight}</p>
      <p>{pokemon.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join(" | ")}</p>
      <button className="back-button" onClick={onBack}>← Back</button>
    </div>
  )
}

export default DetailView;