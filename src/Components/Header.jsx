import React from 'react';
import { DIFFICULTY_SETTINGS } from '../constants/gameConfig';

const FLOATING_ICONS = ['🌸', '⭐', '🎀', '✨', '🍭', '🎈', '💖', '🌈'];

// 🔴 CHANGE: Added currentPlayer to props
export default function Header({ difficulty, setDifficulty, onRestart, currentPlayer }) {
  return (
    <header className="header">

      {/* ── Floating background icons (pure decoration) ── */}
      <div className="header__floats" aria-hidden="true">
        {FLOATING_ICONS.map((icon, i) => (
          <span
            key={i}
            className="header__float-icon"
            style={{
              left:            `${8 + i * 12}%`,
              animationDelay:  `${i * 0.4}s`,
              animationDuration:`${3 + (i % 3)}s`,
              fontSize:        `${14 + (i % 3) * 6}px`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* ── Title ── */}
      <div className="header__title-wrap">
        <span className="header__title-icon" aria-hidden="true">🧠</span>
        <h1 className="header__title">MEMORY MATCH</h1>
        <span className="header__title-icon" aria-hidden="true">🧠</span>
      </div>

      {/* ── Dynamic Turn Banner ── */}
      <p 
        className="header__subtitle"
        style={{
          color: currentPlayer === 1 ? 'var(--pink)' : 'var(--orange)',
          background: currentPlayer === 1 ? 'var(--pink-pale)' : 'var(--orange-pale)',
          display: 'inline-block',
          padding: '4px 16px',
          borderRadius: '20px',
          border: `2px dashed ${currentPlayer === 1 ? 'var(--pink-light)' : 'var(--orange-light)'}`,
          transition: 'all 0.3s ease'
        }}
      >
        {currentPlayer === 1 ? '🔴 Player 1\'s Turn!' : '🔵 Player 2\'s Turn!'}
      </p>

      {/* ── Bouncing emoji row ── */}
      <div className="header__emoji-row" aria-hidden="true" style={{ marginTop: '0.5rem' }}>
        {['🐱','🍓','🌸','🍊','🐶','💛','🎀','🍭'].map((e, i) => (
          <span
            key={i}
            className="header__emoji"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {e}
          </span>
        ))}
      </div>

      {/* ── Controls panel ── */}
      <div className="header__panel">

        {/* Difficulty selector */}
        <div className="header__field">
          <label htmlFor="diff-select" className="header__label">
            🎮 Mode
          </label>
          <select
            id="diff-select"
            className="header__select"
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
          >
            {Object.entries(DIFFICULTY_SETTINGS).map(([key, val]) => (
              <option key={key} value={key}>{val.label}</option>
            ))}
          </select>
        </div>

        {/* Divider */}
        <div className="header__divider" aria-hidden="true" />

        {/* Restart button */}
        <button className="header__btn" onClick={onRestart}>
          <span className="header__btn-icon">🔄</span>
          New Game
        </button>

      </div>
    </header>
  );
}