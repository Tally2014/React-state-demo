import {useState} from 'react';

export default function Scorekeeper() {
  const [scores, setScores] = useState({p1score:0, p2score: 0});
  function increaseP1Score(){
      //const newScore = {...scores, p1score: scores.p1score + 1}
      setScores((oldScores) =>{
          return {...oldScores, p1score: oldScores.p1score + 1}
      });
  }
  function increaseP2Score(){
    setScores((oldScores) =>{
        return {...oldScores, p2score: oldScores.p2score + 1}
    });
}
  return (
    <div>
        <p>Player 1: {scores.p1score}</p>
        <p>Player 2: {scores.p2score}</p>
        <button onClick={increaseP1Score} >+1 Player 1</button>
        <button onClick={increaseP2Score} >+1 Player 2</button>
    </div>
  )
}
