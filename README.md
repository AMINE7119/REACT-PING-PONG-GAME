# React Ping Pong Game

A classic ping pong game built with React, featuring smooth animations and an intelligent AI opponent.

## Features

- **Smooth Gameplay**: 60 FPS game loop using requestAnimationFrame
- **Intelligent AI**: Responsive computer opponent that adapts to ball movement
- **Realistic Physics**: Ball collision detection with paddle spin mechanics
- **Modern UI**: Clean interface built with Tailwind CSS
- **Keyboard Controls**: Arrow Up/Down keys to control your paddle
- **Score Tracking**: Real-time score display for both players

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Custom Hooks** - Game loop and keyboard input handling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-ping-pong-game.git
cd react-ping-pong-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How to Play

1. Click the **Start** button to begin the game
2. Use **Arrow Up** and **Arrow Down** keys to move your paddle (left side)
3. Score points by getting the ball past the AI opponent's paddle
4. Click **Pause** to pause the game at any time

## Project Structure

```
src/
├── components/
│   ├── Game/
│   │   ├── Ball.jsx         # Ball component
│   │   ├── Paddle.jsx       # Paddle component
│   │   ├── Scoreboard.jsx   # Score display
│   │   ├── GameControls.jsx # Start/Pause buttons
│   │   └── PingPongGame.jsx # Main game logic
│   └── UI/
│       └── Button.jsx       # Reusable button component
├── hooks/
│   ├── useGameLoop.js       # Game loop with requestAnimationFrame
│   └── useKeyPress.js       # Keyboard input handler
├── utils/
│   ├── physics.js           # Ball physics and collision detection
│   └── constants.js         # Game constants (speeds, dimensions)
├── App.jsx                  # Root component
└── main.jsx                 # App entry point
```

## Game Mechanics

### Physics Engine
- Ball velocity changes based on collision point with paddle
- Spin mechanics: hitting the ball with top/bottom of paddle affects trajectory
- Wall collision detection with velocity reversal

### AI Behavior
- Tracks ball position in real-time
- Adjusts paddle position to intercept ball
- Slight speed limitation for balanced difficulty

### Game Constants
All game parameters are configurable in `src/utils/constants.js`:
- Table dimensions: 800x400px
- Paddle size: 20x100px
- Ball size: 15px
- Ball speed: 5px/frame
- Player paddle speed: 8px/frame
- AI speed: 6px/frame

## Building for Production

```bash
npm run build
```

The optimized build will be available in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is open source and available under the MIT License.

## Acknowledgments

Built with modern React practices and hooks for a smooth gaming experience.
