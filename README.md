# Memory Matrix

A responsive 2-player Memory Card Matching Game built with **React 19**, **Vite**, and **Tailwind CSS v4**. This project was developed as a submission for a Frontend Internship Assignment and includes all required features along with several advanced enhancements such as multiplayer gameplay, multiple difficulty levels, persistent scores, and smooth animations.

## Live Demo

**Live Website:** https://memory-matrix-game-tau.vercel.app/

> Replace the above links with your actual Vercel deployment and GitHub repository.

---

## Features

### Core Features

* Responsive memory matching game
* Dynamic card grid based on selected difficulty
* Fisher-Yates shuffle algorithm for unbiased randomization
* Two-card flip restriction
* Automatic match and mismatch handling
* Turn-based local multiplayer
* Live score tracking
* Game timer
* Winner announcement modal
* Restart game functionality

### Additional Features

* Three difficulty levels

  * Easy (3×4 – 6 pairs)
  * Medium (4×4 – 8 pairs)
  * Hard (6×6 – 18 pairs)
* Animated splash screen
* Persistent best scores using Local Storage
* Responsive design for mobile, tablet, and desktop
* Modular architecture using reusable components and custom hooks

---

## Tech Stack

* React 19
* Vite
* Tailwind CSS v4
* JavaScript (ES6+)
* CSS3
* Local Storage
* Vercel

---

## Project Structure

```text
memory-game/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Header.jsx
│   │   ├── Scoreboard.jsx
│   │   ├── SplashScreen.jsx
│   │   └── WinModal.jsx
│   ├── constants/
│   │   └── gameConfig.js
│   ├── hooks/
│   │   └── useMemoryGame.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/memory-game.git
```

Navigate to the project directory:

```bash
cd memory-game
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## Gameplay

1. Select a difficulty level.
2. Players take turns flipping two cards.
3. Matching cards remain revealed and award a point.
4. Non-matching cards flip back after a short delay.
5. The game ends when all pairs are matched.
6. The player with the highest score wins.

---

## Game Logic

* Fisher-Yates shuffle ensures fair card randomization.
* Only two cards can be flipped at once.
* User input is temporarily disabled during mismatch animations.
* Player turns switch automatically after unsuccessful attempts.
* Timer starts with the first move.
* Final scores and winner are displayed when the game ends.

---

## Performance

* Fast rendering with React 19
* Optimized state management using custom hooks
* Responsive CSS Grid layout
* Lightweight production build with Vite
* Smooth CSS animations

---

## Future Improvements

* Online multiplayer
* Sound effects
* Dark mode
* Leaderboard
* Achievement system
* Additional card themes

---

## Author

**Your Name**

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN

---

## License

This project was created for educational purposes as part of a Frontend Internship Assignment.
