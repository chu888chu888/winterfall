/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 *
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Actions
 */

import {
	TASK_SUCCESS,
	TASK_ERROR,
} from './actionTypes';

export function changeUsername(username) {
	return {
		type: TASK_SUCCESS,
		username: username,
	};
}

export function purgeUsername() {
	return {
		type: TASK_ERROR,
	};
}

