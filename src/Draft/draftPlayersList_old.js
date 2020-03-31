import React from 'react';
import axios from 'axios';

class DraftPlayersList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {players: []};
	}
	componentDidMount() {
		this.getPlayers();
	}
	async getPlayers() {
		var players = await axios.get('http://golf_draft.test/api/players/1')
		this.setState({players : players.data})
	}

	renderPlayers() {
		console.log(this.state.players);
		return this.state.players.map((player) => {
			return (
		        <li className="list-group-item" key={player.id}>
		          <div className="right floated content">
		          	{player.rank}. {player.name} <button className="button-primary draft-button float-right">Draft</button>
		          </div>
		        </li>
			);
		});
	}

	render() {
		// console.log(this.players.length)
		return (
			<ul className="players-list">
				{this.renderPlayers()}
			</ul>
		);
	}
}

export default DraftPlayersList;