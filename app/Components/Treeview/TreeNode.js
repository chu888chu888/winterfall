'use strict'
/**
 *
 *
 */
import React from 'react';
import styles from './styles.css';
import TreeContainer from './TreeContainer.js';
import {Link} from 'react-router';
import Icons from '../Icons/iconfont.css';
class TreeNode extends React.Component {
	constructor(props) {
		super(props);
		this.state = props.data;
	}
	onFold = () => {
		let fold = this.state.fold;
		if(this.props.data.loading == "loading")
		{
			this.props.onAction(this.state);
			return;
		}
		if(this.props.data.children!=null&&this.props.data.children.length>0){
			if(fold == "expanded"){
				this.setState({fold:"folded"});
			}
			else
			{
				this.setState({fold:"expanded"});
			}
		}
	}
	onHighLight = (data) => {
		this.props.onHighLight(data);
	}
	onAction = (data) => {
		this.props.onAction(data);
	}
	cttClicked = () => {
		if((this.props.data.children == null || this.props.data.children == []) && this.props.data.loading != "loading"){
			this.props.onHighLight(this.state);
		}
		if(this.props.action == 'link'){
			return;
		}
		if(this.props.data.action == 'fold'){
			this.onFold();
			return;
		}
		this.props.onAction(this.state);
	}
	render(){
		const data = this.props.data;
		const fold = this.state.fold;
		if(fold == null){
			return;
		}
		//处理 link 和 自定义
		let mainNode = data.name;
		if(this.props.data.action == "link"){
			mainNode = <Link to={this.props.data.actionData.linkURL}>{data.name}</Link>;
		}
		let highLight = "";
		if(data.highLight){
			highLight = styles.highlight;
		}
		if((typeof(data.children) == 'undefined') && this.props.data.loading == null ){
			return (
				<li className={highLight}>
					<span className={styles.none} onClick={this.onFold}></span>
					<span onClick={this.cttClicked}>
						<span className={`${Icons.iconfont} ${styles.icon} ${styles[data.icon]}`}></span>
						{mainNode}
					</span>
				</li>
			);
		}
		else if(this.props.data.loading == 'loading'){
			return(
				<li className={highLight}>
					<span className={styles[fold]} onClick={this.onFold}></span>
					<span onClick={this.cttClicked}>
						<span className={`${Icons.iconfont} ${styles.icon} ${styles[data.icon]}`}></span>
						{mainNode}
					</span>
				</li>
			);
		}
		else{
			return(
				<li>
					<span className={styles[fold]} onClick={this.onFold}></span>
					<span onClick={this.cttClicked}>
						<span className={`${Icons.iconfont} ${styles.icon} ${styles[data.icon]}`}></span>
						{mainNode}
					</span>
					<TreeContainer onHighLight={this.onHighLight} onAction={this.onAction} show={fold} data={data.children}></TreeContainer>
				</li>
			);
		}
	}
}
export default TreeNode;
