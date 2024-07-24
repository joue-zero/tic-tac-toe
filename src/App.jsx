import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const symbols = ['X', 'O'];
const players = {[symbols[0]]:'player 1', [symbols[1]]:'player 2'};

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
function createGameBoard(gameTurns){
    let gameBoard = [...initialGameBoard.map(row => [...row])];
    for(const turn of gameTurns){
        const {square, player} = turn;
        const [i, j] = square;
        gameBoard[i][j] = player;
    }
    return gameBoard;
}
function getActivePlayer(gameTurns){
    let activePlayer = symbols[0];
    if(gameTurns.length && gameTurns[0].player === symbols[0]){
        activePlayer = symbols[1];
    }
    return activePlayer;
}

function getWinner(gameBoard){
    for(const comb of WINNING_COMBINATIONS){
        const player1 = gameBoard[comb[0].row][comb[0].column];
        const player2 = gameBoard[comb[1].row][comb[1].column];
        const player3 = gameBoard[comb[2].row][comb[2].column];
        if(player1 && player1 === player2 && player1 === player3){
            return player1;
        }
    }
    return null;
}
function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [playersName, seyPlayersName] = useState(players);

    let gameBoard = createGameBoard(gameTurns);
    let activePlayer = getActivePlayer(gameTurns);
    let winner = getWinner(gameBoard);
    let  isDraw = gameTurns.length === 9 && !winner;
    function handleRematch(){
        setGameTurns([]);
    }
    function onSelectSquare(i, j){
        setGameTurns((prevState) => {
                let activePlayer = getActivePlayer(prevState);
                return [{square: [i, j], player: activePlayer}, ...prevState]
            }
        );
    }
  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
              <Player setPlayers={seyPlayersName} name={players[symbols[0]]} symbol={symbols[0]} isActive={activePlayer === symbols[0]}/>
              <Player setPlayers={seyPlayersName} name={players[symbols[1]]} symbol={symbols[1]} isActive={activePlayer === symbols[1]}/>
          </ol>
          <GameBoard onSelectSquare={onSelectSquare} gameBoard={gameBoard}/>
          {(winner || isDraw)&& <GameOver winner={winner && playersName[winner]} handleRematch={handleRematch}/>}
        </div>
        <Log  turns={gameTurns}/>
      </main>
  )
}

export default App
