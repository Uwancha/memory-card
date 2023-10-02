import React, { useState, useEffect} from 'react'
import './App.css'
import { getPokemon } from './services/api'
import { CardList } from './components/CardList'
import shuffle from './shuffle'
import ScoreBoard from './components/scoreboard'
import GameOVer from './components/GameOver'

function App() {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

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
    setAttempts(attempts + 1)

    if (score === 12) {
      setIsGameOver(true)
    }
    if (selectedCards.includes(card)) {
      resetGame()
      
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

  function resetGame() {
    if (score > bestScore) {
      setBestScore(score)
    }
    setScore(0)
    setSelectedCards([])
  }

  function restartTheGame () {
    setScore(0)
    setSelectedCards([])
    setAttempts(0)
    setIsGameOver(false)
  }

  return (
    <div>
      {isGameOver ? ( <GameOVer onRestart={restartTheGame} />) : (
        <>
      <ScoreBoard score={score} bestScore={bestScore} attempts={attempts}/>
      <CardList 
        pokemon={shuffledCards}
        handleCardClick={handleCardClick}
      />
      </>)}
    </div>
  )
}

export default App
