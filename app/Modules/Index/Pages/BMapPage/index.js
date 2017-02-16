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

import Map from 'Components/BMap/Map';
import Marker from 'Components/BMap/Marker';
import Polyline from 'Components/BMap/Polyline';

import { generatePoints, getDistance, generatePointsOld } from 'Components/BMap/Mock';

export class BMapPage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	route: null,
		    latitude: 121.499 + Math.random() / 10,
		    longitude: 31.234 + Math.random() / 10,
		    points: [],
        };
    }

	componentDidMount() {
	}

	onMapLoadOld = () => {
	    const now = performance.now();
	    this.setState({points: generatePointsOld(this.state.latitude, this.state.longitude, 2000, 10)}, () => {
	      console.log('total', performance.now() - now);
	    });
  	}
	onMapLoad = async () => { // 判断距离 生成20个
		const now = performance.now();
		const walking = new BMap.WalkingRoute(this.refs.map.map);
		let need = 10;
		while (need > 0) {
		  const points = await generatePoints(walking, this.state.latitude, this.state.longitude, 2000, Math.min(need, 5));
		  need -= points.length;
		  this.setState({points: this.state.points.concat(points)});
		}
		console.log('total', performance.now() - now);
	}

	onMarkerClick = (longitude, latitude) => (evt) => {
		console.log('clicked marker');
		var walking = new BMap.WalkingRoute(this.refs.map.map);
		const endPoint = new BMap.Point(latitude, longitude);
		const startPoint = new BMap.Point(this.state.latitude, this.state.longitude);
		console.log(startPoint, endPoint);
		walking.search(startPoint, endPoint);
		walking.setSearchCompleteCallback((rs) => {
			console.log(walking.getResults());
			var chartData = walking.getResults().getPlan(0).getRoute(0).getPath();
			console.log(getDistance(chartData[chartData.length - 1], endPoint));
			this.setState({route: chartData});
		});
	}

	onMarkerClickNew = (index) => {
		return () => {
			requestAnimationFrame(() => {
				this.setState({route: this.state.points[index].route});
			});
		}
	}

	onMapClick = (evt) => {this.setState({route: null})}

	openFeaturesPage = () => {
		this.props.changeRoute('/features');
	};

	render() {
		return (
			<div>
				<Helmet title="BMapPage" />
				<div className={styles['route-body']}>
					<div className={styles['row-container']}>
						<div className={styles['row-2']}>
							<Map
					          ref="map"
					          initialCenter={[this.state.latitude, this.state.longitude]}
					          initialZoom={14}
					          onClick={this.onMapClick}
					          onLoad={this.onMapLoad}
					        >
					          {
					            this.state.points.map((item, ind) => {
					              return (
					                <Marker
					                  key={ind}
					                  longitude={item.longitude}
					                  latitude={item.latitude}
					                  // icon={icon}
					                  onClick={this.onMarkerClickNew(ind)}
					                />
					              )
					            })
					          }
					          <Polyline points={this.state.route} />
					        </Map>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

BMapPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(BMapPage);
