import React, { useState, useEffect} from 'react'
import './App.css'
import { getPokemon } from './services/api'
import { CardList } from './components/CardList'
import shuffle from './shuffle'
import ScoreBoard from './components/scoreboard'

function App() {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getPokemon().then(data => {
      const pokemon = data.map(p => ({
        id: p.name,
        url: p.frontImage
      }) )

      shuffleCards(pokemon)
    })
  }, [])

  function handleCardClick(card) {
    if (selectedCards.includes(card)) {
      setScore(0)
      
    }else {
      setScore(score + 1)
      setSelectedCards(prev => setSelectedCards([...prev, card]))
    }

    shuffleCards(shuffledCards)
  }

  function shuffleCards(cards) {
    const shuffled = shuffle(cards);
    setShuffledCards(shuffled); 
  }

  return (
    <>
      <ScoreBoard score={score} />
      <CardList 
        pokemon={shuffledCards}
        handleCardClick={handleCardClick}
      />
    </>
  )
}

export default App
