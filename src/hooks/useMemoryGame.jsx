import { useState, useEffect, useRef, useCallback } from 'react';
import { CARD_SYMBOLS, DIFFICULTY_SETTINGS, FLIP_BACK_DELAY } from '../constants/gameConfig';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(difficulty) {
  const { pairs } = DIFFICULTY_SETTINGS[difficulty];
  const symbols = CARD_SYMBOLS.slice(0, pairs);
  const doubled = [...symbols, ...symbols];
  const shuffled = shuffleArray(doubled);

  return shuffled.map((symbol, i) => ({
    instanceId: `${symbol.id}-${i}-${Date.now()}`,
    symbolId:   symbol.id,
    src:        symbol.src,
    alt:        symbol.alt,
  }));
}

export function useMemoryGame(difficulty) {
  // ── Core game state ───────────────────────────────────────
  const [deck, setDeck] = useState([]);
  const [flipped, setFlipped] = useState([]);  
  const [matched, setMatched] = useState([]);  
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false); 
  const [isWon, setIsWon] = useState(false);
  const [isLocked, setIsLocked] = useState(false); 

  // ── 2-Player State Extensions ─────────────────────────────
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const timerRef = useRef(null);
  const diffRef = useRef(difficulty);

  useEffect(() => {
    diffRef.current = difficulty;
  }, [difficulty]);

  // Timer effect
  useEffect(() => {
    if (isActive && !isWon) {
      timerRef.current = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, isWon]);

  // Reset / Initialization
  const initGame = useCallback((diff = diffRef.current) => {
    clearInterval(timerRef.current);
    setDeck(buildDeck(diff));
    setFlipped([]);
    setMatched([]);
    setTimer(0);
    setIsActive(false);
    setIsWon(false);
    setIsLocked(false);
    
    // Reset player scores and defaults
    setCurrentPlayer(1);
    setPlayer1Score(0);
    setPlayer2Score(0);
  }, []);

  useEffect(() => {
    initGame(difficulty);
  }, [difficulty, initGame]);

  // Card click logic
  const handleCardClick = useCallback((index) => {
    if (isLocked || isWon || flipped.includes(index) || matched.includes(index)) return;

    if (!isActive) setIsActive(true);

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length !== 2) return;

    const [a, b] = newFlipped;
    const isMatch = deck[a].symbolId === deck[b].symbolId;

    if (isMatch) {
      // Award point to the active playing user
      if (currentPlayer === 1) {
        setPlayer1Score(prev => prev + 1);
      } else {
        setPlayer2Score(prev => prev + 1);
      }

      const newMatched = [...matched, a, b];
      setMatched(newMatched);
      setFlipped([]);

      // Win Condition check
      if (newMatched.length === deck.length) {
        setIsWon(true);
        clearInterval(timerRef.current);
      }
    } else {
      // Mismatch: Lock board, change player turn, and flip back after delay
      setIsLocked(true);
      setTimeout(() => {
        setFlipped([]);
        setCurrentPlayer(prev => (prev === 1 ? 2 : 1));
        setIsLocked(false);
      }, FLIP_BACK_DELAY);
    }
  }, [isLocked, isWon, flipped, matched, isActive, deck, currentPlayer]);

  const isCardFlipped = (index) => flipped.includes(index) || matched.includes(index);
  const isCardMatched = (index) => matched.includes(index);

  return {
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
  };
}