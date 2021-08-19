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
    const [alreadyClicked, setAlreadyClicked] = useState(false)



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
                            const gameover = () => {
                                if(board[0][0] === 'X')
                                return setCheckGameover(true)
                            }
                            gameover()
                            const clickedBefore = () => {
                                if(board[0][1] === 'X' || 'O')
                                return setAlreadyClicked(true)
                            }
                            clickedBefore()
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
            {console.log(alreadyClicked)}
            <h3>{!checkGameover ? '' : 'You won!'}</h3>
            <h3>{!alreadyClicked ? '' : 'This square is clicked already.'}</h3>
            
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