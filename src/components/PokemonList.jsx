import React from "react";
import "../styles/style.css"
import { Pokemon } from "./Pokemon";
import Loading from "./Loading";
import { useMemo } from "react";

function PokemonList({pokemon}) {
    const memoizedPokemon = useMemo(() => {
        return pokemon;
      }, [pokemon])
    
      return (
        <div className="lists">
          {memoizedPokemon.length === 0 ? <Loading/> : (
            memoizedPokemon.map(p => (
              <Pokemon 
                key={p.name}
                pokemon={p} 
              />
            )) 
          )}
        </div>
      )
}

export { PokemonList };