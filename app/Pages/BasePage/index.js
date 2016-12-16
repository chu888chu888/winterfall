/**
 * BasePage
 */

import React from 'react';
import Helmet from 'react-helmet';
import 'sanitize.css/sanitize.css';

/* components */
import Footer from 'Components/Footer';

/* styles */
import styles from './styles.css';

function BasePage(props) {
    return (
        <div className={styles.wrapper}>
            <Helmet titleTemplate="%s - Ecidi"/>
            {React.Children.toArray(props.children)}
            <Footer />
        </div>
    );
}

BasePage.defaultProps = {
	children: React.PropTypes.node,
};

export default BasePage;
