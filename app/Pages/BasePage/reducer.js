/*
 * Reducer 接收旧的 state 和 action，返回新的 state。
 */

import {
	CHANGE_USERNAME,
	PURGE_USERNAME,
} from './actionTypes';
import { fromJS } from 'immutable';

// 初始化本页面的state
const initialState = fromJS({
	username: false,
});

function baseReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_USERNAME:
			return state
				.set('username', action.username);
		case PURGE_USERNAME:
			return state
				.set('username', false);
		default:
			return state;
	}
}

export default baseReducer;
