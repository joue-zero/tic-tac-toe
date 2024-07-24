export default function GameBoard({onSelectSquare, gameBoard}) {
    return (
        <ol id="game-board">
            {gameBoard.map((row, i) => (
                <li key={i}>
                    <ol>
                        {row.map((cell, j) => (
                            <li key={j}>
                                <button disabled={cell} onClick={() => onSelectSquare(i, j)}>{cell}</button>
                            </li>)
                        )}
                    </ol>
                </li>
            ))}
        </ol>
    );
}