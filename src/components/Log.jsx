


export default function Log({turns}) {

    return(
        <ol id="log">
            {turns.map((ele, i) => <li key={`${ele.square[0]} +  ${ele.square[1]}`} className={!i?'highlighted':undefined}>{ele.square[0]}, {ele.square[1]} player {ele.player}</li>)}
        </ol>
    );
}