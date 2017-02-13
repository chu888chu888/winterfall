/**
 *
 *
 */

import React from 'react';
import styles from './styles.css';
import TreeContainer from './TreeContainer.js';
import $ from 'jquery';

class TreeView extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
 		//this.state = {extend: this.props.extend};
 		/*$('.'+styles["treeView"]).mCustomScrollbar({
			mouseWheel: {
				preventDefault: true
			},
			theme:"dark-2",
			scrollInertia: 0,
			autoHideScrollbar: true,
			advanced: {
				autoExpandHorizontalScroll: false,
				updateOnImageLoad: false,
				updateOnContentResize: true
			},
			axis: "yx"
		});*/
	}

  	open(){
  		/*$('.'+styles["treeView"]).mCustomScrollbar("scrollTo","left",{
    		callbacks:false
		});*/
  	}

	onHighLight = (data) => {
		if(this.props.onHighLight != null){
			this.props.onHighLight(data);
		}
	}

	onAction = (data) => {
		this.props.onAction(data);
	}

	onSelect = (status, data) => {
		this.props.onSelect(status,data);
	}

	render(){
		const data = this.props.data;
		console.log(33333333)
        console.dir(this.props.data)
		return (
			<div className={styles.treeView}>
				<TreeContainer selectable={this.props.selectable} onHighLight={this.onHighLight} onAction={this.onAction} onSelect={this.onSelect} data={data}></TreeContainer>
			</div>
		);
	}
}

export default TreeView;
