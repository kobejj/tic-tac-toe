import './Game.css';
import Square from './Square';
import React, { useState } from 'react';

const Game = () => {

    const [gameState, setGameState] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    const handleClick = () => {
        return setGameState(['X'])
    }

    const row = gameState.map((row, i) => {
        return (
            <div>
                {
                    row.map((squareValue, j) => {
                        return (
                            <Square 
                                value={squareValue}
                                onClick={handleClick}
                            />
                        )
                    })
                }
            </div>
        )
    })

    return (
        <div className="ui container">
            {row}
        </div>
    )
}

export default Game;