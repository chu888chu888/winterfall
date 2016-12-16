import React from 'react';

import styles from './styles.css';

class Footer extends React.Component {

    render() {
        return (
			<footer className={styles.footer}>
				<section>
					<p>制作： 浙江华东工程数字技术有限公司.</p>
				</section>
			</footer>
		);
    }
}

export default Footer;
