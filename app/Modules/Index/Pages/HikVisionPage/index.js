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
/* styles */
import styles from './styles.css';

import 'Components/ckplayer/ckplayer.js';

export class HikVisionPage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }

	componentDidMount() {

		/*const script = document.createElement("script");
		script.src = 'http://urban.ecidi.com:8006/hikvision/ckplayer/ckplayer.js';
		document.body.appendChild(script);*/

		let flashvars;
        flashvars = {
            f: 'http://urban.ecidi.com:8006/hikvision//ckplayer/m3u8.swf',
            a: 'http://open.ys7.com/openlive/7edcea80f1284dfdaebe1af6573dfb67.hd.m3u8', //此处填写购买获取到的视频播放地址
            c: 0,
            p: 1,
            s: 4,
            lv: 1,
        };
        let params = {
			bgcolor: '#FFF',
			allowFullScreen: true,
			allowScriptAccess: 'always',
			wmode: 'transparent',
        };
        CKobject.embedSWF('http://urban.ecidi.com:8006/hikvision/ckplayer//ckplayer.swf',
        	'videoPlay', 'video', '100%', '100%', flashvars, params);

	}

	openFeaturesPage = () => {
		this.props.changeRoute('/features');
	};

	render() {
		return (
			<div>
				<Helmet title="Readme" />
				<div className={styles['route-body']}>
					<div className={styles['row-container']}>
						<div className={styles['row-2']}>
							<div className={styles['row-video']} id="videoPlay"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

HikVisionPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(HikVisionPage);
