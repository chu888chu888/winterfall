## 百度地图开放 JavaScript API

### JavaScript API v2.0

​	百度地图JavaScript API是一套由JavaScript语言编写的应用程序接口，可帮助您在网站中构建功能丰富、交互性强的地图应用，支持PC端和移动端基于浏览器的地图应用开发，且支持HTML5特性的地图开发。

​	该套API免费对外开放。自v1.5版本起，您需先申请密钥（ak）才可使用，接口（除发送短信功能外）无使用次数限制。在您使用百度地图JavaScript API之前，请先阅读百度地图API[使用条款](http://lbsyun.baidu.com/index.php?title=open/law#qa001)。任何非营利性应用请直接使用，商业应用请参考[使用须知](http://lbsyun.baidu.com/index.php?title=open/question)。

### 开发指南

##### 版本说明及申请API ak

​	为了统一平台服务的配额管理，JavaScript API在新版本引入ak机制。JavaScript API v1.4及以前版本无须申请密钥（ak），自v1.5版本开始需要先[申请密钥（ak）](http://lbsyun.baidu.com/apiconsole/key?application=key)，才可使用，如需获取更高配额，请[点击申请](http://lbsyun.baidu.com/apiconsole/auth)认证企业用户。

地址：

```html
// 使用V1.4及以前版本的引用方式：
<script src="http://api.map.baidu.com/api?v=1.4" type="text/javascript"></script>
// 使用V2.0版本的引用方式：
<script src="http://api.map.baidu.com/api?v=2.0&ak=您的密钥" type="text/javascript"></script>
```

当权限验证(ak)失败时，会报如下错误：

![js-ak-failure.jpg](http://developer.baidu.com/map/static/img/js-ak-failure.jpg)

##### 示例Demo

```html
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<style type="text/css">
	body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
	</style>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=您的密钥"></script>
	<title>地图展示</title>
</head>
<body>
	<div id="allmap"></div>
</body>
</html>
<script type="text/javascript">
	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
</script>
```

### bmap Demo制作

- 添加插件`react-addons-shallow-compare`；
- 封装组件`BMap`；包含Map.js、Marker.js、Polyline.js；
- 效果如下所示：

![百度地图开放API](https://github.com/ecidi/coding-specification/blob/master/images/bmap/bmap.png)

