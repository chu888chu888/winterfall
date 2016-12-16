
### 借鉴winter-simple的，敬请期待完整的文档。

### winterfall-simple  v 1.0.0

*—— Winter is coming*

#### 目录结构

1. `app/`：源代码根目录；

  1. `Components/`：功能性模块，无法通过`url`单独导航到；

    1. `Button/`：模块名字，可通过`import`方式导入到实际页面；

      - `index.js`：默认内容；
      - `styles.css`：默认样式；

  2. `Pages/`：页面模块，可通过`url`单独导航到；

    1. `HomePage/`：页面名字，在`routes.js`中引入；

      - `index.js`：默认内容；
      - `styles.css`：默认样式；
      - `fetch.js`：处理页面内部所有请求；

  3. `Utils/`：工具模块；

    1. `request.js`：异步请求工具；

  4. `app.js`：项目总入口；

  5. `index.html`：项目主页面模板；

  6. `routes.js`：项目所有路由，配置`url`；

2. `docs/`：存放开发过程中产生的开发文档；

  1. `***.md`：描述信息的`markdown`文件；

3. `server/`：`Node`服务器配置信息，用于本地研发；

4. `.gitignore`：屏蔽`git`版本控制路径；

5. `package.json`：控制`npm`依赖包；

6. `README.md`：项目基础描述信息；

7. `webpack.base.config.js`：`webpack`基础配置信息；

8. `webpack.dev.config.js`：`webpack`开发配置信息；

9. `webpack.prod.config.js`：`webpack`产品配置信息；

#### 安装指令

```node
$ git clone <url>
```

```node
$ npm install
```

国内可以选择使用`cnpm`--[点击这里](https://npm.taobao.org/)

#### 项目启动

```node
$ npm run start
```

打开游览器，地址栏输入`http://localhost:8080/home`；

#### License

[GPL](https://tldrlegal.com/license/gnu-general-public-license-v2)










