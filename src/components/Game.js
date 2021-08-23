import './Game.css';
import Square from './Square';
import React, { useState } from 'react';

const initialState = () => {
	return [ [ null, null, null ], [ null, null, null ], [ null, null, null ] ];
};

const Game = () => {
	const [ gameState, setGameState ] = useState(initialState);
	const [ nextIsX, setNextIsX ] = useState(true);
	const [ checkGameover, setCheckGameover ] = useState(false);
	const [ boardIsFull, setBoardIsFull ] = useState(false);

	const onClickReset = () => {
		// console.log('Game is reset');
		// console.log(initialState);
		setGameState(initialState);
		setCheckGameover(false);
		setNextIsX(true);
		setBoardIsFull(false);
	};

	const gameBoard = gameState.map((row, i) => {
		return (
			<div key={i}>
				{row.map((squareValue, j) => {
					const gameover = () => {
						if (
							gameState[0][0] &&
							gameState[0][0] === gameState[0][1] &&
							gameState[0][0] === gameState[0][2]
						)
							return setCheckGameover(true);
						else if (
							gameState[1][0] &&
							gameState[1][0] === gameState[1][1] &&
							gameState[1][0] === gameState[1][2]
						)
							return setCheckGameover(true);
						else if (
							gameState[2][0] &&
							gameState[2][0] === gameState[2][1] &&
							gameState[2][0] === gameState[2][2]
						)
							return setCheckGameover(true);
						else if (
							gameState[0][0] &&
							gameState[0][0] === gameState[1][0] &&
							gameState[0][0] === gameState[2][0]
						)
							return setCheckGameover(true);
						else if (
							gameState[0][1] &&
							gameState[0][1] === gameState[1][1] &&
							gameState[0][1] === gameState[2][1]
						)
							return setCheckGameover(true);
						else if (
							gameState[0][2] &&
							gameState[0][2] === gameState[1][2] &&
							gameState[0][2] === gameState[2][2]
						)
							return setCheckGameover(true);
						else if (
							gameState[0][0] &&
							gameState[0][0] === gameState[1][1] &&
							gameState[0][0] === gameState[2][2]
						)
							return setCheckGameover(true);
						else if (
							gameState[0][2] &&
							gameState[0][2] === gameState[1][1] &&
							gameState[0][2] === gameState[2][0]
						)
							return setCheckGameover(true);
					};

					const boardisfull = () => {
						if (
							gameState[0][0] !== null &&
							gameState[0][1] !== null &&
							gameState[0][2] !== null &&
							gameState[1][0] !== null &&
							gameState[1][1] !== null &&
							gameState[1][2] !== null &&
							gameState[2][0] !== null &&
							gameState[2][1] !== null &&
							gameState[2][2] !== null
						)
							setBoardIsFull(true);
					};

					const handleClick = () => {
						// console.log(gameState[i][j]);
						if (gameState[i][j] === 'X' || gameState[i][j] === 'O') {
							return;
						}

						if (checkGameover === true) {
							return;
						}

						console.log(`Click happened ${i}-${j}`);
						const board = [ ...gameState ];
						board[i][j] = nextIsX ? 'X' : 'O';
						// console.log(board[i][j]);
						setGameState(board);
						setNextIsX(!nextIsX);
						gameover();
						boardisfull();
					};

					return <Square key={`${i}-${j}`} onClick={handleClick} value={squareValue} />;
				})}
			</div>
		);
	});

	return (
		<div>
			<h3>Tic-Tac-Toe: Next Player is {nextIsX ? 'X' : 'O'}</h3>
			{/* {console.log(checkGameover)} */}
			{gameBoard.map((gameboard) => [ gameboard ])}
			<br />
			{/* {gameBoard[0]}
			<br />
			{gameBoard[1]}
			<br />
			{gameBoard[2]}
			<br /> */}
			<button onClick={onClickReset}>Reset</button>
			<h3 className="win">{!checkGameover ? '' : `Player ${!nextIsX ? 'X' : 'O'} won!`}</h3>
			<h3 className="tie">{!boardIsFull && !checkGameover ? '' : `${checkGameover ? '' : 'Game is tie...'}`}</h3>
		</div>
	);
};

export default Game;
