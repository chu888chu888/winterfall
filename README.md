# WebBIM  - Dgndb API for ActiveX
==============================

​	WebBIM是基于Bentley公司的MobileDgn SDK开发的能够嵌入在IE浏览器上运行的ActiveX插件，通过提供javascript接口供前端页面开发调用，能够实现imodel模型的基本视图浏览、查询、定位、管理控制、模拟仿真等功能。

- 基于Bentley公司的MobileDgn SDK开发；
- 使用基于MFC的ActiveX网页插件作为框架；
- 以imodel格式文件作为三维模型数据。



如何嵌入到页面
---------------

```javascript
<object id="dgndbwebviewer" 
	classid="CLSID:FDA27781-B317-4200-A349-28B4D899DEEE" 
	codebase="DgndbViewer.ocx">
</object>
```


基本视图控制接口
---------------

基本视图控制包括选中对象、放大、缩小、平移、旋转、全幅查看、窗口放大、测距、顶视图/前视图/左视图/轴侧视图、视图状态撤回/前进、行走漫游、飞行漫游、路径漫游、立方体剖切查看、剖切面上移、剖切面下移、关闭剪切立方体等。

**接口描述如下：**

```c++
void ViewOperation(LONG commandType, LONG option);
```

- `commandType:tool type` 
- `option: tool index`

**Js调用参考代码：**
```javascript
//选中对象
function OnSelectElement(){
    dgndbwebviewer.ViewOperation(1,1);
}
//全幅
function OnFitView(){
    dgndbwebviewer.ViewOperation(2, 1);
}
//平移
function OnPanView(){
    dgndbwebviewer.ViewOperation(7,1);
}
//窗口放大
function OnWindowView(){
    dgndbwebviewer.ViewOperation(8,1);
}
//放大
function OnZoomOut(){
    dgndbwebviewer.ViewOperation(10,1);
}
//缩小
function OnZoomIn(){
    dgndbwebviewer.ViewOperation(10,0);
}
//测距
function OnMeasureDistance() {
    dgndbwebviewer.ViewOperation(12, 1);
}
//前视图
function OnStandardFrontView(){
    dgndbwebviewer.ViewOperation(6,4);
}
//左视图
function OnStandardLeftView(){
    dgndbwebviewer.ViewOperation(6,3);
}
//顶视图
function OnStandardTopView(){
    dgndbwebviewer.ViewOperation(6,2);
}
//轴侧视图
function OnStandardISOView(){
    dgndbwebviewer.ViewOperation(6,1);
}
//路径漫游
function OnPathWalkView(){
    dgndbwebviewer.ViewOperation(9,1);
}
//行走漫游
function OnWalkView(){
    dgndbwebviewer.ViewOperation(9,2);
}
//飞行
function OnFlyView() {
    dgndbwebviewer.ViewOperation(9, 3);
}
//剪切立方体
function OnDynamicView(){
    dgndbwebviewer.ViewOperation(11,1);
}
//剪切面上移
function OnClipUp() {
    dgndbwebviewer.ViewOperation(14, 1);
}
//剪切面下移
function OnClipDown() {
    dgndbwebviewer.ViewOperation(14, 2);
}
//关闭立方体
function OnCloseClip() {
    dgndbwebviewer.ViewOperation(15, 1);
}
//旋转视图
function OnRotateView(){
    dgndbwebviewer.ViewOperation(3,1);
}
//视图状态撤回
function OnUndoView(){
    dgndbwebviewer.ViewOperation(4,1);
}
//视图状态前进
function OnRedoView(){
    dgndbwebviewer.ViewOperation(5,1);
}
```


开关控制
----------------

开关控制包括视图开关、单双视图切换开关、坐标显示开关、相机开关、透明显示开关、Construction辅助元素开关、削皮功能开关、动态模拟全屏开关、右键菜单开关、Mark标记开关。

**接口描述如下：**

*打开或关闭当前视图：*

