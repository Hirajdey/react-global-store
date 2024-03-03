
import { actionsType } from '../actions/actions';
import { appStateInitialDataType } from '../appState/appState';

export const appReducer = (state:appStateInitialDataType, action:actionsType) => {
	switch(action.type) {
		case "SET_POST" : {
			return {
				...state,
				posts: action.payload
			}
		}
		case "ADD_POST" : {
			return {
				...state,
				posts: [...state.posts, action.payload]
			}
		}
		default: return state;
	}
};