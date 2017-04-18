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
import { Button } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import styles from './styles.css';

export class SignaturePage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }

	componentDidMount() {
	}

	DoJFSignature = () => {
		//所保护字段
		DocForm.SignatureControl.FieldsList="XYBH=协议编号;BMJH=保密级别;JF=甲方签章;HZNR=合作内容;QLZR=权利责任;CPMC=产品名称;DGSL=订购数量;DGRQ=订购日期";
		//设置签章位置是相对于哪个标记的什么位置
		DocForm.SignatureControl.DivId="jfdiv";
		//文件版签章用户
		DocForm.SignatureControl.UserName="lyj";
		//执行签章操作
		DocForm.SignatureControl.RunSignature();
	};

	DoYFSignature = () => {
		this.props.changeRoute('/features');
	};

	DoSXSignature = () => {
		this.props.changeRoute('/features');
	};

	ParameterSetting = () => {
		this.props.changeRoute('/features');
	};

	WebGetSignatureInfo = () => {
		this.props.changeRoute('/features');
	};

	BatchCheckSign = () => {
		this.props.changeRoute('/features');
	};

	MoveSignature = () => {
		this.props.changeRoute('/features');
	};

	PrintDocument = () => {
		this.props.changeRoute('/features');
	};

	ShowSignature = (type) => {
		this.props.changeRoute('/features');
	};

	ShedCryptoDocument = () => {
		this.props.changeRoute('/features');
	};

	ResetCryptoDocument = () => {
		this.props.changeRoute('/features');
	};

	render() {
		return (
			<article>
				<Helmet title="Signature" />
				<div className={styles['route-body']}>
					<div className={styles['row-container']}>
						<div className={styles['row-2']}>
							<Button className={styles['row-button']}>保存文档</Button>
						    <Button className={styles['row-button']} onClick={() => this.DoJFSignature()}>甲方签章</Button>
						    <Button className={styles['row-button']} onClick={() => this.DoYFSignature()}>乙方签章</Button>
						    <Button className={styles['row-button']} onClick={() => this.DoSXSignature()}>签字演示</Button>
						    <Button className={styles['row-button']} onClick={() => this.ParameterSetting()}>辅助功能</Button>
						    <Button className={styles['row-button']} onClick={() => this.WebGetSignatureInfo()}>签章信息</Button>
						    <Button className={styles['row-button']} onClick={() => this.BatchCheckSign()}>批量验证</Button>
						    <Button className={styles['row-button']} onClick={() => this.MoveSignature()}>移动盖章</Button>
						    <Button className={styles['row-button']} onClick={() => this.PrintDocument()}>打印控制</Button><br/>
						    <Button className={styles['row-button']} onClick={() => this.ShowSignature(0)}>隐藏签章</Button>
						    <Button className={styles['row-button']} onClick={() => this.ShowSignature(1)}>隐藏签章</Button>
						    <Button className={styles['row-button']} onClick={() => this.ShedCryptoDocument()}>脱密签章</Button>
						    <Button className={styles['row-button']} onClick={() => this.ResetCryptoDocument()}>脱密还原</Button>
						</div>
						<div className={styles['row-2']}>
							<div id="jfdiv"  className={styles['row-jfqz']}>
					              <div className={styles['row-jfqz-name']} >
					              		<font>甲方签章：</font>
					              </div>
					              <div className={styles['row-jfqz-content']}>
					              </div>
							</div>
						</div>
					</div>
				</div>
			</article>
		);
	}
}

SignaturePage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(SignaturePage);
