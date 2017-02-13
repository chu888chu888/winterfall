import React from 'react';
import styles from './styles.css';
import { Progress } from 'antd';

class ListBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOPen: true};
    }
    componentDidMount() {

  	}
    onSelection(text){
        this.props.onSelection(text);
    }
    Close(){
      this.props.onClose();
    }
    getColor(state,name){
        if(Array.isArray(state) && name){
            let num = Number(name.slice(-1));
            switch(state[num-1]){
            case 1:
                return styles.green;
                break;
            case 2:
                return styles.yellow;
                break;
            case 3:
                return styles.orange;
                break;
            case 4:
                return styles.red;
                break;
            }
        }
        else{
            switch(state){
                case '1':
                    return styles.green;
                    break;
                case '2':
                    return styles.yellow;
                    break;
                case '3':
                    return styles.orange;
                    break;
                case '4':
                    return styles.red;
                    break;
            }
        }
        
    }
    render() {

        let isOPen=this.state.isOPen==true?'show':'hidden',
        len = this.props.List.length,
        counter = 0;
        return (
            <div className={styles.box}>
                <div className={styles.title}>质量验评<button onClick={this.Close.bind(this)}>></button></div>
                <ul>
                {this.props.List.map((item, index) =>
                    {
                        let text = item.text ? item.text : item.name;
                        if(Array.isArray(item.state)){
                            let num = Number(item.name.slice(-1));
                            if(item.state[num-1] == 2)
                                counter++;
                        }
                        return (
                            <li
                              className={styles.li}
                              title={text}
                              onClick={this.onSelection.bind(this,item)}
                              key={index}>
                               <span className={`${styles.status} ${this.getColor(item.state,item.name)}`}/>
                              <span className={styles.text}>{text}</span>
                            </li>
                        )
                    }
                )}
                {
                    this.props.bToQualityPage ? <li className={styles.li} style={{backgroundColor:'white'}}><Progress percent={Number((len==0 ? 0 : (counter*100/len)))} strokeWidth={5} status="active" /></li> : ''
                }
                </ul>
                
            </div>
        );
    }
}
ListBox.propTypes = {
    List: React.PropTypes.array,
};

export default ListBox;

