
import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './styles.css';
import getChinaProviderByType from './Providers';


export class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		this.initLfMap();
	}

	initLfMap() {
		const normalm = getChinaProviderByType('TianDiTu.Normal.Map', {
			maxZoom: 18,
			minZoom: 5,
			}),
			normala = getChinaProviderByType('TianDiTu.Normal.Annotion', {
			maxZoom: 18,
			minZoom: 5,
			}),
			imgm = getChinaProviderByType('TianDiTu.Satellite.Map', {
			maxZoom: 18,
			minZoom: 5,
			}),
			imga = getChinaProviderByType('TianDiTu.Satellite.Annotion', {
			maxZoom: 18,
			minZoom: 5,
			});

		const normal = L.layerGroup([normalm, normala]),
			image = L.layerGroup([imgm, imga]);

		const baseLayers = {
			'地图': normal,
			'影像': image,
		}

		const littleton = L.marker([22.5, 113.96]).bindPopup('This is Littleton, CO.'),
			  denver    = L.marker([22.53, 113.97]).bindPopup('This is Denver, CO.');
		const cities = L.layerGroup([littleton, denver]);

		const overlayLayers = {
			'Cities': cities,
		}

		const map = L.map('mapid', {
			center: [22.5, 113.96],
			zoom: 12,
			layers: [image],
			zoomControl: false,
		});

		L.control.layers(baseLayers, overlayLayers).addTo(map);
		L.control.zoom({
			zoomInTitle: '放大',
			zoomOutTitle: '缩小',
		}).addTo(map);
	}


	render() {
		return (
			<div id="mapid"></div>
		);
	}
}

export default Map;

