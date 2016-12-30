/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 *
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * FeaturePage
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

/* reselects & actions */
import { purgeUsername } from 'Pages/BasePage/actions';

/* components */
import Button from 'Components/Button';

/* styles */
import styles from './styles.css';

export class FeaturePage extends React.Component {

	componentDidMount() {
	}

	openHomePage = () => {
		this.props.dispatch(push('/home'));
	};

	render() {
		return (
			<div>
				<Helmet title="当前是第二页"/>
				<h1>
					当前是第二页
				</h1>
				<ul className={styles.list}>
					<li className={styles['list-item']}>
						<p className={styles['list-item-title']}>
							快速脚手架
						</p>
						<p>
							组件、页面、路由、选择器、请求服务自动化创建。
						</p>
					</li>
				</ul>
				<Button handleRoute={this.openHomePage}>首页</Button>
			</div>
		);
	}
}

FeaturePage.propTypes = {
	dispatch: React.PropTypes.func,
};

export default connect()(FeaturePage);