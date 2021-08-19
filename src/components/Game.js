import './Game.css';
import Square from './Square';
import React, { useState } from 'react';

const Game = () => {

    const [gameState, setGameState] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    const [nextIsX, setNextIsX] = useState(true)

    const gameBoard = gameState.map((row, i) => {
        

        return (
            <div key={i}>
                {
                    row.map((squareValue, j) => {
                        
                        const handleClick = () => {
                            console.log(`Click happened ${i}-${j}`)
                            const board = [...gameState]
                            board[i][j] = nextIsX ? 'X' : 'O'
                            console.log(board[i][j])
                            setGameState(board)
                            setNextIsX(!nextIsX)
                        }

                        return (
                            <Square
                                key={`${i}-${j}`}
                                onClick={handleClick}
                                value={squareValue}
                            />
                        )
                    })
                }
                

            </div>
        )
    })

    return (
        
        <div>
            <h3>Tic-Tak-Toe: Next Player is {nextIsX ? 'X' : 'O'}</h3>
            <div>
                {gameBoard[0]}
            </div>
            <br/>
            <div>
                {gameBoard[1]}
            </div>
            <br/>
            <div>
                {gameBoard[2]}
            </div>
        </div>
    )
}

export default Game;