```c++
LONG OpenViewPort(LONG viewIdx);
void CloseViewPort(LONG viewIdx);
```

- `viewIdx:` 0：视图1  1：视图2

*双视图控制：*

```c++
void SetTwoViewsOnOff(LONG OnOff);
```

- `OnOff:` 1:双视图模式  0：单视图模式

*判断单双视图：*

```c++
LONG TwoViewsOpened();
```

- 双视图：返回1 单视图：返回0

*指定图层或Model的开关控制:*

```c++
void ChangeLevelDisplay(LONG levelId, VARIANT_BOOL beDisplayed, VARIANT_BOOL isLast);
void ChangeLevelDisplayByLevelName(BSTR levelName, VARIANT_BOOL beDisplayed, VARIANT_BOOL isLast);
void ChangeModelDisplayById(LONG modelId, VARIANT_BOOL beDisplayed, VARIANT_BOOL isLast);
void ChangeModelDisplayByName(BSTR modelName, VARIANT_BOOL beDisplayed, VARIANT_BOOL isLast);
```

- `levelId：` 图层id
- `levelName:` 图层名
- `modelId:` model id
- `modelName: ` 模型名
- `beDisplayed:` true:开  false:关
- `isLast:` control whether heal the view immediately or not.
    对单个图层或model进行控制，isLast设为true。对一个图层列表中的所有图层同时操作的时候，可遍历所有项，对每一项单独控制。isLast控制是否对视图进行刷新，循环遍历前面所有项都可以设为false提高执行效率，直到处理到列表最后一项设为true刷新视图即可。

*几类常用开关：*

```c++
void SetSwitchOnOff(LONG option, LONG OnOff);
```

- `option: `0:camera 1:transparency(墙柱透明) 2:construction 3:建筑削皮 4:Dynamic fit(动态模拟全屏) 5:coordinate display
- `OnOff: ` 1:on   0:off

*右键菜单开关：*

```c++
void SetPopUpMenuOnOff(LONG OnOff);
```

- `OnOff:` 1:on   0:off

*Mark标记开关：*

```c++
void MarkElements(VARIANT_BOOL showHide);
```

- `showHide: ` true - 显示标记   false - 隐藏标记


**参考代码：**

```javascript
//打开视图
function OpenView() {
    dgndbwebviewer.OpenViewPort(0);
}

//关闭视图
function CloseView() {
    dgndbwebviewer.CloseViewPort(0);
}
```


Event响应
---------

**接口描述如下：**

*获取对象属性*  

```c++
void FireGetElementInfoEvent(LPCTSTR jsonElementInfo);
```

*获取显示样式列表*

```c++
void FireGetDisplayStylesEvent(LPCTSTR jsonDisplayStyles);
```

*获取图层列表*

```c++
void FireGetLevelsEvent(LPCTSTR jsonLevels);
```

*获取指定Model的图层列表*

```c++
void FireGetLevelsByModelEvent(LPCTSTR jsonLevelsByModel);
```

*获取Model列表*

```c++
void FireGetModelsEvent(LPCTSTR jsonModels);
```

*获取已打开的Model列表*

```c++
void FireGetDisplayedModelsEvent(LPCTSTR jsonDisplayedModels);
```

*获取保存的视图列表*

```c++
void FireGetSavedViewEvent(LPCTSTR jsonSavedView);
```

*获取手动保存的视图状态*

```c++
void FireGetViewStateEvent(LPCTSTR jsonViewState);
```

*获取隐藏对象*

```c++
void FireGetHiddenElmsEvent(LPCTSTR jsonHiddenElms);
```

*获取Location列表*

```c++
void FireGetLocationEvent(LPCTSTR jsonLoc);
```

*获取Items列表*

```c++
void FireGetItemsEvent(LPCTSTR jsonItems);
```

*响应右键菜单*

```c++
void FireFullScreenEvent();
void FirePickElementEvent();
void FireShowInfoEvent();
void FireAddLoadingEvent();
```

