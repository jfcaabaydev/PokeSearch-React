import './PokemonCard.css'

function PokemonCard({name, sprite, onClick}) {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <img src={sprite} alt={name} />
      <p>{name}</p>
    </div> 
  )
}

export default PokemonCard;