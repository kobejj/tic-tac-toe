import './Game.css';
import Square from './Square';
import React, { useState } from 'react';

const Game = () => {

    // const [gameState, setGameState] = useState([
    //     [null, null, null],
    //     [null, null, null],
    //     [null, null, null],
    // ]);

    const [gameState, setGameState] = useState([null, null, null, null, null, null, null, null, null])

    const gameBoard = gameState.map((row, i) => {
        
        const handleClick = () => {
                    console.log(`Click happend ${i}`)
                    const squareValue = gameState
                    squareValue[i] = 'X'
                    console.log(squareValue[i])
                    setGameState(squareValue)
        }

        return (
            <div key={i}>
                {/* {
                    row.map((squareValue, j) => {
                        
                        const handleClick = () => {
                            console.log(`Click happened ${i}-${j}`)
                            const board = gameState
                            board[i][j] = 'X';
                            console.log(board[i][j])
                            setGameState(board)
                        }

                        return (
                            <Square
                                key={`${i}-${j}`}
                                onClick={handleClick}
                                value={squareValue}
                            />
                        )
                    })
                } */}
                
                    <Square 
                        key={i}
                        onClick={handleClick}
                        value={row}
                    />
            </div>
        )
    })

    return (
        <div className="ui container">
            {console.log(gameBoard)}
            {gameBoard}
        </div>
    )
}

export default Game;