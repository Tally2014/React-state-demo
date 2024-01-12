import {useState} from 'react';

export default function ScoreKeeperExercise({numPlayers, target=10}) {
    const players = new Array(numPlayers).fill(0);
    const [scores, setScores] = useState(players);
    const addOne = (index) =>{
        // Create a new array from the current scores
        const newScores = [...scores];
        // Increment the score of the selected player
        newScores[index]++;
        // Update the scores state
        setScores(newScores);
    }

    const resetScores = () => {
        setScores(players);
    }

  return (
    <div>
        <ul>
            {
                scores.map((score, index) => (
                    <li key={index}>Player{index + 1} {score} 
                    <button onClick={() => addOne(index)}>+1</button>{score >= target && <p>WINNER!!</p>}
                    </li>
                ))
            }
        </ul>
        <button onClick={resetScores}>Reset</button>
    </div>
  )
}