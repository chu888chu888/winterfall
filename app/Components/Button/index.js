import React, { PropTypes } from 'react';

import styles from './styles.css';

class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const className = this.props.className ? this.props.className : styles.button;

		let button = (
			<a className={className} href={this.props.href} onClick={this.props.onClick}>{this.props.children}</a>
		);

		if (this.props.handleRoute) {
			button = (
				<button className={className} onClick={this.props.handleRoute} >{this.props.children}</button>
			);
		}

		return (
			<div className={styles['button-wrapper']}>
				{button}
			</div>
		);
    }
}

Button.propTypes = {
	className: PropTypes.string,
	handleRoute: PropTypes.func,
	href: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};

export default Button;
