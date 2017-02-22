
### 360全景图加载

​	加入360全景图，主要借助 [720yun](https://720yun.com/)，将制作好的数据在720云平台进行发布，然后访问数据的网址进行展示，主要步骤如下图所示。

- 360全景数据Demo，[沙坪水电站360全景图](http://720yun.com/t/59e24jfOcya)
- iframe标签用于加载数据

```javascript
<iframe id="overall-view" src="" className={styles.overall} />
```

```css
.overall {
	width: 960px;
	height: 600px;
	border-width: 0;
}
```

- 根据ID加载数据

```javascript
document.getElementById('overall-view').src = 'http://720yun.com/t/59e24jfOcya';
```

- 效果如下图所示

![overall-view](https://github.com/ecidi/coding-specification/blob/master/images/720yun/720yun.png)