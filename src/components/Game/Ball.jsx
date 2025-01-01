// Ball.jsx
import { CONSTANTS } from '../../utils/constants';

export const Ball = ({ position }) => (
  <div
    className="absolute bg-white rounded-full"
    style={{
      width: CONSTANTS.BALL_SIZE,
      height: CONSTANTS.BALL_SIZE,
      left: position.x,
      top: position.y,
    }}
  />
);