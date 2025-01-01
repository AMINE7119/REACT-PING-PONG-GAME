 
// utils/physics.js
import { CONSTANTS } from './constants';

export const calculateBallPhysics = (ballPos, ballVelocity, paddleLeft, paddleRight) => {
  const newPos = {
    x: ballPos.x + ballVelocity.x,
    y: ballPos.y + ballVelocity.y
  };
  
  let newVelocity = { ...ballVelocity };

  // Wall collisions
  if (newPos.y <= 0 || newPos.y >= CONSTANTS.TABLE_HEIGHT - CONSTANTS.BALL_SIZE) {
    newVelocity.y = -newVelocity.y;
  }

  // Paddle collisions
  const hitLeftPaddle = newPos.x <= CONSTANTS.PADDLE_WIDTH && 
    newPos.y >= paddleLeft - CONSTANTS.BALL_SIZE &&
    newPos.y <= paddleLeft + CONSTANTS.PADDLE_HEIGHT;

  const hitRightPaddle = newPos.x >= CONSTANTS.TABLE_WIDTH - CONSTANTS.PADDLE_WIDTH - CONSTANTS.BALL_SIZE &&
    newPos.y >= paddleRight - CONSTANTS.BALL_SIZE &&
    newPos.y <= paddleRight + CONSTANTS.PADDLE_HEIGHT;

  if (hitLeftPaddle || hitRightPaddle) {
    newVelocity.x = -newVelocity.x;
    // Add spin based on where the ball hits the paddle
    const paddlePos = hitLeftPaddle ? paddleLeft : paddleRight;
    const relativeIntersectY = (paddlePos + (CONSTANTS.PADDLE_HEIGHT / 2)) - newPos.y;
    const normalizedIntersectY = relativeIntersectY / (CONSTANTS.PADDLE_HEIGHT / 2);
    newVelocity.y = -normalizedIntersectY * CONSTANTS.BALL_SPEED;
  }

  return { position: newPos, velocity: newVelocity };
};