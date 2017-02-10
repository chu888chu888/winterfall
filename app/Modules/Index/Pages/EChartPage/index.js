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
// import echarts
import echarts from 'echarts';

export class EChartPage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }

	componentDidMount() {
		// 基于准备好的dom，初始化echarts实例
		const myChart = echarts.init(document.getElementById('echart'));
		// 绘制图表
		myChart.setOption({
            title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x: 'center',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
                confine: true,
                borderWidth: 60,
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' },
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        });
	}

	openFeaturesPage = () => {
		this.props.changeRoute('/features');
	};

	render() {
		const username = this.props.username;
		const pnt = (username || username !== '') ? '，' : '';
		return (
			<div>
				<Helmet title="EChart" />
				<div className={styles['route-body']}>
					<div className={styles['row-container']}>
						<div className={styles['row-2']}>
							<p>
								<h3>{username}{pnt}欢迎使用Ecidi前端开发框架</h3>
							</p>
							<div id="echart" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

EChartPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(EChartPage);
