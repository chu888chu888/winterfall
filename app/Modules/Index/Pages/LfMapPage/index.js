/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 *
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * HomePage
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import styles from './styles.css';

import Map from 'Components/LfMap/Map';
export class LfMapPage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }

	componentDidMount() {
	}

	openFeaturesPage = () => {
		this.props.changeRoute('/features');
	};

	render() {
		return (
			<div>
				<Helmet title="Leaflet Map" />
				<div className={styles['route-body']}>
					<div className={styles['row-container']}>
						<div className={styles['row-2']}>
							<h4><a href="http://leafletjs.com/index.html" target="_blank">Leaflet</a> Demo,数据源是天地图数据</h4>
							<Map />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
LfMapPage.propTypes = {
	changeRoute: React.PropTypes.func,
};
// 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
const mapStateToProps = createStructuredSelector({
});
// 如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中。
export function mapDispatchToProps(dispatch) {
	return {
		changeRoute: (url) => dispatch(push(url)),
	};
}
// react-redux 的使用方式
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// 连接 React 组件与 Redux store。
export default connect(mapStateToProps, mapDispatchToProps)(LfMapPage);
