/*
 * Actions
 */

import {
	LOAD_REPOS,
	LOAD_REPOS_SUCCESS,
	LOAD_REPOS_ERROR,
} from './actionTypes';

//<: =======================
// 用户github项目数据
export function loadRepos(username) {
	return {
		type: LOAD_REPOS,
		username
	};
}

export function reposLoaded(repos) {
	return {
		type: LOAD_REPOS_SUCCESS,
		repos,
	};
}

export function repoLoadingError(error) {
	return {
		type: LOAD_REPOS_ERROR,
		error,
	};
}
// =======================:>
