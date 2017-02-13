/**
 *
 *
 */
import React from 'react';
import styles from './styles.css';
import TreeContainer from './TreeContainer.js';
/*import $ from 'jquery';*/

class TreeView extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.state = {extend: this.props.extend};
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
	onHighLight = (data) => {
		if(this.props.onHighLight != null){
			this.props.onHighLight(data);
		}
	}
	onAction = (data) => {
		this.props.onAction(data);
	}
	render(){
		const data = this.props.data;
		const tabStyle = this.props.tabStyle;

	//	`${item3.code} ${item3.name}`
		return (
			<div className={`${!tabStyle ? styles.treeView_length : styles.treeView_tab} ${styles.treeView}`}>
				<TreeContainer onHighLight={this.onHighLight} onAction={this.onAction} data={data}></TreeContainer>
			</div>
		);
	}
}
export default TreeView;
