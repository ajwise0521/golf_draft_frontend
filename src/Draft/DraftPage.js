import React from 'react';
import DraftPlayersList from './DraftPlayersList';
import DraftedTeams from './DraftedTeams';

class DraftPage extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xl-4">
						<DraftPlayersList/>
					</div>
					<div className="col-xl-8">
						<DraftedTeams/>
					</div>
				</div>
			</div>
		);
	}
}

export default DraftPage;