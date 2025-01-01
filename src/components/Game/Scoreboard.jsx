 
// components/Game/Scoreboard.jsx
export const Scoreboard = ({ playerScore, aiScore }) => (
    <div className="flex justify-center gap-8 text-2xl font-bold mb-4">
      <div>Player: {playerScore}</div>
      <div>AI: {aiScore}</div>
    </div>
  );