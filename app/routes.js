/**
 * routes.js 整个应用的路径配置
 */

import { getAsyncInjectors } from './Utils/asyncInjectors';
import { persistStore, purgeStoredState } from 'redux-persist';
import localForage from 'localForage';

const errorLoading = (err) => {
	console.error('动态页面加载失败！', err);
};

const loadModule = (cb) => (componentModule) => {
	cb(null, componentModule.default);
};

export default function createRoutes(store) {
	// 异步注入
	const {
		injectReducer,
		injectSagas
	} = getAsyncInjectors(store);

	// 为解决数据持久化之后，
	// 刷新页面导致初始化的redux store和缓存的redux store结构不对应问题。
	Promise.all([
		System.import('Pages/HomePage/reducer'),
	]).then(([reducer]) => {
		injectReducer('home', reducer.default);
	});

	return [{
		path: '/home',
		getComponent(nextState, cb) {
			const importModules = Promise.all([
				System.import('Pages/HomePage/sagas'),
				System.import('Pages/HomePage'),
			]);

			const renderRoute = loadModule(cb);

			importModules.then(([sagas, component]) => {
				injectSagas(sagas.default);

				renderRoute(component);
			});

			importModules.catch(errorLoading);
		},
	}, {
		path: '/features',
		getComponent(nextState, cb) {
			const importModules = Promise.all([
				System.import('Pages/FeaturePage'),
			]);
			
			const renderRoute = loadModule(cb);

			importModules.then(([component]) => {
				renderRoute(component);
			});

			importModules.catch(errorLoading);
		},
	}];
}
