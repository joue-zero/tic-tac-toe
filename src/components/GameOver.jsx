
export default function GameOver({winner, handleRematch}){
    return (<div id="game-over">
        <h2>Game Over</h2>
        {winner&& <p>{winner} Win !</p>}
        {!winner&& <p>Draw !</p>}
        <button onClick={handleRematch}>Rematch</button>
    </div>);
}