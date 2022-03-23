import React, { useState } from 'react';

import '../App.css';

function Table(props) {
	const [tempTable, setTempTable] = useState(props.players);

	tempTable.sort(function (a, b) {
		return b.win - a.win;
	});

	return (
		<div className="table-score">
			{/* {props.players[0].name} */}
			<h3>טבלת שחקנים וניצחונות</h3>
			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>games</th>
						<th>win</th>
						<th>lose</th>
					</tr>
				</thead>
				<tbody>
					{' '}
					{/* <tr>{renderEmployees()}</tr> */}
					{/* { if (props.players.length > 0) { */}
					{tempTable.length > 0
						? tempTable.map(({ name, games, win, lose }, index) => (
								<tr>
									<td>{name}</td>
									<td>{games}</td>
									<td>{win}</td>
									<td>{lose}</td>
								</tr>
						  ))
						: ''}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
