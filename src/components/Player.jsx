// write me a function to call sieve of eratosthenes
import {useState} from "react";

export default function Player({name, symbol, isActive, setPlayers}) {
    const [playerName, setName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    let show = <span className="player-name">{playerName}</span>;
    let buttonCaption = isEditing?'save' : "Edit"
    if(isEditing){
        show = <input type="text" value={playerName} onChange={(e) => {
            setName(e.target.value)
        }}/>;
    }
    function handleEditButton() {
        setIsEditing(isEditing => !isEditing);
        if(isEditing) {
            setPlayers((prevPlayers) => {
                return {...prevPlayers, [symbol]: playerName}
            });
        }
    }
    return (
        <li className={isActive?"active" : undefined}>
              <span className="player">
                  {show}
                  <span className="player-symbol">{symbol}</span>
              </span>
            <button onClick={handleEditButton}>{buttonCaption}</button>
        </li>
    );
}