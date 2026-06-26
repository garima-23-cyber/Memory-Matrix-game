import React, { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import WinModal from './components/WinModal';
import SplashScreen from './components/SplashScreen'; // 🔴 IMPORT SPLASH SCREEN
import { useMemoryGame } from './hooks/useMemoryGame';
import { DIFFICULTY_SETTINGS } from './constants/gameConfig';

export default function App() {
  const [difficulty, setDifficulty] = useState('medium');
  const [showSplash, setShowSplash] = useState(true); // 🔴 ADD SPLASH STATE TRACKER

  const {
    deck,
    timer,
    isWon,
    initGame,
    handleCardClick,
    isCardFlipped,
    isCardMatched,
    currentPlayer,
    player1Score,
    player2Score,
  } = useMemoryGame(difficulty);

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  const activeSetting = DIFFICULTY_SETTINGS[difficulty];

  return (
    <>
      {/* 🔴 CONDITIONAL SPLASH OVERLAY RENDER */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div className="app">
        <Header
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          onRestart={() => initGame(difficulty)}
          currentPlayer={currentPlayer}
        />

        <Scoreboard
          timer={timer}
          player1Score={player1Score}
          player2Score={player2Score}
          currentPlayer={currentPlayer}
        />

        <main 
          style={{
            width: '100%',
            maxWidth: difficulty === 'hard' ? '720px' : '480px',
            margin: '0 auto',
            padding: '1rem 0'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${activeSetting.cols}, 1fr)`,
              gap: '12px',
              width: '100%',
            }}
            aria-label="Memory card game board"
          >
            {deck.map((card, index) => (
              <Card
                key={card.instanceId}
                src={card.src}
                alt={card.alt}
                isFlipped={isCardFlipped(index)}
                isMatched={isCardMatched(index)}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </main>

        {isWon && (
          <WinModal
            player1Score={player1Score}
            player2Score={player2Score}
            formattedTime={formatTime(timer)}
            onReplay={() => initGame(difficulty)}
          />
        )}
      </div>
    </>
  );
}