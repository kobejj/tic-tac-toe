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
    const [checkGameover, setCheckGameover] = useState(false)


    const onClickReset = () => {
        console.log('Game is reset')
        
    }

    const gameBoard = gameState.map((row, i) => {
        
        return (
            <div key={i}>
                {
                    row.map((squareValue, j) => {
                        

                        const handleClick = () => {
                            console.log(gameState[i][j])
                            if(gameState[i][j] === 'X' || gameState[i][j] ==='O') {
                                return
                            }
                            console.log(`Click happened ${i}-${j}`)
                            const board = [...gameState]
                            board[i][j] = nextIsX ? 'X' : 'O'
                            console.log(board[i][j])
                            setGameState(board)
                            setNextIsX(!nextIsX)
                            const gameover = () => {
                                if(board[0][0] && board[0][0] === board[0][1] && board[0][0] === board[0][2])
                                return setCheckGameover(true)
                                else if(board[1][0] && board[1][0] === board[1][1] && board[1][0] === board[1][2])
                                return setCheckGameover(true)
                                else if(board[2][0] && board[2][0] === board[2][1] && board[2][0] === board[2][2])
                                return setCheckGameover(true)
                                else if(board[0][0] && board[0][0] === board[1][0] && board[0][0] === board[2][0])
                                return setCheckGameover(true)
                                else if(board[0][1] && board[0][1] === board[1][1] && board[0][1] === board[2][1])
                                return setCheckGameover(true)
                                else if(board[0][2] && board[0][2] === board[1][2] && board[0][2] === board[2][2])
                                return setCheckGameover(true)
                                else if(board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2])
                                return setCheckGameover(true)
                                else if(board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0])
                                return setCheckGameover(true)
                            }
                            gameover()
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
            {console.log(checkGameover)}
        
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
            <br/>
            <button onClick={onClickReset}>Reset</button>
            <h3 className="win">{!checkGameover ? '' : `Player ${!nextIsX ? 'X' : 'O'} won!`}</h3>  
        </div>
    )
}

export default Game;