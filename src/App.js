import { useState } from 'react';
import './App.css';
import Finish from './components/Finish';
import HomePage from './components/HomePage';
import Playground from './components/Playground';

var com, player;
function App() {
	const [page, setPage] = useState(1);
	const [name, setName] = useState('');
	const [score, setScore] = useState(0);
	const [players, setPlayers] = useState([]);

	const initPlayers = () => {
		const myDeck = new Deck();
		const comDeck = [];
		const playerDeck = [];
		for (let i = 0; i < 26; i++) {
			comDeck.push(myDeck.getCard());
			playerDeck.push(myDeck.getCard());
		}

		com = new Player('computer', comDeck);
		player = new Player(name, playerDeck);
	};

	const tablePlayers = (s, p) => {
		console.log(s > 0 ? 'win' : 'lose', s);
		let tempPlayers = players;
		let flag = 0;
		let i;
		for (i = 0; i < tempPlayers.length; i++) {
			if (tempPlayers[i].name === p.name) {
				tempPlayers[i].games = tempPlayers[i].games + 1;
				if (s > 0) tempPlayers[i].win++;
				else tempPlayers[i].lose = tempPlayers[i].lose + 1;
				setPlayers([...tempPlayers]);

				flag = 1;
				console.log('in');
				break;
			}
		}
		if (flag === 0) {
			p.games = 1;
			if (s > 0) p.win = 1;
			else p.lose = 1;
			setPlayers([...tempPlayers, p]);
		}
		console.log('loop');
	};
	const palyAgin = (num, p) => {
		setPage(num);
		setPage(num);
	};
	const closeGame = (num, player) => {
		setPage(num);
		setPage(num);

		initPlayers();
	};

	const changeName = (name, num) => {
		setName(name);
		setPage(num);
	};

	const finishTheGame = (s, p, num) => {
		setScore(s);
		tablePlayers(s, p);
		setPage(num);
	};

	let newTable = players.sort(function (a, b) {
		return a.win - b.win;
	});
	console.log(newTable);

	const showComponent = () => {
		if (page === 1) {
			return <HomePage changePage={changeName} players={players} />;
			// return <HomePage changePage={changeName} newTable={newTable} />;
		} else if (page === 2) {
			initPlayers();
			return (
				<Playground
					player={player}
					computer={com}
					finishDetails={finishTheGame}
				/>
			);
		} else if (page === 3) {
			if (score > 0) {
				player.win++;
				com.lose++;
			} else {
				com.win++;
				player.lose++;
			}
			com.games++;
			player.games++;
			return (
				<Finish
					score={score}
					player={player}
					palyAgin={palyAgin}
					closeGame={closeGame}
					setPage={setPage}
					players={players}
					setPlayers={setPlayers}
					tablePlayers={tablePlayers}
				/>
			);
		}
	};

	return <div className="App">{showComponent()}</div>;
}

export default App;

class Player {
	name = '';
	win = 0;
	lose = 0;
	games = 0;
	deck = null;

	constructor(name, deck) {
		this.name = name;
		this.deck = deck;
	}
}

class Deck {
	cards = [];

	constructor() {
		this.initDeck();
	}

	initDeck() {
		let cardValue = 1;
		for (let i = 0; i < 13; i++) {
			for (let j = 0; j < 4; j++) {
				this.cards.push(cardValue);
			}
			cardValue++;
		}
	}

	getCard() {
		let rnd = Math.floor(Math.random() * this.cards.length);
		let card = this.cards.splice(rnd, 1);
		return card[0];
	}
}
