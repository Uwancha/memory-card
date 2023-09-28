import React from "react";
import "../styles/style.css"

function Card({pokemon, flippedCards, handleClick}) {
    const isFliped = flippedCards.includes(pokemon)
    
    return (
      <div className="card" style={{pointerEvents: isFliped ? 'none' : 'auto'}} onClick={() => handleClick(pokemon)}>
        <img src={isFliped ? pokemon.back.url: pokemon.front.url} crossOrigin="anonymous" className="img" />
        <h2>{isFliped ? pokemon.back.id: pokemon.front.id}</h2>
      </div>
    )
    
}

export { Card }