/*
 * Actions
 */

import {
	CHANGE_USERNAME,
	PURGE_USERNAME,
} from './actionTypes';

export function changeUsername(username) {
	return {
		type: CHANGE_USERNAME,
		username
	};
}

export function purgeUsername() {
	return {
		type: PURGE_USERNAME,
	};
}

