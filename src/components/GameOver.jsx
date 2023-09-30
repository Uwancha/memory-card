import React from "react";

function GameOVer({onRestart}) {

    return (
        <div className="Restart">
            <h2>Congratulations! You won the Game</h2>
            <button onClick={onRestart}>Restart</button>
        </div>
    )
}

export default GameOVer;