**参考代码：**

```javascript
//选中对象触发,result返回
<script for="dgndbwebviewer" lanuage="JavaScript" event="FireGetElementInfoEvent(result)">{
    var resultObj = $.parseJSON($.parseJSON(result));
    if (resultObj) {
        //kkscode/encode/compecd/wbscode/ec id(其中之一)
        var code = resultObj[i].matchcode;
    }
}
</script>

//获取显示样式列表
<script for="dgndbwebviewer" language="JavaScript" event="FireGetDisplayStylesEvent(result)">
if (result) {
    document.m_displaystyles=result;
}
</script>

//获取图层列表
<script for="dgndbwebviewer" language="JavaScript" event="FireGetLevelsEvent(result)">
if (result) {
    document.m_levels=result;
}
</script>

//获取指定model的图层列表
function OnGetLevelListByModel(modelId)
{
    dgndbwebviewer.GetLevelListByModelId(modelId);
}
<script for="dgndbwebviewer" language="JavaScript" event="FireGetLevelsByModelEvent(result)">
if (result) {
    document.m_levelsByModel = result;
}
</script>

//获取Model
<script for="dgndbwebviewer" language="JavaScript" event="FireGetModelsEvent(result)">
if (result) {
    document.m_models = result;
}
</script>

//获取已打开Model
<script for="dgndbwebviewer" language="JavaScript" event="FireGetDisplayedModelsEvent(result)">
if (result) {
    document.m_displayedmodels = result;
}
</script>

//获取保存的视图列表
<script for="dgndbwebviewer" language="JavaScript" event="FireGetSavedViewEvent(result)">
if (result) {
    document.m_savedviews=result;
}
</script>

//手动保存当前视图
function OnSaveViewState()
{
    dgndbwebviewer.FireDgnDbEvent(4);
}

//获取手动保存的视图状态
<script for="dgndbwebviewer" lanuage="JavaScript" event="FireGetViewStateEvent(result)">
{
    if (result) {
        document.m_viewState = result;
    }
}

//获取隐藏的对象
<script for="dgndbwebviewer" lanuage="JavaScript" event="FireGetHiddenElmsEvent(result)">
{
    if (result) {
    }
}

//获取location列表
<script for="dgndbwebviewer" language="JavaScript" event="FireGetLocationEvent(result)">
if (result) {
    document.m_location = result;
}
</script>

//获取Items列表
<script for="dgndbwebviewer" language="JavaScript" event="FireGetItemsEvent(result)">
if (result) {
    document.m_items = result;
}
</script>
```


定位
---------

定位接口提供了包括单个模型对象查找定位、多个对象查找定位、Location位置定位、结合Location位置的单个对象定位、结合Location位置的多个对象定位五种接口。

Location位置定位一般通过locCode指定对应的位置；对象定位通过KKS码、Encode、CompEcd或WBSCode其中之一指定唯一对象，不同专业对象的编码方式可能不一致，但有且只有一个编码。所有编码都可以传到API函数的matchCode参数实现定位。

**Location位置定位：**

```c++
void CreateCuboidClipByNameOrCode(LONG editType, LPCTSTR key, LPCTSTR v, VARIANT_BOOL topViewRotation, VARIANT_BOOL saveView);s
```

- `editType：` 0/moveFaceEnabled, 1/moveAllEnabled, 2/rotateEnabled
- `key：` "code"/"Name"
- `v：` locCode/locName
- `topViewRotation：` 是否旋转到顶视图
- `saveView：` true：定位并保存视图 false：定位后不保存视图

**参考代码**

```javascript
function OnLocationByCode(){
    dgndbwebviewer.CreateCuboidClipByNameOrCode(0, "code", 'Y1USA06R003',true, false);
}
```

**对象定位：**

*单对象*

```c++
void LocateElementWithoutLoc(LPCTSTR matchCode, VARIANT_BOOL topViewRotation, VARIANT_BOOL hilited, VARIANT_BOOL marked);
```

