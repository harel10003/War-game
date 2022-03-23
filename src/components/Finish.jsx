import React, { useState } from 'react';

export default function Finish(props) {
	const showDetails = () => {
		let i;
		for (i = 0; i < props.players.length; i++) {
			if (props.player.name === props.players[i].name) break;
		}
		return (
			<div>
				<span>{props.players[i].win}</span> -
				<span>{props.players[i].lose}</span>
			</div>
		);
	};
	// const [contetnt, setContent] = useState('');
	// setContent(props.tablePlayers(props.player));
	// props.changePlayersTable(props.player);
	const showWinOrLose = () => {
		if (props.score > 0) {
			return <div>WIN</div>;
		} else {
			return <div>LOSE</div>;
		}
	};
	return (
		<div className="finish-container">
			<div className="finish-winorlose">{showWinOrLose()}</div>
			<div className="finish-score">{showDetails()}</div>

			<button
				className="finish-btn-again"
				onClick={() => props.palyAgin(2, props.player)}
			>
				again?
			</button>
			<button
				className="finish-btn-close"
				onClick={() => props.closeGame(1, props.player)}
			>
				close
			</button>
			{console.log('finish', props.player)}
			{console.log(props.players)}
		</div>
	);
}
