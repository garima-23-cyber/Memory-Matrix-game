import React from 'react';

export default function Card({ src, alt, isFlipped, isMatched, onClick }) {
  return (
    <div
      className={`card ${isFlipped ? 'card--flipped' : ''} ${isMatched ? 'card--matched' : ''}`}
      onClick={onClick}
      role="button"
      aria-label={isMatched ? `Matched: ${alt}` : isFlipped ? `Flipped: ${alt}` : 'Hidden card'}
    >
      <div className="card__inner">

        {/* Front — hidden face */}
        <div className="card__face card__face--front">
          <div className="card__bubble">
            <span className="card__question">?</span>
          </div>
          <div className="card__dots" aria-hidden="true">
            <span /><span /><span />
          </div>
        </div>

        {/* Back — revealed face */}
        <div className="card__face card__face--back">
          {isMatched && (
            <span className="card__burst" aria-hidden="true">✨</span>
          )}
          <img
            src={src}
            alt={alt}
            className="card__img"
            draggable={false}
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
}