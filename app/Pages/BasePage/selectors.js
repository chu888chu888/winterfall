/**
 * Reselect 高效地获取store里的数据。
 * eg: 
 * const mySelector = createSelector(
 *     state => state.values.value1,
 *     state => state.values.value2,
 *     (value1, value2) => value1 + value2
 * )
 */

import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectUsername = () => createSelector(
	selectGlobal(),
	(globalState) => globalState.get('username')
);

const selectLocationState = () => {
	let prevRoutingState;
	let prevRoutingStateJS;

	return (state) => {
		// 从store中获取route的值判断是否发生变动。
		// 体现到syncHistoryWithStore中，当history变化时会引发LOCATION_CHANGE action。
		const routingState = state.get('route');
		
		if (!routingState.equals(prevRoutingState)) {
			prevRoutingState = routingState;
			prevRoutingStateJS = routingState.toJS();
		}

		return prevRoutingStateJS;
	};
};

export {
	selectGlobal,
	selectUsername,
	selectLocationState,
};