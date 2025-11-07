import { CONSTANTS } from '../../utils/constants';

export default function Paddle({ position, side }) {
  return (
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
}