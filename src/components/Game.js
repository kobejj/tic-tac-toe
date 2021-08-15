import './Game.css';
import Square from './Square';
import React, { useState } from 'react';

const Game = () => {

    const [gameState, setGameState] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    const gameBoard = gameState.map((row, i) => {

        return (
            <div key={i}>
                {
                    row.map((squareValue, j) => {

                        const handleClick = () => {
                            console.log('click happened')
                            const board = gameState
                            board[i][j] = 'X';
                            setGameState(board)
                        }

                        return (
                            <Square
                                key={`${i}-${j}`}
                                value={squareValue}
                                onClick={() => handleClick()}
                            />
                        )
                    })
                }
            </div>
        )
    })

    return (
        <div className="ui container">
            {gameBoard}
        </div>
    )
}

export default Game;