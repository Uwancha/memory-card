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
  const [bestScore, setBestScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    getPokemon().then(data => {
      const pokemon = data.map(p => ({
        id: p.name,
        url: p.frontImage
      }) )

      shuffleCards(pokemon)
    })
  }, [])

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
    }
  }, [score])

  function handleCardClick(card) {
    setAttempts(attempts + 1)
    if (score === 16) {
      setIsGameOver(true)
    }
    if (selectedCards.includes(card)) {
      setScore(0)
      
    }else {
      setScore(score + 1)
      setSelectedCards(prev => setSelectedCards([...prev, card]))
    }

    if (score > bestScore) {
      setBestScore(score)
    }

    shuffleCards(shuffledCards)
  }

  function shuffleCards(cards) {
    const shuffled = shuffle(cards);
    setShuffledCards(shuffled); 
  }

  return (
    <div>
      <ScoreBoard score={score} bestScore={bestScore} attempts={attempts}/>
      <CardList 
        pokemon={shuffledCards}
        handleCardClick={handleCardClick}
      />
    </div>
  )
}

export default App
