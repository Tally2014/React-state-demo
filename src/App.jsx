import './App.css'
import Counter from './Counter'
import Scorekeeper from './Scorekeeper'
import EmojisClicker from './EmojisClicker'
import ScoreKeeperExercise from './ScoreKeeperExercise'

function App() {
  return (
    <>
     {/*<Counter/>*/}
      {/*<Scorekeeper/>*/}
      {/*<EmojisClicker/>*/}
      <ScoreKeeperExercise numPlayers={5} target={3}/>
    </>
  )
}

export default App
