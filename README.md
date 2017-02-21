### Leaflet

(an open-source JavaScript libraryfor mobile-friendly interactive maps)

Leaflet 是一个为建设移动设备友好的互动地图，而开发的现代的、开源的 JavaScript 库。它是由 Vladimir Agafonkin 带领一个专业贡献者团队开发，虽然代码仅有 33 KB，但它具有开发人员开发在线地图的大部分功能。

Leaflet设计坚持简便、高性能和可用性好的思想，在所有主要桌面和移动平台能高效运作，在现代浏览器上会利用HTML5和CSS3的优势，同时也支持旧的浏览器访问。支持插件扩展，有一个友好、易于使用的API文档和一个简单的、可读的源代码。

### 相关下载

​	目前下载稳定版本 [Leaflet](http://leafletjs.com/download.html) 1.0.3；

#### 三种引用方式

- 引用CDN方式

```javascript
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
```

- 本地文件引用方式

```javascript
<link rel="stylesheet" href="/path/to/leaflet.css" />
<script src="/path/to/leaflet.js"></script> <!-- or use leaflet-src.js --!>
```

- 使用NPM包管理器方式

```javascript
npm install leaflet --save
//引用方式
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
```

#### 源码编译

- 安装Node
- 安装jake

```
npm install -g jake
npm install
```

- 在源码目录编译

```
jake build  
```

编译之后，在相应目录下生成dist文件夹，包含`leaflet.js`、`leaflet-src.js`、`leaflet.css`、``images` `；

### 相关插件

- [ChineseTmsProviders](https://github.com/htoooth/Leaflet.ChineseTmsProviders)，加载国内瓦片地图插件，加载地图包含：天地图、高德地图、谷歌地图和智图；
- [Esri-Leaflet](https://github.com/Esri/esri-leaflet)，使用结合Leaflet的ArcGIS服务的一系列工具；

### demo_leaflet for winterfall 2.0

- providers.js

```javascript
import L from 'leaflet';

function getChinaProviderByType(type,options) {
    let providers = {
        // 天地图
        TianDiTu: {
            Normal: {
                Map: "http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}",
                Annotion: "http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}",
            },
            Satellite: {
                Map: "http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}",
                Annotion: "http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}",
            },
            Terrain: {
                Map: "http://t{s}.tianditu.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}",
                Annotion: "http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}",
            },
            Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
        },
        // 高德
        GaoDe: {
            Normal: {
                Map: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
            },
            Satellite: {
                Map: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
                Annotion: 'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
            },
            Subdomains: ["1", "2", "3", "4"]
        },
        // 谷歌
        Google: {
            Normal: {
                Map: "http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
            },
            Satellite: {
                Map: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
            },
            Subdomains: []
        },
        // 智图
        Geoq: {
            Normal: {
                Map: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
                Color: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}",
                PurplishBlue: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
                Gray: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
                Warm: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
                Cold: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetCold/MapServer/tile/{z}/{y}/{x}"
            },
            Subdomains: []

        }
    }

    let parts = type.split('.');

    let providerName = parts[0];
    let mapName = parts[1];
    let mapType = parts[2];

    let url = providers[providerName][mapName][mapType];

    options.subdomains = providers[providerName].Subdomains;

    return L.tileLayer(url, options);
};

export default getChinaProviderByType;

```

- styles.css

```css
:global(#mapid) {
	width: 960px;
	height: 600px;
}
```

- Map.js

```javascript
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
```

- LfMap.js

```javascript
import Map from 'Components/LfMap/Map';
export class LfMapPage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };
    }

	componentDidMount() {
	}

	openFeaturesPage = () => {
		this.props.changeRoute('/features');
	};

	render() {
		return (
			<div>
				<Helmet title="Leaflet Map" />
				<div className={styles['route-body']}>
					<div className={styles['row-container']}>
						<div className={styles['row-2']}>
							<h4><a href="http://leafletjs.com/index.html" target="_blank">Leaflet</a> Demo,数据源是天地图数据</h4>
							<Map />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
LfMapPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(LfMapPage);
```

- 加载天地图效果如下图

![demo_leaflet](https://github.com/ecidi/coding-specification/blob/master/images/leaflet/leaflet.png)