## Ant Design

### 介绍

​	阿里巴巴产品，Ant Design 是一个致力于提升『用户』和『设计者』使用体验的中台设计语言。它模糊了产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色边界，将进行 UE 设计和 UI 设计人员统称为『设计者』，利用统一的规范进行设计赋能，全面提高中台产品体验和研发效率。

​	详细介绍可点击[官网](https://ant.design/index-cn)

### 特性

+ 提炼自企业级中后台产品的交互语言和视觉风格
+ 开箱即用的高质量 React 组件
+ 使用 TypeScript 构建，提供完整的类型定义文件
+ 基于 npm + webpack + babel 的工作流，支持 ES2015 和 TypeScript

### 浏览器支持

​	现代浏览器和 IE9 及以上

### 安装

​	使用 npm 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

- 可以通过 npm 直接安装到项目中，使用 `import` 进行引用。

```
	$ npm install antd --save
```

- 引入样式

```
	import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
```

- 应用实例

```
  import React from 'react';
  import { Button } from 'antd';
  import './App.css';

  class App extends React.Component {
    render() {
      return (
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
      );
    }
  }
  export default App;
```

### Demo效果

![Demo](https://github.com/ecidi/coding-specification/blob/master/images/antd/ant_design.png)