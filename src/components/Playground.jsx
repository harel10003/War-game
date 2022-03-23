import React, { useState } from 'react';

export default function Playground(props) {
	const [index, setIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);

	const nextRound = () => {
		if (props.computer.deck[index] < props.player.deck[index]) {
			setScore(score + 1);
			setPlayerScore(playerScore + 1);
		} else if (props.computer.deck[index] > props.player.deck[index]) {
			setScore(score - 1);
			setComputerScore(computerScore + 1);
		}
		if (index < 25) {
			setIndex(index + 1);
		} else {
			props.finishDetails(score, props.player, 3);
		}
	};

	return (
		<div className="pg-container">
			{/* {console.log('pg', props.player)} */}
			<div className="pg-round">
				<div className="pg-round-text">round:</div>
				{index}
			</div>
			<div className="pg-bord">
				<div className="pg-card">{props.player.deck[index]}</div>
				<div className="pg-name">{props.player.name}</div>
				<div className="pg-score">SCORE: {playerScore}</div>
			</div>
			<div className="pg-bord">
				<div className="pg-card">{props.computer.deck[index]}</div>
				<div className="pg-name">{props.computer.name}</div>
				<div className="pg-score">SCORE: {computerScore}</div>
			</div>
			<button
				className="pg-btn-next"
				onClick={() => {
					nextRound();
				}}
			>
				next
			</button>
		</div>
	);
}
