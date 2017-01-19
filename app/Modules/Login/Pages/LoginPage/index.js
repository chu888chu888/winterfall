/*
 * LoginPage
 * at the '/login' route
 *
 */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { changeUserName, changePassword, login } from '../../Store/actions';
import { selectLoginState } from './selectors';

import styles from './styles.css';

export class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.onKeyup = this.onKeyup.bind(this);// 声明函数onKeyup
	}

	componentDidMount() {
		document.getElementById('username').focus();
		const logBtn = document.getElementById('password');
		logBtn.addEventListener('keyup', this.onKeyup);
	}

	componentDidUpdate() {
		// 登录成功则跳转到首页面
		if (this.props.islogin === 1) {
			this.openBasePage();
		}
	}

	componentWillUnmount() {
		const logBtn = document.getElementById('password');
		logBtn.removeEventListener('keyup', this.onKeyup, false);
	}

	// enter键登录函数
	onKeyup(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById('loginBtn').click();
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const logInfo = {};
		const username = document.getElementById('username');
		const password = document.getElementById('password');
		logInfo.username = username.value;
		logInfo.password = password.value;
		// 判断一下用户和密码是否补全
		this.props.changeUserName(logInfo.username);
		this.props.changePassword(logInfo.password);
		if (this.props.login) {
			this.props.login();
		}
	}
	/**
	 * 改变route
	 * @param  {string} 指向我们想跳转过去的路径
	 */
	openRoute = (route) => {
		this.props.changeRoute(route);
	};
	/**
	 * 改变路由到 '/'
	 */
	openBasePage = () => {
		this.openRoute('/index');
	};

	render() {
		return (
			<div className={styles.login}>
				<Helmet title="登录" />
				<div className={styles.systemTitle}></div>
				<div className={styles.loginBox}>
					<input id="username" type="text" placeholder="用户名" />
					<br />
					<input id="password" type="password" placeholder="密码" />
					<br />
					{this.props.islogin === 0 ? <div className={styles.error}>用户名或密码错误</div> : <div className={styles.error}></div>}
					<button id="loginBtn" onClick={(e) => this.handleSubmit(e)}>登录</button>
				</div>
			</div>
		);
	}
}

LoginPage.propTypes = {
	changeRoute: React.PropTypes.func,
	changeUserName: React.PropTypes.func,
	changePassword: React.PropTypes.func,
	login: React.PropTypes.func,
	islogin: React.PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
	islogin: selectLoginState(),
});

export function mapDispatchToProps(dispatch) {
	return {
		changeUserName: (username) => dispatch(changeUserName(username)),
		changePassword: (password) => dispatch(changePassword(password)),
		changeRoute: (url) => dispatch(push(url)),
		login: () => dispatch(login()),
	};
}

// react-redux 的使用方式
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// 连接 React 组件与 Redux store。
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
