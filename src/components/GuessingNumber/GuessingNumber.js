import React, { useState } from 'react';
import './GuessingNumber.css';

export const GuessingGame = () => {
  const [guessNumber, setGuessNumber] = useState('');
  const [guessResult, setGuessResult] = useState('');
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    const guess = parseInt(guessNumber);
    if (guess === randomNumber) {
      setGuessResult('¡Correcto! Has adivinado el número.');
    } else if (guess < randomNumber) {
      setGuessResult('Más alto');
    } else {
      setGuessResult('Más bajo');
    }
  };

  return (
    <div className="game">
      <h2 className="game-title">Juego de Adivinanza</h2>
      <form onSubmit={handleGuessSubmit}>
        <input
          type="number"
          value={guessNumber}
          onChange={(e) => setGuessNumber(e.target.value)}
          placeholder="Adivina el número (1-100)"
          className="game-input"
        />
        <button type="submit" className="game-button">Adivinar</button>
      </form>
      {guessResult && <p className="game-result">{guessResult}</p>}
    </div>
  );
};