 
// hooks/useKeyPress.js
import { useState, useEffect } from 'react';

export const useKeyPress = (targetKey) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleDown = ({ key }) => {
      if (key === targetKey) setIsPressed(true);
    };
    
    const handleUp = ({ key }) => {
      if (key === targetKey) setIsPressed(false);
    };

    window.addEventListener('keydown', handleDown);
    window.addEventListener('keyup', handleUp);
    
    return () => {
      window.removeEventListener('keydown', handleDown);
      window.removeEventListener('keyup', handleUp);
    };
  }, [targetKey]);

  return isPressed;
};