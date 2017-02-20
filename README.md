### JavaScript 的图表库 [ECharts](http://echarts.baidu.com/index.html)

​	ECharts，一个纯 Javascript 的图表库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的 Canvas 类库 [ZRender](https://github.com/ecomfe/zrender)，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。

​	ECharts 3 中更是加入了更多丰富的交互功能以及更多的可视化效果，并且对移动端做了深度的优化。

#### ECharts特性介绍

- 丰富的图表类型

​	ECharts 提供了常规的[折线图](http://echarts.baidu.com/option.html#series-line)，[柱状图](http://echarts.baidu.com/option.html#series-line)，[散点图](http://echarts.baidu.com/option.html#series-scatter)，[饼图](http://echarts.baidu.com/option.html#series-pie)，[K线图](http://echarts.baidu.com/option.html#series-candlestick)，用于统计的[盒形图](http://echarts.baidu.com/option.html#series-boxplot)，用于地理数据可视化的[地图](http://echarts.baidu.com/option.html#series-map)，[热力图](http://echarts.baidu.com/option.html#series-heatmap)，[线图](http://echarts.baidu.com/option.html#series-lines)，用于关系数据可视化的[关系图](http://echarts.baidu.com/option.html#series-graph)，[treemap](http://echarts.baidu.com/option.html#series-treemap)，多维数据可视化的[平行坐标](http://echarts.baidu.com/option.html#series-parallel)，还有用于 BI 的[漏斗图](http://echarts.baidu.com/option.html#series-funnel)，[仪表盘](http://echarts.baidu.com/option.html#series-gauge)，并且支持图与图之间的混搭。

- 多个坐标系的支持

​	ECharts 3 开始独立出了“坐标系”的概念，支持了直角坐标系（catesian，同 grid）、极坐标系（polar）、地理坐标系（geo）。图表可以跨坐标系存在，例如折、柱、散点等图可以放在直角坐标系上，也可以放在极坐标系上，甚至可以放在地理坐标系中。

- 移动端的优化

​	流量珍贵的移动端需要图表库的体积尽量小。ECharts 和 ZRender 代码的重构，带来了核心部分体积的减小。ECharts 组件众多，并且后面会持续增加，我们提供了更细粒度的按需打包能力。最小体积缩小为 ECharts 2 的 40%。

- 深度的交互式数据探索

​	交互是从数据中发掘信息的重要手段。“总览为先，缩放过滤按需查看细节”是数据可视化交互的基本需求。ECharts 一直在*交互*的路上前进，我们提供了 [legend](http://echarts.baidu.com/option.html#legend) [visualMap](http://echarts.baidu.com/option.html#visualMap) [dataZoom](http://echarts.baidu.com/option.html#dataZoom) [tooltip](http://echarts.baidu.com/option.html#tooltip)等组件以及图表附带的漫游，选取等操作提供了数据筛取、视图缩放、展示细节等能力。ECharts 3 中，对这些组件进行了广泛增强，例如支持在数据的各种坐标轴、维度进行数据过滤、缩放，以及在更多的图中采用这些组件。

- 大数据量的展现

​	借助 Canvas 的能力，ECharts 在散点图中能够轻松展现上万甚至上十万的数据。

- 多维数据的支持以及丰富的视觉编码手段

​	ECharts 3 开始加强了对多维数据的支持。除了加入了平行坐标等常见的多维数据可视化工具外，对于传统的散点图等，传入的数据也可以是多个维度的。配合视觉映射组件 [visualMap](http://echarts.baidu.com/option.html#visualMap) 提供的丰富的视觉编码，能够将不同维度的数据映射到颜色，大小，透明度，明暗度等不同的视觉通道。

- 动态数据

​	ECharts 由数据驱动，数据的改变驱动图表展现的改变。因此动态数据的实现也变得异常简单，只需要获取数据，填入数据，ECharts 会找到两组数据之间的差异然后通过合适的动画去表现数据的变化。

- 绚丽的特效

​	ECharts 针对线数据，点数据等地理数据的可视化提供了吸引眼球的特效。

#### 在webpack中使用ECharts

​	在 `3.1.1` 版本之前 ECharts 在 npm 上的 package 是非官方维护的，从 `3.1.1` 开始由官方 [EFE](https://github.com/ecomfe/) 维护 npm 上 ECharts 和 zrender 的 package。你可以使用如下命令通过 npm 安装 ECharts：

```
npm install echarts --save
```

​	通过 npm 上安装的 ECharts 和 zrender 会放在`node_modules`目录下。可以直接在项目代码中 `require('echarts')` 得到 ECharts。

```javascript
var echarts = require('echarts'); // ES6:  import echarts from 'echarts'

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```

​	默认使用 `require('echarts')` 得到的是已经加载了所有图表和组件的 ECharts 包，因此体积会比较大，如果在项目中对体积要求比较苛刻，也可以只按需引入需要的模块。例如上面示例代码中只用到了柱状图，提示框和标题组件，因此在引入的时候也只需要引入这些模块，可以有效的将打包后的体积从 400 多 KB 减小到 170 多 KB。

```javascript
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts'); // ES6:  import echarts from 'echarts'
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```

可以按需引入的模块列表见 [https://github.com/ecomfe/echarts/blob/master/index.js](https://github.com/ecomfe/echarts/blob/master/index.js)

#### API 参考

​	API参考见[http://echarts.baidu.com/api.html#echarts](http://echarts.baidu.com/api.html#echarts)

#### 配置项手册

​	配置项手册见[http://echarts.baidu.com/option.html#title](http://echarts.baidu.com/option.html#title)

#### Winterfall 2.0框架与ECharts结合Demo

​	Demo分别使用纯ECharts和ECharts-for-React插件，制作Demo;

​	依赖安装如下：

```
npm install echarts --save
npm install echarts-for-react --save
```

​	效果如图：

![ECharts](https://github.com/ecidi/coding-specification/blob/master/images/echarts/echarts_echars.png)

![ECharts-for-React](https://github.com/ecidi/coding-specification/blob/master/images/echarts/echarts_rechars.png)