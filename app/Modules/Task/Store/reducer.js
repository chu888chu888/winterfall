/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 *
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Reducer 接收旧的 state 和 action，返回新的 state。
 */

import {
	TASK_SUCCESS,
	TASK_ERROR,
} from './actionTypes';
import { fromJS } from 'immutable';

// 初始化本页面的state
const initialState = fromJS({
	username: '',
});

function baseReducer(state = initialState, action) {
	switch (action.type) {
		case TASK_SUCCESS:
			return state
				.set('username', action.username);
		case TASK_ERROR:
			return state
				.set('username', '');
		default:
			return state;
	}
}

export default baseReducer;
