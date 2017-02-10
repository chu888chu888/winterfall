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

import ReactEcharts from 'echarts-for-react';
// import echarts
import echarts from 'echarts';

export class REChartPage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
		echarts.registerTheme('my_theme', {
			backgroundColor: '#f4cccc',
		});
    }

	componentDidMount() {
	}

	getOption() {
		const option = {
            title: {
                text: '漏斗图',
                subtext: '纯属虚构',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%',
            },
            toolbox: {
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {},
                },
            },
            legend: {
                data: ['展现', '点击', '访问', '咨询', '订单'],
            },
            series: [
                {
                    name: '预期',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    label: {
                        normal: {
                            formatter: '{b}预期',
                        },
                        emphasis: {
                            position: 'inside',
                            formatter: '{b}预期: {c}%',
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.7,
                        },
                    },
                    data: [
                        { value: 60, name: '访问' },
                        { value: 40, name: '咨询' },
                        { value: 20, name: '订单' },
                        { value: 80, name: '点击' },
                        { value: 100, name: '展现' },
                    ],
                },
                {
                    name: '实际',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    maxSize: '80%',
                    label: {
                        normal: {
                            position: 'inside',
                            formatter: '{c}%',
                            textStyle: {
                                color: '#fff',
                            },
                        },
                        emphasis: {
                            position: 'inside',
                            formatter: '{b}实际: {c}%',
                        },
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.5,
                            borderColor: '#fff',
                            borderWidth: 2,
                        },
                    },
                    data: [
                        { value: 30, name: '访问' },
                        { value: 10, name: '咨询' },
                        { value: 5, name: '订单' },
                        { value: 50, name: '点击' },
                        { value: 80, name: '展现' },
                    ],
                },
            ],
        };

        return option;
	}

	openFeaturesPage = () => {
		this.props.changeRoute('/features');
	};

	render() {
		const username = this.props.username;
		const pnt = (username || username !== '') ? '，' : '';
		return (
			<div>
				<Helmet title="REChart" />
				<div className={styles['route-body']}>
					<div className={styles['row-container']}>
						<div className={styles['row-2']}>
							<p>
								<h3>{username}{pnt}欢迎使用Ecidi前端开发框架</h3>
							</p>
							<ReactEcharts
								option={this.getOption()}
								style={{ height: '500px', width: '960px' }}
								theme="my_theme"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

REChartPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(REChartPage);
