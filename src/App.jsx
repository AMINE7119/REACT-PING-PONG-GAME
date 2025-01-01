// App.jsx
import PingPongGame from './components/Game/PingPongGame'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">React Ping Pong</h1>
      <PingPongGame />
    </div>
  )
}

export default App