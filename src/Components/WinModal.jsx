import React, { useEffect, useRef } from 'react';

const CONFETTI_COLORS = ['#f9b8d0','#f97316','#e0446a','#fde68a','#c2356b','#fed7aa','#a78bfa'];
const CONFETTI_SHAPES = ['●','★','♥','▲','✦'];

export default function WinModal({ player1Score, player2Score, formattedTime, onReplay }) {
  const confettiRef = useRef(null);

  useEffect(() => {
    const container = confettiRef.current;
    if (!container) return;

    for (let i = 0; i < 45; i++) {
      const el        = document.createElement('span');
      el.className    = 'confetti__piece';
      el.textContent  = CONFETTI_SHAPES[Math.floor(Math.random() * CONFETTI_SHAPES.length)];
      el.style.cssText = `
        left:               ${Math.random() * 100}%;
        color:              ${CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]};
        font-size:          ${10 + Math.random() * 16}px;
        animation-delay:    ${Math.random() * 1}s;
        animation-duration: ${1.5 + Math.random() * 1.5}s;
      `;
      container.appendChild(el);
    }
    return () => { container.innerHTML = ''; };
  }, []);

  // Determine winner outcome strings
  let winTitle = "It's a Tie! 🤝";
  let winSubtitle = "Perfect matching symmetry!";
  
  if (player1Score > player2Score) {
    winTitle = "Player 1 Wins! 👑";
    winSubtitle = `Won by ${player1Score - player2Score} point advantage!`;
  } else if (player2Score > player1Score) {
    winTitle = "Player 2 Wins! 👑";
    winSubtitle = `Won by ${player2Score - player1Score} point advantage!`;
  }

  return (
    <div className="modal__overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="confetti" ref={confettiRef} aria-hidden="true" />

        <div className="modal__trophy-wrap">
          <span className="modal__trophy" aria-hidden="true">🏆</span>
          <span className="modal__trophy-ring" aria-hidden="true" />
        </div>

        <h2 className="modal__title" style={{ fontSize: '1.8rem' }}>{winTitle}</h2>
        <p className="modal__subtitle">{winSubtitle}</p>

        {/* Display Score Breakdown */}
        <div className="modal__stats">
          <div className="modal__stat">
            <p className="modal__stat-label">P1 Score</p>
            <p className="modal__stat-value modal__stat-value--pink">{player1Score}</p>
          </div>
          <div className="modal__stat-divider" aria-hidden="true" />
          <div className="modal__stat">
            <p className="modal__stat-label">Total Time</p>
            <p className="modal__stat-value modal__stat-value--orange" style={{ fontSize: '1.4rem', paddingTop: '6px' }}>
              {formattedTime}
            </p>
          </div>
          <div className="modal__stat-divider" aria-hidden="true" />
          <div className="modal__stat">
            <p className="modal__stat-label">P2 Score</p>
            <p className="modal__stat-value modal__stat-value--orange">{player2Score}</p>
          </div>
        </div>

        <button className="modal__btn" onClick={onReplay}>
          <span className="modal__btn-star" aria-hidden="true">⭐</span>
          Play Again!
          <span className="modal__btn-star" aria-hidden="true">⭐</span>
        </button>
      </div>
    </div>
  );
}