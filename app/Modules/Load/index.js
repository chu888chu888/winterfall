/**
 *
 * LoadPage
 */

import React from 'react';
import Helmet from 'react-helmet';
import 'sanitize.css/sanitize.css';

import 'antd/dist/antd.css';
import { Progress } from 'antd';

/* components */
import Footer from 'Components/Footer';

/* styles */
import styles from './styles.css';

class LoadPage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            progress: 0,
        };
    }

    componentDidMount() {
    	for (let i = 1; i <= 100; i++) {
    		setTimeout( function(){
    			this.state({
    				progress: i,
    			});
    		}.bind(this),1000);
    	};
	}

	render() {
		let progress = this.state.progress;
		return (
			<div className={styles.wrapper}>
				<Helmet titleTemplate="%s - Ecidi" />
				<Progress type="circle" percent={progress} />
				<Footer />
			</div>
		);
	}
}

export default LoadPage;
