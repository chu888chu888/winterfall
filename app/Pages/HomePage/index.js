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

/* reselects & actions */
import {
	selectRepos,
	selectLoading,
	selectError,
} from './selectors';
import { selectUsername } from 'Pages/BasePage/selectors';
import { loadRepos } from './actions';

/* components */
import RepoListItem from 'Components/RepoListItem';
import Button from 'Components/Button';
import List from 'Components/List';
import ListItem from 'Components/ListItem';
import LoadingIndicator from 'Components/LoadingIndicator';

/* styles */
import styles from './styles.css';


const winter2 = require('./images/winter2.png');
export class HomePage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

	componentDidMount() {
	}

	onChangeUsername = (evt) => {
		this.setState({
			username: evt.target.value,
		});
	};

	onSubmitForm = (evt) => {
		if (evt !== undefined && evt.preventDefault) evt.preventDefault();
		this.props.submitForm(this.state.username);
	};

	openFeaturesPage = () => {
		this.props.changeRoute('/features');
	};

	render() {
		let mainContent = null;

		// loading的时候展示一个loading标识
		if (this.props.loading) {
			mainContent = (<List component={LoadingIndicator} />);
		// 展示存在的错误信息
		} else if (this.props.error !== false) {
			const ErrorComponent = () => (
				<ListItem item={'发生了一些错误, 请再次尝试!'} />
			);
			mainContent = (<List component={ErrorComponent} />);
		// 一切正常并且返回了github项目列表，则将它们展示出来
		} else if (this.props.repos !== false) {
			mainContent = (<List items={this.props.repos} component={RepoListItem} />);
		}

		return (
			<article>
				<Helmet title="首页" />
				<div>
					<section className={`${styles.textSection}`}>
						<h1>
							让我们开始吧!
						</h1>
					</section>
					<section className={`${styles.textSection} ${styles.centered}`}>
						<h2 className={styles.background}>我是背景图</h2>
						<div className={styles.left}>
							真的图片img：
							<img src={winter2} alt="我是真图，上面是背景图！" />
						</div>
					</section>
					<section className={styles.textSection}>
						<h2>
							尝试一下!
						</h2>
						<form className={styles['username-form']} onSubmit={this.onSubmitForm}>
							<label htmlFor="username">
								展示 <input
									id="username"
									className={styles.input}
									type="text"
									placeholder="帐户名"
									value={this.state.username || this.props.username}
									onChange={this.onChangeUsername}
								/> 的Github项目库
							</label>
						</form>
						{mainContent}
					</section>
					<Button handleRoute={this.openFeaturesPage}>下一页</Button>
				</div>
			</article>
		);
	}
}

HomePage.propTypes = {
	repos: React.PropTypes.oneOfType([
		React.PropTypes.array,
		React.PropTypes.bool,
	]),
	loading: React.PropTypes.bool,
	error: React.PropTypes.oneOfType([
		React.PropTypes.object,
		React.PropTypes.bool,
	]),
	username: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.bool,
	]),

	changeRoute: React.PropTypes.func,
	submitForm: React.PropTypes.func,
};

// 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
const mapStateToProps = createStructuredSelector({
	repos: selectRepos(),
	loading: selectLoading(),
	error: selectError(),
	username: selectUsername(),
});

// 如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中。
export function mapDispatchToProps(dispatch) {
	return {
		changeRoute: (url) => dispatch(push(url)),
		submitForm: (username) => {
			dispatch(loadRepos(username));
		},
		dispatch,
	};
}

// react-redux 的使用方式
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// 连接 React 组件与 Redux store。
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
