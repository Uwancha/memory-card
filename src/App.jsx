import React, { useState, useEffect} from 'react'
import './App.css'
import { getPokemon } from './services/api'
import { PokemonList } from './components/PokemonList'
import shuffle from './shuffle'
import pair from './pair'

function App() {
  const [shuffledCards, setShuffledCards] = useState([])
  const [selectedCards, setSelectedCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    getPokemon().then(data => {
      const pokemon = data.results.map(p => ({
        id: p.name,
        url: p.url
      }) )
      
      const duplicated = pokemon.concat(pokemon);
      const paired = pair(duplicated);

      const shuffled = shuffle(paired);

      setShuffledCards(shuffled);
    })
  }, [])

  function handleCardClick(card) {
    if (selectedCards.length < 2) {
      setSelectedCards(prev => setSelectedCards([...prev, card]))
    }
    
    if(selectedCards.length === 2) {
      const card1 = selectedCards[0];
      const card2 = selectedCards[1];

      if (card1.back.id === card2.back.id) {
        setFlippedCards([...flippedCards, card1, card2])
      } else {
        setTimeout(setSelectedCards([]), 1000)
      }
    }
  }

  return (
    <>
      <PokemonList 
        pokemon={shuffledCards}
        flippedCards={flippedCards}
        handleCardClick={handleCardClick}
      />
    </>
  )
}

export default App
