// components/Game/PingPongGame.jsx
import React, { useState, useCallback } from 'react';
import { useGameLoop } from '../../hooks/useGameLoop';
import { useKeyPress } from '../../hooks/useKeyPress';
import { calculateBallPhysics } from '../../utils/physics';
import { CONSTANTS } from '../../utils/constants';
import { Ball } from './Ball';
import Paddle from './Paddle';  // Remove curly braces
import { Scoreboard } from './Scoreboard';
import { GameControls } from './GameControls';

const PingPongGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [ballPos, setBallPos] = useState({
    x: CONSTANTS.TABLE_WIDTH / 2,
    y: CONSTANTS.TABLE_HEIGHT / 2
  });
  const [ballVelocity, setBallVelocity] = useState({
    x: CONSTANTS.BALL_SPEED,
    y: 0
  });
  const [playerPaddlePos, setPlayerPaddlePos] = useState(
    CONSTANTS.TABLE_HEIGHT / 2 - CONSTANTS.PADDLE_HEIGHT / 2
  );
  const [aiPaddlePos, setAiPaddlePos] = useState(
    CONSTANTS.TABLE_HEIGHT / 2 - CONSTANTS.PADDLE_HEIGHT / 2
  );

  const upPressed = useKeyPress('ArrowUp');
  const downPressed = useKeyPress('ArrowDown');

  const resetBall = () => {
    setBallPos({
      x: CONSTANTS.TABLE_WIDTH / 2,
      y: CONSTANTS.TABLE_HEIGHT / 2
    });
    setBallVelocity({
      x: CONSTANTS.BALL_SPEED * (Math.random() > 0.5 ? 1 : -1),
      y: 0
    });
  };

  const updateGame = useCallback(() => {
    if (!isPlaying) return;

    if (upPressed) {
      setPlayerPaddlePos(prev => 
        Math.max(0, prev - CONSTANTS.PADDLE_SPEED)
      );
    }
    if (downPressed) {
      setPlayerPaddlePos(prev => 
        Math.min(CONSTANTS.TABLE_HEIGHT - CONSTANTS.PADDLE_HEIGHT, 
                prev + CONSTANTS.PADDLE_SPEED)
      );
    }

    const aiTarget = ballPos.y - CONSTANTS.PADDLE_HEIGHT / 2;
    const aiMove = Math.sign(aiTarget - aiPaddlePos) * CONSTANTS.AI_SPEED;
    setAiPaddlePos(prev => 
      Math.min(
        Math.max(0, prev + aiMove),
        CONSTANTS.TABLE_HEIGHT - CONSTANTS.PADDLE_HEIGHT
      )
    );

    const { position, velocity } = calculateBallPhysics(
      ballPos,
      ballVelocity,
      playerPaddlePos,
      aiPaddlePos
    );

    setBallPos(position);
    setBallVelocity(velocity);

    if (position.x <= 0) {
      setAiScore(prev => prev + 1);
      resetBall();
    } else if (position.x >= CONSTANTS.TABLE_WIDTH) {
      setPlayerScore(prev => prev + 1);
      resetBall();
    }
  }, [
    isPlaying,
    ballPos,
    ballVelocity,
    playerPaddlePos,
    aiPaddlePos,
    upPressed,
    downPressed
  ]);

  useGameLoop(updateGame);

  const togglePlay = () => setIsPlaying(prev => !prev);

  return (
    <div className="flex flex-col items-center">
      <Scoreboard playerScore={playerScore} aiScore={aiScore} />
      
      <div
        className="relative bg-gray-800 overflow-hidden"
        style={{
          width: CONSTANTS.TABLE_WIDTH,
          height: CONSTANTS.TABLE_HEIGHT,
        }}
      >
        <div 
          className="absolute left-1/2 top-0 w-1 h-full bg-white opacity-50"
          style={{ transform: 'translateX(-50%)' }}
        />
        
        <Paddle position={playerPaddlePos} side="left" />
        <Paddle position={aiPaddlePos} side="right" />
        <Ball position={ballPos} />
      </div>

      <GameControls
        onStart={togglePlay}
        onPause={togglePlay}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default PingPongGame;