/*
 * HomePage
 *
 * at the '/mainPage' route
 *
 */
import React from 'react';
import {Row, Col,Button,Table,message,notification,Modal} from 'antd';
import $ from 'jquery';
//import  'jquery.mb.browser/jquery.mb.browser.min.js';//jquery3.0以后砍掉browser 引用它用于浏览器判断
import DataService from '../../Store/model.js';
import styles from './styles.css';

var moment = require('moment');
message.config({top: 300,duration: 2,});
let dgn=null;

	const columns = [/*{
	  title: '序号',
	  dataIndex: 'id',
	  width: 40,
	  sorter: (a, b) =>a.id - b.id,
	},*/{
	  title: '模型名称',
	  dataIndex: 'name',
	  width: 100,
	},{
	  title: '创建时间',
	  dataIndex: 'create_time',
	  sorter: (a, b) => moment(a.create_time) - moment(b.create_time),
	  width: 75,
	  render: text =>{return moment(text).format('YYYY-MM-DD HH:mm:ss')},
	},{
	  title: '大小',
	  dataIndex: 'size',
	  width: 50,
	  render: text =>{return <div><span>{text/1024}</span><span  style={{color:'blue'}}> KB</span></div>},
	  className: `${styles['column-size']}`,
	  sorter: (a, b) => a.size - b.size,
	},{
	  title: '状态',
	  dataIndex: 'done',
	  width: 30,
	  className: `${styles['column-size']}`,
	  render: done =>{return done==1?<span style={{color:'green'}}>已下载</span>:<span  style={{color:'red'}}>未下载</span>},
	}
	];

class DgnDownloadPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {dataSource: [],loading:false,visible:false}
	}
    componentDidMount() {
    	// 打开模型
		dgn =window.dgn;
		let dataService  =	new DataService();
		try{		
			let v=dgn.GetOCXVersion();
			dataService.getDGN().then(function(data){
				let name=data[0].name.split('_')[2];
				let v1=name.substring(0,name.length-4);
				if(v1>v){
					Modal.warning({
					    title: '三维模型插件下载更新',
					    content: (<div>
							        <p>当前版本：<span style={{color:'blue'}}>{v}</span></p>
							        <p>最新版本：<span style={{color:'green'}}>{v1}</span></p>
							        <p>为了更好的体验三维模型，请点击“确定”下载最新版本，并在下载安装完成之后重启游览器。</p>
							      </div>),
					    okText:'确定',
					   	onOk() {
					      return new Promise((resolve, reject) => {
								var link = document.createElement("a");
								link.download = data[0].name;
								link.href = data[0].download_url;
								document.body.appendChild(link);
								link.click();
								document.body.removeChild(link);
					        }).catch(() => console.log('errors!'));
					    },
					});
				}
			}.bind(this));			
		}
		catch(err){
			console.log(err);
			Modal.warning({
			    title: '三维模型插件下载安装',
			    content: '为了更好的体验三维模型，请点击“确定”下载最新版本，并在下载安装完成之后重启游览器。',
			    okText:'确定',
			   	onOk() {
			      return new Promise((resolve, reject) => {
			      	    dataService.getDGN().then(function(data){
							// data[0].name.
							var link = document.createElement("a");
							link.download = data[0].name;
							link.href = data[0].download_url;
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
							link=null;
						}.bind(this));
			      }).catch(() => console.log('errors!'));
			    },
			  });
		    return;
		}

		dataService.getModelList().then(function(data){
			data.map((item,index)=>{
				let name=item.name.substring(0,item.name.length-4);	
				//判读模型是否已经下载 1为已经下载，未下载
				let s=dgn.ImodelDownloaded(encodeURI(name), systemsetting.modelDownloadAddress);
				item.done=s;
			})
        	this.setState({dataSource: data});
		}.bind(this));
  	}
	download(){
		//if($.browser != undefined && ($.browser.msie || ($.browser.mozilla && $.browser.version == '11.0'))){
		    this.setState({ loading: true });
			const hide = message.loading('正在下载模型，请耐心等待！',0);
			setTimeout(function() {
				this.state.dataSource.map((item,index)=>{
					let name=item.name.substring(0,item.name.length-4);	
					dgn.PreProcessProjectFile(encodeURI(name), systemsetting.modelDownloadAddress, true);
					let s=dgn.ImodelDownloaded(encodeURI(name), systemsetting.modelDownloadAddress);
					item.done=s;
				})
	        }.bind(this), 200);
			setTimeout(function() {
				hide();
				this.setState({ loading: false });
				notification['success']({
			      message: '模型下载完成。'
			    });
	        }.bind(this), 500);
		//}
	}

	handleOk(){

	}

	render() {		
		return (
			<div >
			    <Modal title="三维模型插件下载更新" visible={this.state.visible} onOk={this.handleOk}  >

        		</Modal>
				<Row>
					<Col sm={12} style={{marginTop:'20px'}}  offset={11}>
						<h2>模型下载</h2>
					</Col>
				</Row>
				<Row>
					<Col sm={18} offset={3}>
						<h4>模型列表:<span style={{color:'red'}}>{this.state.dataSource.length}</span>条</h4>
			            <Table size='middle' columns={columns} dataSource={this.state.dataSource} scroll={{ y: 500 }}  pagination={false} bordered/>
					</Col>
				</Row>
				<Row>
					<Col sm={11} offset={11} style={{marginTop:'30px'}}>
						 <Button type="primary" loading={this.state.loading} icon='download'onClick={this.download.bind(this)} size='large'>下载模型</Button>
					</Col>
				</Row>
 			</div>
		);
	}
}

export default DgnDownloadPage;

