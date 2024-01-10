import {useState} from 'react'
import {v4 as uuid} from 'uuid';

export default function EmojisClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(),emoji: "😊"}]);
    const addEmoji = () =>{
        setEmojis((oldEmojis) => [...emojis, {id: uuid(),emoji: "🥹"}]);
    }
  return (
    <div>
        {
            emojis.map((e) =>(
                <span key={e.id} style={{fontSize: "4rem"}}>{e.emoji}</span>
            ))
        }
        <button onClick={addEmoji}>Add Emoji</button>
    </div>
  )
}
