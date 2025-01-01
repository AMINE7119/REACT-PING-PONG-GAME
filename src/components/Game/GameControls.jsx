 
// components/Game/GameControls.jsx
export const GameControls = ({ onStart, onPause, isPlaying }) => (
    <div className="flex justify-center gap-4 mt-4">
      <Button onClick={isPlaying ? onPause : onStart}>
        {isPlaying ? 'Pause' : 'Start'}
      </Button>
    </div>
  );