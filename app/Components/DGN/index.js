import React from 'react';
import styles from './styles.css';
import ListBox from '../ListBox'
import Layers from '../Layers'
import $ from 'jquery';

let dgn=null;

class DgnViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {DynamicView: 'On',
                      CameraSwitch:'On',
                      MarkElements:'Off',
                      Peel:'On',
                      TransparenSwitcht:'On',
                      CreatElements:'On',
                      ShowFill:false,
                      SelectionItem:'',
                      isOPenListBox:false,
                      TwoViewsOnOff:'Off'
                  };
    }
    onSelection(item){
        // this.setState({ShowFill: true,SelectionItem:item});
        this.props.onSelection(item);
    }
    CloseFill(){
        this.setState({ShowFill: false});
    }

    CloseRightListBox(){
        this.setState({isOPenListBox: false});
    }
    OpenRightListBox(){
        /*$('.treeView-open').mCustomScrollbar("scrollTo","left",{
            callbacks:false
        });*/
        this.setState({isOPenListBox: true});
    }

    componentDidMount() {
    	// 打开模型
		dgn =window.dgn;
		dgn.style.height=this.props.height;
		dgn.style.width=this.props.width;
        dgn.style.display = "block"
		// dgn.PreProcessProjectFile(this.props.model, 'E:\\', false);
		let re = dgn.OpenDgnDbProject(encodeURI(this.props.model));
        if(re==0){
            let re = dgn.OpenDgnDbProject(encodeURI('NULL-A'));
        }
        setTimeout(function() {
            $('#dgnviewer').html(dgn);
            dgn.ViewOperation(2,1);
            dgn.ViewOperation(6,1);
        }, 200);
        if(this.props.viewType==1){
            setTimeout(function() {
                dgn.SetTwoViewsOnOff(1);
            }, 200);
        }
  	}

    // shouldComponentUpdate(nextProps, nextState) {
    //   return false;
    // }
    componentWillUnmount(){
        let dgn = window.dgn;
        dgn.SetTwoViewsOnOff(0);
        dgn.style.height=0;
        dgn.style.width=0;
        dgn.style.display = "none"
        $('#dgndbbox1').html(dgn);
    }
    componentWillReceiveProps(nextProps){
        let dgn = window.dgn;
        let re = dgn.OpenDgnDbProject(encodeURI(nextProps.model));
        if(re==0){
            let re = dgn.OpenDgnDbProject(encodeURI('NULL-A'));
        }
        console.log('-----------------init');
        setTimeout(function() {
            dgn.ViewOperation(2,1);
        }, 200);
        if(nextProps.Locate)
        {

            dgn.CreateCuboidClipByNameOrCode(0, "code", nextProps.Locate,true,false);
            setTimeout(function() {
                dgn.ViewOperation(6,1);
            }, 500);

        }
    }
    componentDidUpdate(){
        console.log(this.props.Locate);

    }
    SetTwoViewsOnOff(){
        if(this.state.TwoViewsOnOff=='On'){
            dgn.SetTwoViewsOnOff(0);
            this.setState({TwoViewsOnOff: 'Off'});
        }else{
            dgn.SetTwoViewsOnOff(1);
            this.setState({TwoViewsOnOff: 'On'});
        }
    }
    OnSelectElement() {
        dgn.ViewOperation(1, 1);
    }
    OnOpenProject(){

    }
    OnPickElement(){
        dgn.ViewOperation(1,2);
    }
	OnFitView(){
		dgn.ViewOperation(2,1);
	}
    OnPanView(){
        dgn.ViewOperation(7,1);
    }
    OnWindowView(){
        dgn.ViewOperation(8,1);
    }
    OnZoomOut(){
        dgn.ViewOperation(10,1);
    }
    OnZoomIn(){
        dgn.ViewOperation(10,0);
    }
    // OnBeginSimulate() {
    //     dgn.BeginSimulate();
    // }
    A1() {
        // //开启仿真
        // OnBeginSimulate();

        // //显示
        // AddElmToList('618', 0);
        // OnStartSimulate(true, true);
    }
    A2() {
        // //开启仿真
        // OnBeginSimulate();

        // //隐藏
        // AddElmToList('618', 1);
        // OnStartSimulate(false, true);
    }
    OnRotateView(){
        dgn.ViewOperation(3,1);
    }
    OnDynamicView(){
        dgn.ViewOperation(11,1);
    }
    OffDynamicView(){
        dgn.ViewOperation(15,1);
    }
    OnCloseClip() {
        dgn.ViewOperation(15, 1);
    }
    OnMeasureDistance() {
        dgn.ViewOperation(12, 1);
    }
    OnStandardFrontView(){
        dgn.ViewOperation(6,4);
    }
    OnStandardLeftView(){
        dgn.ViewOperation(6,3);
    }
    OnStandardTopView(){
        dgn.ViewOperation(6,2);
    }
    OnStandardISOView(){
        dgn.ViewOperation(6,1);
    }
    SetDisplayStyle(stylename){
        dgn.ChangeDisplayStyle(stylename);
    }
    OnUndoView() {
        dgn.ViewOperation(4, 1);
    }
    OnRedoView() {
        dgn.ViewOperation(5, 1);
    }
    CutHeightUp(){
        dgn.ViewOperation(14,1);
    }
    CutHeightDown(){
        dgn.ViewOperation(14,2);
    }
    dgndbOpenTag(){
        // var _info = $.parseJSON(dgndbData.SeleElemInfo);
        // if(_info){
        //     $.ajax({
        //         url: _BaseUrl+'/query/tag/',
        //         data: {
        //             name: _info.modelname,
        //             element_id: _info.elementid
        //         },
        //         dataType: 'json',
        //         success: function(tag){
        //             tag = tag.basic;
        //             if(tag['pk'] > 0){
        //                 var $item = $('<span data-typename="tagext"></span>');
        //                 for(var key in tag){
        //                     $item.attr('data-'+key, tag[key]);
        //                 }
        //                 $item.attr('data-icon', tag['obj_type']);

        //                 openTagByItem($item, {url: _BaseUrl+'/'+$item.data('typename')+'/'+$item.data('pk')}, false);
        //             }
        //             return false;
        //         }
        //     });
        // }
    }
    // 孤显控制：0 - 孤显   1 - 隐藏     2 - 取消孤显     3 - 取消隐藏
    ShowHideElements(option){
        dgn.ShowHideElements(option);
    }
    OnWalkView() {
        dgn.ViewOperation(9, 1);
    }

    OnWalkView() {
        dgn.ViewOperation(9, 2);
        // // 打开相机状态
        // var ondynamicview = $('#dgndbbox-pop .js-setswitchonoff0');
        // ondynamicview.addClass('on');
        // ondynamicview.find('img').attr('src', './src/images/btn_25.png');
    }
    dgndbShowElements(){
        dgn.ShowHideElements(3);
        dgn.ShowHideElements(2);
    }
    DynamicView(){
        if(this.state.DynamicView=='On'){
            this.OnDynamicView();
            this.setState({DynamicView: 'Off'});
        }else{
            this.OffDynamicView();
            this.setState({DynamicView: 'On'});
        }
    }
    // 相机开关、透明开关、构造元素、建筑削皮：0:camera(相机) 1:transparency(墙柱透明) 2:construction(构造元素) 3:建筑削皮 
    SetSwitchOnOff(option, onoff){
        dgn.SetSwitchOnOff(option, onoff);
    }
    // 12、构造元素
    OnCreatElements() {
        this.OnSelectElement();
        if(this.state.CreatElements=='On'){
            this.SetSwitchOnOff(2, 0);
            this.setState({CreatElements: 'Off'});
        }else{
            this.SetSwitchOnOff(2, 1);
            this.setState({CreatElements: 'On'});
        }
    }
    switc
    // 13、相机开关
    OnCameraSwitch() {
        this.OnSelectElement();
        if(this.state.CameraSwitch=='On'){
            this.SetSwitchOnOff(0, 0);
            this.setState({CameraSwitch: 'Off'});
        }else{
            this.SetSwitchOnOff(0, 1);
            this.setState({CameraSwitch: 'On'});
        }
    }
    // 保存视图
    FireDgnDbEvent(){
        dgn.FireDgnDbEvent(4);
    }
    // 16、保存视图
    SaveViewer() {
        this.FireDgnDbEvent();
        //TODO 
        // $('#dgndbbox-saveview').show();
    }
    // 标记显示
    MarkElements(showHide){
        dgn.MarkElements(showHide);
    }
    // 14、标记控制
    OnMarkElements() {
        this.OnSelectElement();
        if(this.state.MarkElements=='On'){
            this.MarkElements(false);
            this.setState({MarkElements: 'Off'});
        }else{
            this.MarkElements(true);
            this.setState({MarkElements: 'On'});
        }
    }
    // 10、建筑削皮
    OnPeel() {
        if(this.state.Peel=='On'){
            this.SetSwitchOnOff(3, 0);
            this.setState({Peel: 'Off'});
        }else{
            this.SetSwitchOnOff(3, 1);
            this.setState({Peel: 'On'});
        }
    }
    // 15、透明开关
    OnTransparenSwitcht() {
        if(this.state.TransparenSwitcht=='On'){
            this.SetSwitchOnOff(1, 0);
            this.setState({TransparenSwitcht: 'Off'});
        }else{
            this.SetSwitchOnOff(1, 1);
            this.setState({TransparenSwitcht: 'On'});
        }
    }
	render() {
        let dynamicView='DynamicView'+this.state.DynamicView;
        let creatElements='CreatElements'+this.state.CreatElements;
        let cameraSwitch='CameraSwitch'+this.state.CameraSwitch;
        let markElements='MarkElements'+this.state.MarkElements;
        let peel='Peel'+this.state.Peel;
		let transparenSwitcht='TransparenSwitcht'+this.state.TransparenSwitcht;
        let showRight=this.props.ShowRight==true?'show':'hidden';
        let showFill=this.state.ShowFill==true?'show':'hidden';
        let isOPenListBox=this.state.isOPenListBox==true?'show':'hidden';
        let isShowbutton=this.state.isOPenListBox==false?'show':'hidden';
        let showLayers=this.props.ShowLayers==true?'show':'hidden';
        // let showRight='show';
        function createMarkup(){
			return {__html:'<object ref="dgndbwebviewer" id="dgndbwebviewer" classid="CLSID:FDA27781-B317-4200-A349-28B4D899DEEE" codebase="DgnDbViewer.ocx"></object>'}
		}
		return (
            <div className={styles.mainBox}>
			<div  >
				<div className={styles.fullIcon} >
                    <a onClick={this.OnSelectElement.bind(this)} >
                        <span title="选择对象" className={`${styles.toolIcon} ${styles['pickElement']}`} />
                    </a>
                    <a onClick={this.OnZoomIn.bind(this)}>
                        <span title="放大" className={`${styles.toolIcon} ${styles['OnZoomIn']}`} />
                    </a>
                    <a onClick={this.OnZoomOut.bind(this)}>
                        <span title="缩小" className={`${styles.toolIcon} ${styles['OnZoomOut']}`}/>
                    </a>
                    <a onClick={this.OnWindowView.bind(this)}>
                        <span title="窗口放大" className={`${styles.toolIcon} ${styles['OnWindowView']}`} />
                    </a>
                    <a onClick={this.OnFitView.bind(this)}>
                        <span title="全局视图" className={`${styles.toolIcon} ${styles['OnFitView']}`} />
                    </a>
                    <a onClick={this.OnRotateView.bind(this)}>
                        <span title="旋转视图" className={`${styles.toolIcon} ${styles['OnRotateView']}`} />
                    </a>
                    <div className={styles.gap}></div>

                    <a onClick={this.OnStandardTopView.bind(this)}>
                        <span title="顶视图" className={`${styles.toolIcon} ${styles['OnStandardTopView']}`} />
                    </a>
                    <a onClick={this.OnStandardFrontView.bind(this)}>
                        <span title="前视图" className={`${styles.toolIcon} ${styles['OnStandardFrontView']}`} />
                    </a>
                    <a onClick={this.OnStandardLeftView.bind(this)}>
                        <span title="左视图" className={`${styles.toolIcon} ${styles['OnStandardLeftView']}`} />
                    </a>
                    <a onClick={this.OnStandardISOView.bind(this)}>
                        <span title="轴测视图" className={`${styles.toolIcon} ${styles['OnStandardISOView']}`} />
                    </a>
                    <a onClick={this.OnPanView.bind(this)}>
                        <span title="平移视图" className={`${styles.toolIcon} ${styles['OnPanView']}`} />
                    </a>
                    <div className={styles.gap}></div>

                    <a onClick={this.OnUndoView.bind(this)}>
                        <span title="前一视图" className={`${styles.toolIcon} ${styles['OnUndoView']}`} />
                    </a>
                    <a onClick={this.OnRedoView.bind(this)}>
                        <span title="后一视图" className={`${styles.toolIcon} ${styles['OnRedoView']}`} />
                    </a>
                    <a onClick={this.DynamicView.bind(this)} >
                        <span title="剪切视图" className={`${styles.toolIcon} ${styles[dynamicView]}`} />
                    </a>
                    <a onClick={this.CutHeightUp.bind(this)}>
                        <span title="增加剪切高度" className={`${styles.toolIcon} ${styles['CutHeightUp']}`} />
                    </a>
                    <a onClick={this.CutHeightDown.bind(this)}>
                        <span title="降低剪切高度" className={`${styles.toolIcon} ${styles['CutHeightDown']}`} />
                    </a>
                    <div className={styles.gap}></div>
                    
                    <a onClick={this.dgndbOpenTag.bind(this)}>
                        <span title="打开对象" className={`${styles.toolIcon} ${styles['dgndbOpenTag']}`} />
                    </a>
                    <a onClick={this.ShowHideElements.bind(this,0)}>
                        <span title="单显" className={`${styles.toolIcon} ${styles['ShowHideElements0']}`} />
                    </a>
                    <a onClick={this.ShowHideElements.bind(this,2)}>
                        <span title="取消单显" className={`${styles.toolIcon} ${styles['ShowHideElements2']}`} />
                    </a>
                    <a onClick={this.ShowHideElements.bind(this,1)}>
                        <span title="隐藏" className={`${styles.toolIcon} ${styles['ShowHideElements1']}`} />
                    </a>
                    <a onClick={this.ShowHideElements.bind(this,3)}>
                        <span title="取消隐藏" className={`${styles.toolIcon} ${styles['ShowHideElements3']}`} />
                    </a>
                    <a onClick={this.dgndbShowElements.bind(this)}>
                        <span title="全部显示" className={`${styles.toolIcon} ${styles['dgndbShowElements']}`} />
                    </a>
                    <a onClick={this.OnCreatElements.bind(this)}>
                        <span title="构造元素" className={`${styles.toolIcon} ${styles[creatElements]}`} />
                    </a>
                    <a onClick={this.OnCameraSwitch.bind(this)}>
                        <span title="相机开关" className={`${styles.toolIcon} ${styles[cameraSwitch]}`} />
                    </a>
                    <div className={styles.gap}></div>

                    <a onClick={this.SaveViewer.bind(this)}>
                        <span title="保存视图" className={`${styles.toolIcon} ${styles['firedgndbevent']}`} />
                    </a>
                    <a onClick={this.OnMarkElements.bind(this)}>
                        <span title="定位" className={`${styles.toolIcon} ${styles[markElements]}`} />
                    </a>
                    <a onClick={this.OnWalkView.bind(this)}>
                        <span title="行走漫游" className={`${styles.toolIcon} ${styles['OnWalkView']}`} />
                    </a>
                    <a onClick={this.OnMeasureDistance.bind(this)}>
                        <span title="测距" className={`${styles.toolIcon} ${styles['OnMeasureDistance']}`} />
                    </a>
 {/*                   <a onClick={this.SetTwoViewsOnOff.bind(this)}>
                        <span title="切换" className={`${styles.toolIcon} ${styles['OnMeasureDistance']}`} />
                    </a>*/}
	            </div>
				{/*<div dangerouslySetInnerHTML={createMarkup()} />*/}
                <div id="dgnviewer" >
                
                </div>
                <div className={styles.dgndbboxLeft} style={{top:this.props.top}}>
                    <div className={styles.IconBox}>
                        <a  onClick={this.SetDisplayStyle.bind(this,'ds_wireframe')}>
                            <span title="线框渲染" className={`${styles.toolIcon} ${styles['ds_wireframe']}`} />
                        </a>
                        <a onClick={this.SetDisplayStyle.bind(this,'ds_hidden line')}>
                            <span title="消隐线渲染" className={`${styles.toolIcon} ${styles['ds_hidden']}`} />
                        </a>
                        <a  onClick={this.OnPeel.bind(this)}>
                            <span title="削皮渲染" className={`${styles.toolIcon} ${styles[peel]}`} />
                        </a>
                        <a onClick={this.SetDisplayStyle.bind(this,'ds_smooth')}>
                            <span title="实体渲染" className={`${styles.toolIcon} ${styles['ds_smooth']}`} />
                        </a>
                        <a onClick={this.SetDisplayStyle.bind(this,'ds_illustration')}>
                            <span title="实体线渲染" className={`${styles.toolIcon} ${styles['ds_illustration']}`} />
                        </a>
                        <a  onClick={this.OnTransparenSwitcht.bind(this)}>
                            <span title="透明渲染" className={`${styles.toolIcon} ${styles[transparenSwitcht]}`} />
                        </a>
                    </div>
                    <iframe className={styles.dgndbboxmark} />
                </div>
			</div>
            <div className={`${styles.dgndbboxFill} ${styles[showFill]}`}>
                <div className={styles.fill}>
                         {this.state.SelectionItem}<button onClick={this.CloseFill.bind(this)}>X</button>
                </div>
                <iframe className={styles.dgndbboxmark}/>
            </div>
         </div>
		);
	}
}
DgnViewer.propTypes = {
    // className: PropTypes.string,
    // handleRoute: PropTypes.func,
    // href: PropTypes.string,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    model: React.PropTypes.string.isRequired,
};
DgnViewer.defaultProps = {
    width: '100%',
    height: '100%',
    top: '194px',
    ShowRight:false,
    showFill:false,
    ShowLayers:false,
    list:[],
    viewType:0 //单双视图类型 0：单，1：双
};

export default DgnViewer;

// guest075 imxpuyr3
