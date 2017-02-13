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

import { selectUsername } from 'Modules/Base/Pages/BasePage/selectors';

/* styles */
import styles from './styles.css';

let plugin;

export class CityMakerViewPage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }

	componentDidMount() {
		document.getElementById("citymakerview").innerHTML = '<object  id="plugin"  type="application/x-cm-3d" style="width:960px;height:600px; position: relative; z-index: 99;"></object>';

		plugin = document.getElementById("plugin");
    
	    this.checkToInstall();

	    plugin.project.open("http://urban.ecidi.com:8006/nbMetro.cep", "", "");//inputObj.value即为打开cep路径
	    
	}

	checkToInstall(){
		//判断是否安装runtime
		const ps = plugin.new_PropertySet;
		if (!ps) {
			$('body').append('<iframe src="http://urban.ecidi.com:8006/CityMaker_Runtime_v7.1.160930.exe" style="display: none"></iframe>');
		}
	}

	openFeaturesPage = () => {
		this.props.changeRoute('/features');
	};

	render() {
		const username = this.props.username;
		const pnt = (username || username !== '') ? '，' : '';
		return (
			<div>
				<Helmet title="CityMaker" />
				<div className={styles['route-body']}>
					<div className={styles['row-container']}>
						<div className={styles['row-2']}>
							<div id="citymakerview" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

CityMakerViewPage.propTypes = {
	changeRoute: React.PropTypes.func,
	username: React.PropTypes.string,
};

// 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
const mapStateToProps = createStructuredSelector({
	username: selectUsername(),
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
export default connect(mapStateToProps, mapDispatchToProps)(CityMakerViewPage);
