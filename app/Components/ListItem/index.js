import React from 'react';

import styles from './styles.css';

class ListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={this.props.className || styles.item}>
				<div className={styles['item-content']}>
					{this.props.item}
				</div>
			</li>
        );
    }
}

ListItem.propTypes = {
	className: React.PropTypes.string,
	item: React.PropTypes.any,
};

export default ListItem;
