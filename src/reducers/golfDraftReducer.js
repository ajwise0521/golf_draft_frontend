import _ from 'lodash';
import { GET_TOURNAMENT_PLAYERS } from '../actions/types';

export default (state={}, action) => {
	switch(action.type) {
		case GET_TOURNAMENT_PLAYERS:
			return { ...state, ..._.mapKeys(action.payload, 'rank') };
		default:
			return state;
	}
}