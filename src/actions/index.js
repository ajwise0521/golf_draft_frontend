import { GET_TOURNAMENT_PLAYERS } from './types.js';
// import history from '../history';
// import golf_draft from '../apis/golf_draft';
import axios from 'axios';

export const getPlayers = (tournamentId) => async dispatch => {

	const response = await axios.get('http://golf_draft.test/api/players/1');

	dispatch({ type: GET_TOURNAMENT_PLAYERS, payload: response.data });
}