*多对象*

```c++
void LocateMultiElementsWithoutLoc(LPCTSTR elmsInfo, VARIANT_BOOL topViewRotation, VARIANT_BOOL hilited, VARIANT_BOOL marked);
```

- `matchCode: ` kkscode/encode/compecd/wbscode四选一,以上都为空，设为ECId.
- `elmsInfo:` matchCode的Array形式
- `topViewRotation:` 是否旋转到顶视图
- `hilited: ` 高亮显示定位对象
- `marked: ` 标记定位对象

**参考代码**

```javascript
//定位对象 'Y1UBB31-0101170003'
function OnLocateElementWithoutLoc(matchCode, topView, hilited, marked) {
    dgndbwebviewer.LocateElementWithoutLoc('Y1UBB31-0101170003', false, true, true);
}
//同时定位三个对象 kks码分别为'Y1UBB31-0101170003'/'Y1UBB31-0101010029'/'Y1UBB31-0101010030'
function OnLocateMultiElementWithoutLoc() {
    var elmInfo = [{ "matchcode": "Y1UBB31-0101170003"},
        { "matchcode": "Y1UBB31-0101010029"},
    { "matchcode": "Y1UBB31-0101010030" }, ]
    dgndbwebviewer.LocateMultiElementsWithoutLoc(JSON.stringify(elmInfo), false, true, false);
}
```

**对象&位置综合定位：**
​    
*单对象*   

```c++
void LocateElement(LONG cuboidType, LPCTSTR locKey, LPCTSTR locValue, LPCTSTR matchCode,
    VARIANT_BOOL topViewRotation, VARIANT_BOOL hilited, VARIANT_BOOL marked, VARIANT_BOOL saveView);
```

*多对象*

```c++
void LocateMultiElements(LONG cuboidType, LPCTSTR elmsInfo,
    VARIANT_BOOL topViewRotation, VARIANT_BOOL hilited, VARIANT_BOOL marked, VARIANT_BOOL saveView);
```

- `cuboidType:` 0:/moveFaceEnabled, 1/moveAllEnabled, 2/rotateEnabled
- `locKey:` "code"/"Name"
- `locValue：` locCode/locName
- `matchCode:` kkscode/encode/compecd/wbscode四选一,以上都为空，设为ECId.
- `elmsInfo: ` matchCode和locCode的Array形式
- `topViewRotation: ` 是否旋转到顶视图
- `hilited: ` 高亮显示定位对象
- `marked: ` 标记定位对象
- `saveView：` true：定位并保存视图 false：定位后不保存视图

**参考代码**

```javascript
//location code为'Y1USA06R003',kkscode为'Y1UBB31-0101170003'的定位
function OnLocateElmByLocation()
{
    dgndbwebviewer.LocateElement(0, "code", 'Y1USA06R003','Y1UBB31-0101170003',true, true, true, true); 
}
//同时定位多个对象
function OnLocateMultiElementByLocation () {
    var elmInfo = [{ "matchcode": "Y1UBB31-0101170003", "locCode": "Y1USA06R003" },
        { "matchcode": "Y1UBB31-0101010029", "locCode": "Y1USA06R003" },
    { "matchcode": "Y1UBB31-0101010030", "locCode": "Y1USA06R003" }, ]
    dgndbwebviewer.LocateMultiElements (0, JSON.stringify(elmInfo), true, false, true, false);
} 
```


施工进度模拟
------------

施工仿真进度模拟是通过Dgndb的DisplaySet方式控制模型对象的显示和隐藏来实现的。模型对象从隐藏到显示代表建造；从显示到隐藏代表拆除。

**接口描述如下：**

*开启模拟*

```c++
void BeginSimulate();
```

*添加list对象*

```c++
void AddElementToList(LPCTSTR matchCode, LONG viewIdx, LONG listIdx);
```

