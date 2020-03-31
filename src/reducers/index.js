import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import golfDraftReducer from './golfDraftReducer';

export default combineReducers({
	form: formReducer,
	players: golfDraftReducer
});