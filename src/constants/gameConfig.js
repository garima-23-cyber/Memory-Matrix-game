// ─────────────────────────────────────────────
//  MEMORY MATCH  —  Game Configuration
// ─────────────────────────────────────────────

// 18 symbols total  →  covers Easy(4) / Medium(8) / Hard(18)
export const CARD_SYMBOLS = [

  // ── Cute Animals ──────────────────────────
  {
    id: 'puppy',
    src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&auto=format&fit=crop&q=80',
    alt: 'Golden puppy',
  },
  {
    id: 'cat',
    src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&auto=format&fit=crop&q=80',
    alt: 'Ginger cat',
  },
  {
    id: 'kitten',
    src: 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?w=300&auto=format&fit=crop&q=80',
    alt: 'Fluffy kitten',
  },
  {
    id: 'pug',
    src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&auto=format&fit=crop&q=80',
    alt: 'Pug puppy',
  },
  {
    id: 'hamster',
    src: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=300&auto=format&fit=crop&q=80',
    alt: 'Hamster',
  },
  {
    id: 'labrador',
    src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&auto=format&fit=crop&q=80',
    alt: 'Labrador',
  },
  {
    id: 'pomeranian',
    src: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=300&auto=format&fit=crop&q=80',
    alt: 'Pomeranian',
  },
  {
    id: 'tabby',
    src: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=300&auto=format&fit=crop&q=80',
    alt: 'Tabby cat',
  },
  {
    id: 'parrot',
    src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=300&auto=format&fit=crop&q=80',
    alt: 'Parrot',
  },

  // ── Bright Fruits ──────────────────────────
  {
    id: 'apple',
    src: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&auto=format&fit=crop&q=80',
    alt: 'Red apple',
  },
  {
    id: 'pineapple',
    src: 'https://images.unsplash.com/photo-1550258114-26998818a6a8?w=300&auto=format&fit=crop&q=80',
    alt: 'Pineapple',
  },
  {
    id: 'banana',
    src: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&auto=format&fit=crop&q=80',
    alt: 'Bananas',
  },
  {
    id: 'strawberry',
    src: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&auto=format&fit=crop&q=80',
    alt: 'Strawberries',
  },
  {
    id: 'orange',
    src: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=300&auto=format&fit=crop&q=80',
    alt: 'Oranges',
  },
  {
    id: 'mango',
    src: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&auto=format&fit=crop&q=80',
    alt: 'Mango',
  },
  {
    id: 'rabbit',
    src: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=300&auto=format&fit=crop&q=80',
    alt: 'Rabbit',
  },
  {
    id: 'fox',
    src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&auto=format&fit=crop&q=80',
    alt: 'Fox',
  },
  {
    id: 'watermelon',
    src: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&auto=format&fit=crop&q=80',
    alt: 'Watermelon',
  },
];

// ─────────────────────────────────────────────
//  Difficulty presets
//  pairs   → how many unique symbols to use
//  cols    → CSS grid-template-columns value
//  rows    → CSS grid-template-rows value (for aspect-ratio control)
// ─────────────────────────────────────────────
export const DIFFICULTY_SETTINGS = {
  easy: {
    label:   '🐣 Easy',
    pairs:   6,
    cols:    3,
    rows:    4,
  },
  medium: {
    label:   '🐱 Medium',
    pairs:   8,
    cols:    4,
    rows:    4,
  },
  hard: {
    label:   '🔥 Hard',
    pairs:   18,
    cols:    6,
    rows:    6,
  },
};



// ─────────────────────────────────────────────
//  Timing constants  (ms)
// ─────────────────────────────────────────────
export const FLIP_BACK_DELAY   = 1000;   
export const CARD_FLIP_DURATION = 500;   