- `matchCode：`wbs code
- `viewIdx：`view index  
- `listIdx：`list id
- 添加多个对象，可循环Add对象到相应list 

*清空相应list*

```c++
void ClearElementList(LONG viewIdx, LONG listIdx);
```

- `viewIdx：`view index  
- `listIdx：`list id  

*设置同步描述文字(进度日期)*

```c++
void SetSimulateOverlayText(LONG viewIdx, LPCTSTR textStr);
```

- `viewIdx：` view index  
- `textStr` 文字描述  

*视图刷新模拟*

```c++
void SimulateSchedual(VARIANT_BOOL showOrHide, VARIANT_BOOL doDynamic);
```

- `showOrHide：` true：显示 false：隐藏    
- `doDynamic：` true：动态刷新 false：正常刷新
- 一般施工模拟过程采用动态刷新，查看当前进度采用正常刷新

*终止模拟，模型回到初始状态*

```c++
void StopSimulate(VARIANT_BOOL isLast);
```

- `isLast：` isLast设为true，则清空所有list,false则不清空.

**接口调用步骤：**

- 调用OnBeginSimulate()开启模拟过程；
- 根据进度时间向相应的list里添加元素数据。建造过程：list 0；拆除过程：list 1；其它色彩渲染（各种静态进度信息）：list 2/3/4/5/6/7/8。调用AddElmToList(matchCode,viewIdx,listIdx)。matchCode在施工包描述为WBS code。双视图对比模拟，需要2个视图同时添加元素，视图1的viewIdx为0，视图2的viewIdx为1；
- 添加同步描述进度日期文字。调用SetSimulateDate(viewidx, textStr)，双视图对比模拟，2个视图都需要添加；
- 开始动态模拟。调用OnStartSimulate(showOrHide, doDynamic)，步骤2）、3）和4）需要根据进度时间的推移循环调用；
- 根据相应情况结束模拟。OnStopSimulate(isLast)。

**参考代码：**

```javascript
function TestSimulate() {
    //开启仿真
    OnBeginSimulate();

    /*参数1：wbs code
    参数2：view index  参数3：list id
    可循环Add对象到相应list
    */
    //list 0: show
    AddElmToList('Z05-21-06-5001',0, 0);
    //list 1: hide
    AddElmToList('Z05-21-06-5001',0, 1);
    //list 2: blue shader.正在施工
    AddElmToList('Z05-21-06-5001', 0, 2);
    //list 3: red shader 关键路径
    AddElmToList('Z05-21-06-5001', 0, 3);
    //list 4: green shader
    AddElmToList('Z05-21-06-5001', 0, 4);
    //list 5: transparent shader
    AddElmToList('Z05-21-06-5001', 0, 5);
    //list 6: yellow shader
    AddElmToList('Z05-21-06-5001', 0, 6);
    //list 7: purple shader
    AddElmToList('Z05-21-06-5001', 0, 7);
    //list 8: cyan shader
    AddElmToList('Z05-21-06-5001', 0, 8);

    SetSimulateDate(0, "yy1::mm1::dd1");
    //SetSimulateDate(1, "yy2::mm2::dd2");

    OnStartSimulate(true, true);

    //OnStopSimulate(false);
}

function OnBeginSimulate() {
    dgndbwebviewer.BeginSimulate();
}
function AddElmToList(matchcode, viewIdx, listIdx) {
    dgndbwebviewer.AddElementToList(matchcode, viewIdx, listIdx);
}
function ClearElementList(viewidx,listIdx) {
    dgndbwebviewer.ClearElementList(viewidx, listIdx);
}
function SetSimulateDate(viewidx, textStr) {
    dgndbwebviewer.SetSimulateOverlayText(viewidx, textStr);
}
function OnStartSimulate(showOrHide, doDynamic) {
    dgndbwebviewer.SimulateSchedual(showOrHide, doDynamic);
}
function OnStopSimulate(isLast) {
    dgndbwebviewer.StopSimulate(isLast);
}
```


