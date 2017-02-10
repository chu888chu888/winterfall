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

import { Breadcrumb, Menu, Icon, Table } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import 'antd/dist/antd.css';

export class AntdPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 1,
		};
	}

	componentDidMount() {
	}

	openFeaturesPage = () => {
		this.props.changeRoute('/features');
	};

	handleClick(e) {
		this.setState({
			current: e.key,
		});
	}

	render() {
		const columns = [{
			title: 'Name',
			dataIndex: 'name',
			render: (text) => <a href="">{text}</a>,
		}, {
			title: 'Age',
			dataIndex: 'age',
		}, {
			title: 'Address',
			dataIndex: 'address',
		}];
		const data = [{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
		}, {
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
		}, {
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
		}, {
			key: '4',
			name: 'Disabled User',
			age: 99,
			address: 'Sidney No. 1 Lake Park',
		}];
		const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {
				console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
			},
			onSelect: (record, selected, selectedRows) => {
				console.log(record, selected, selectedRows);
			},
			onSelectAll: (selected, selectedRows, changeRows) => {
				console.log(selected, selectedRows, changeRows);
			},
			getCheckboxProps: (record) => ({
				disabled: record.name === 'Disabled User',    // Column configuration not to be checked
			}),
		};
		return (
			<div>
				<Helmet title="Readme" />
				<div className={styles['route-body']}>
					<div className={styles['row-container']}>
						<div className={styles['row-2']}>
							<Breadcrumb>
								<Breadcrumb.Item><a href="">Home</a></Breadcrumb.Item>
								<Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
								<Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
								<Breadcrumb.Item><a href="https://ant.design/index-cn" target="_blank">Ant Design of React</a></Breadcrumb.Item>
							</Breadcrumb>
							<Menu
								onClick={this.handleClick.bind(this)}
								style={{ width: 240 }}
								defaultOpenKeys={['sub1']}
								selectedKeys={[this.state.current]}
								mode="inline"
							>
								<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
									<MenuItemGroup title="Item 1">
										<Menu.Item key="1">Option 1</Menu.Item>
										<Menu.Item key="2">Option 2</Menu.Item>
									</MenuItemGroup>
									<MenuItemGroup title="Item 2">
										<Menu.Item key="3">Option 3</Menu.Item>
										<Menu.Item key="4">Option 4</Menu.Item>
									</MenuItemGroup>
								</SubMenu>
								<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
									<Menu.Item key="5">Option 5</Menu.Item>
									<Menu.Item key="6">Option 6</Menu.Item>
								</SubMenu>
								<SubMenu key="sub3" title="Submenu">
									<Menu.Item key="7">Option 7</Menu.Item>
									<Menu.Item key="8">Option 8</Menu.Item>
								</SubMenu>
								<SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
									<Menu.Item key="9">Option 9</Menu.Item>
									<Menu.Item key="10">Option 10</Menu.Item>
									<Menu.Item key="11">Option 11</Menu.Item>
									<Menu.Item key="12">Option 12</Menu.Item>
								</SubMenu>
							</Menu>
							<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

AntdPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(AntdPage);
