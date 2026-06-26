import React from 'react';

function formatTime(s) {
  const m   = Math.floor(s / 60).toString().padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

export default function Scoreboard({ timer, player1Score, player2Score, currentPlayer }) {
  return (
    <section className="scoreboard" aria-label="Game stats" style={{ maxWidth: '460px' }}>
      
      {/* Player 1 Counter */}
      <div 
        className="score__cell" 
        style={{ 
          opacity: currentPlayer === 1 ? 1 : 0.45,
          transform: currentPlayer === 1 ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.2s ease',
          border: currentPlayer === 1 ? '2px solid var(--pink)' : '2px solid transparent',
          borderRadius: '12px'
        }}
      >
        <span className="score__icon" aria-hidden="true">🔴</span>
        <p className="score__label">Player 1</p>
        <p className="score__value score__value--pink">
          {player1Score} <span style={{fontSize: '0.6rem', opacity: 0.7}}>pairs</span>
        </p>
      </div>

      <div className="score__divider" aria-hidden="true" />

      {/* Shared Duration Timer */}
      <div className="score__cell">
        <span className="score__icon" aria-hidden="true">⏱️</span>
        <p className="score__label">Time</p>
        <p className="score__value score__value--orange score__value--mono">
          {formatTime(timer)}
        </p>
      </div>

      <div className="score__divider" aria-hidden="true" />

      {/* Player 2 Counter */}
      <div 
        className="score__cell" 
        style={{ 
          opacity: currentPlayer === 2 ? 1 : 0.45,
          transform: currentPlayer === 2 ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.2s ease',
          border: currentPlayer === 2 ? '2px solid var(--orange)' : '2px solid transparent',
          borderRadius: '12px'
        }}
      >
        <span className="score__icon" aria-hidden="true">🔵</span>
        <p className="score__label">Player 2</p>
        <p className="score__value score__value--orange">
          {player2Score} <span style={{fontSize: '0.6rem', opacity: 0.7}}>pairs</span>
        </p>
      </div>

    </section>
  );
}