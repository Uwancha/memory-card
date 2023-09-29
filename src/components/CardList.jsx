import React from "react";
import "../styles/style.css"
import { Card } from "./Card";
import Loading from "./Loading";
import { useMemo } from "react";

function CardList({pokemon, handleCardClick}) {
    const memoizedPokemon = useMemo(() => {
        return pokemon;
      }, [pokemon])
    
      return (
        <div className="lists">
          {memoizedPokemon.length === 0 ? <Loading/> : (
            memoizedPokemon.map(p => (
              <Card
                key={p.id}
                pokemon={p}
                handleClick={handleCardClick}
              />
            )) 
          )}
        </div>
      )
}

export { CardList };