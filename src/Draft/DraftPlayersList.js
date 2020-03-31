import React from 'react';
import { connect } from 'react-redux';

import { getPlayers } from '../actions';

class DraftPlayersList extends React.Component {
	componentDidMount() {
		this.props.getPlayers();
	}

	renderList() {
		return this.props.players.map(player => {
			return (
				<li className="list-group-item" key={player.rank}>
					{player.rank}. {player.name}
					<button className="float-right">Draft</button>
				</li>
			);
		})
	}

	render() {
		console.log(this.props.players);
		return (
			<div className="container">
				<ul>
				{this.renderList()}
				</ul>
			</div>
		);
	}

}

const mapStateToProps = (state, ownProps) => {
	console.log(state.players);
	return {
		players: Object.values(state.players)
	}
}

export default connect(mapStateToProps, { getPlayers })(DraftPlayersList);