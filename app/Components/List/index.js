
import React from 'react';

import styles from './styles.css';

class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const ComponentToRender = this.props.component;
        const items = this.props.items;

        let content = (<div></div>);

        if (items) {
            content = items.map((item, index) => (
                <ComponentToRender key={`item-${index}`} item={item} />
            ));
        } else {
            content = (<ComponentToRender />);
        }

        return (
            <div className={styles['list-wrapper']}>
                <ul className={styles.list}>
                    {content}
                </ul>
            </div>
        );
    }
}

List.propTypes = {
    component: React.PropTypes.func.isRequired,
    items: React.PropTypes.array,
};

export default List;
