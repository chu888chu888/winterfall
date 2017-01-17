
### winterfall  v 2.0.0

*—— Winter is coming*

#### 目录结构

1. `app/`：源代码根目录；

  1. `Components/`：功能性模块，无法通过`url`单独导航到；

    1. `Button/`：模块名字，可通过`import`方式导入到实际页面；

      - `index.js`：默认内容；
      - `styles.css`：默认样式；

  2. `Modules/`：页面大模块，包含几大业务模块;

    1. `Index/`：首页模块

      - `Images/`: 图片目录；

      - `Pages/`: 页面子模块，可通过`url`单独导航到；

        - `index.js`：默认内容；
        - `styles.css`：默认样式；
        - `selectors.js`：所有从store中获取内容的函数；

      - `Store`: 数据流页面，数据存储及流转等过程；
      
        - `action.js`：所有的action函数（Redux）；
        - `actionType.js`：所有的actionType定义（Redux）；
        - `reducer.js`：所有store变动函数（Redux）；
        - `sagas.js`：所有saga函数，主要是和fetch进行配合；
      
  3. `Utils/`：工具模块；

    1. `request.js`：异步请求工具；
    
    2. `asyncInjectors`：异步注入saga和reducer工具；

  4. `app.js`：项目总入口；

  5. `index.html`：项目主页面模板；

  6. `routes.js`：项目所有路由，配置`url`；

  7. `reducers.js`：项目基础`reducer`以及所有其他`reducer`的集合；

  8. `store.js`：项目构建store，加入所有的依赖；

2. `docs/`：存放开发过程中产生的开发文档；

  1. `***.md`：描述信息的`markdown`文件；

3. `server/`：`Node`服务器配置信息，用于本地研发；

4. `.gitignore`：屏蔽`git`版本控制路径；

5. `.eslintrc`: `ESLint` 配置文件；

6. `package.json`：控制`npm`依赖包；

7. `README.md`：项目基础描述信息；

8. `webpack.base.config.js`：`webpack`基础配置信息；

9. `webpack.dev.config.js`：`webpack`开发配置信息；

10. `webpack.prod.config.js`：`webpack`产品配置信息；

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

打开游览器，地址栏输入`http://localhost:8080`；

#### 项目检测

```node
$ npm run lint
```

引入 `eslint`-->[点击这里](http://eslint.cn/docs/rules/) 代码规范检测机制。

检测内容详见 `.eslintrc` 的配置，具体涵盖如下几项：

1. 箭头函数参数使用圆括号；
2. 箭头函数体使用大括号；
3. object 末尾加逗号；
4. 使用一致的缩进（暂时除去了这项检测，无法配置成'tab'，请自觉使用 tab 完成缩进）；
5. 禁止对 function 的参数进行重新赋值，参数的任何属性值变动不会报错；
6. 禁用 console，出现 console 会出警告；
7. 要求使用模板字面量而非字符串连接；
8. 要求对象字面量的简写或非简写一致性；
9. 其他详见:
  [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)、
  [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)、
  [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)、
  [eslint-plugin-redux-saga](https://github.com/pke/eslint-plugin-redux-saga)

#### Sublime ESlint 插件
1. SublimeLinter
2. SublimeLinter-contrib-eslint

#### License

[GPL](https://tldrlegal.com/license/gnu-general-public-license-v2)


#### 项目更新日志

v2.0.0

1. 新增图片和背景图demo，通过require能通过js动态实现图片路径的变动。
2. 新增代码检测机制。
3. 根据新的代码检测机制调整代码。
4. 完成代码检测机制的文档内容。








