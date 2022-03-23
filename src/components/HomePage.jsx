import React, { useState } from 'react';
import Table from './Table';
import '../App.css';

export default function HomePage(props) {
	const [fullName, setFullName] = useState('');

	const valid = () => {
		if (fullName.length == 0) {
			alert('please enter your name');
		} else {
			props.changePage(fullName, 2);
		}
	};
	const [show, setShow] = useState(true);
	return (
		<div className="homePage-container">
			<h1>Ready for war?</h1>
			<input
				className="homepage-input"
				onChange={(element) => {
					setFullName(element.target.value);
				}}
				type="text"
				placeholder="enter your name"
			/>
			<br />
			<button
				className="homepage-btnstart"
				onClick={() => {
					valid();
				}}
			>
				START
			</button>
			<button
				className="homepage-btn-table"
				onClick={() => setShow(!show)}
			>
				show table
			</button>
			{!show ? <Table players={props.players} /> : ''}
		</div>
	);
}
