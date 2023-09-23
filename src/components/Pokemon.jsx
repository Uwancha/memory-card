import React from "react";
import "../styles/style.css"

function Pokemon({pokemon}) {
    console.log(pokemon)
    return (
      <div className="card">
        <img src={pokemon.url} className="img" />
        <h2>{pokemon.name}</h2>
      </div>  
    )
    
}

export { Pokemon }