/**
 *
 *
 */
import React from 'react';
import styles from './styles.css';
import TreeNode from './TreeNode.js';
class TreeContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	
	onHighLight = (data) => {
		this.props.onHighLight(data);
	}
	onAction = (data) => {
		this.props.onAction(data);
	}
	render(){
		let data = this.props.data;
		const fold = this.props.show;
		if(!Array.isArray(data)){ data = [data]; }
		return(
			<ul className={styles[fold]}>
				{data.map((node,index) => 
					<TreeNode key={index} onHighLight={this.onHighLight} onAction={this.onAction} data={node}></TreeNode>
				)}
			</ul>
		);
	}
}
export default TreeContainer;