其它接口说明
------------

**接口描述：**

*一键生成imodel文件(.imodel)的id对照表(.iddb)，并将imodel文件和iddb文件Zip方式打包(.Zip)，并生成md5文件*

```c++
void PackageSourceFile(BSTR filePath);
```

- `filePath:` imodel文件的全路径

*返回当前OCX版本号*

```c++
BSTR GetOCXVersion();
```

- `return`  1.7.35.0

*预处理模型文件，并打开模型(包括Zip文件解压成imodel/iddb，imodel文件解压成idgndb，并在视图中打开模型)*

```c++
LONG PreProcessProjectFile(BSTR fileName, BSTR filePath, VARIANT_BOOL isFromServer);
LONG OpenDgnDbProject(BSTR fileName);
```

- `fileName:` 文件名(不含后缀名)
- `filePath: ` 服务器存放模型的地址或本地模型文件全路径
- `isFromServer: ` true：从服务器下载  false：本地直接打开

*判断imodel是否下载*

```c++
LONG ImodelDownloaded(BSTR fileName, BSTR filePath);
```

- `fileName: ` 文件名(不含后缀名)
- `filePath: ` 服务器存放模型的地址

*大多数情况不需要手动调用,打开模型后会自动调用加载这些list*

```c++
void FireDgnDbEvent(LONG parameters);
```

- `parameters:` 0-DisplayStyle List;1-Level List;2-Model list(All/only displayed model);3-savedview list;4-current view state

*获取指定model下的图层列表*

```c++
void GetLevelListByModelId(LONG modelId);
```

- `modelId: ` model id

*切换savedview视图列表中的视图*

```c++
void ChangeView(LONG viewId);
```

- `viewId:` imodel中SavedView列表中的view id

*设置当前激活视图的显示样式*

```c++
void ChangeDisplayStyle(BSTR displayStyleName);
```

- `displayStyleName：` 样式名

*设置指定图层的透明度*

```c++
void ChangeLevelTransparency(LONG levelId, DOUBLE transparency);  
```

- `levelId:` 图层id
- `transparency:` 0~1

*选中指定图层的所有对象*

```c++
void SelectAllElementsByLevel(BSTR levelName); 
```

- `levelName:`图层名

*显示隐藏控制*

```c++
void ShowHideElements(LONG option);
```

- `option: `0 - 单显 1 - 隐藏 2 - 取消单显  3 - 取消隐藏

*恢复指定隐藏对象*

```c++
void UndoHideElement(BSTR matchcode, VARIANT_BOOL immediateHeal);
```

- `matchcode: ` kkscode/encode/compecd/wbscode
- `immediateHeal:` 是否刷新

*高亮控制*

```c++
void HiliteElements(LONG option);
```

- `option: ` 0 - 高亮 1 - 取消高亮 2 - 选中高亮 3 - 取消选中高亮

*读取已手动保存的视图状态并恢复*

```c++
void ChangeViewState(BSTR jsonState);    
```

- `jsonState: ` 视图状态(json格式)

*获取location列表中的嵌套location列表*

```c++
void GetTargetLocation(LONG locId);
```

*获取Item列表中的嵌套Item列表*

```c++
void GetTargetItems(LONG classId, BSTR tableName);
```


**部分接口实现参考代码：**

```javascript
//下载服务器模型并打开
function OnOpenProjectFromServer(){
    dgndbwebviewer.PreProcessProjectFile("file1, "http://221.12.173.120/WisdomAssets/Content/NingBo/C02三维模型/L04CZ11/",true);
    dgndbwebviewer.OpenDgnDbProject("file1");       
}

//打开本地模型
function OnOpenProjectFromLocalDir(){
    dgndbwebviewer.PreProcessProjectFile("file2", "C:\\Workspace\\WebView\\data\\", false);
    dgndbwebviewer.OpenDgnDbProject("file2");       
}
```
