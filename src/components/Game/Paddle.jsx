 
// components/Game/Paddle.jsx
export const Paddle = ({ position, side }) => (
    <div
      className="absolute bg-white"
      style={{
        width: CONSTANTS.PADDLE_WIDTH,
        height: CONSTANTS.PADDLE_HEIGHT,
        left: side === 'left' ? 0 : CONSTANTS.TABLE_WIDTH - CONSTANTS.PADDLE_WIDTH,
        top: position,
      }}
    />
  );