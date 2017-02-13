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

	onSelect = (status, data) => {
		this.props.onSelect(status,data);
	}

	render(){
		console.log(44444)
        console.dir(this.props.data)
		let data = this.props.data;
		const fold = this.props.show;
		if(!Array.isArray(data)){ data = [data]; }
		return(
			<ul className={styles[fold]}>
				{data.map((node,index) => 
					<TreeNode key={index} onHighLight={this.onHighLight} selectable={this.props.selectable} onAction={this.onAction} data={node} onSelect={this.onSelect}></TreeNode>
				)}
			</ul>
		);
	}
}

export default TreeContainer;
