import React from "react";
import "../styles/style.css"

function Card({pokemon, handleClick}) {
    
    return (
      <div className="card" onClick={() => handleClick(pokemon)}>
        <img src={pokemon.url} crossOrigin="anonymous" className="img" />
        <h2>{pokemon.id}</h2>
      </div>
    )
    
}

export { Card }