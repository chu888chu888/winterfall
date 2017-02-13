import React from 'react';
import styles from './styles.css';
import { Progress } from 'antd';
import AntdTree from '../TreeView/antdTree.js';
import TreeView from '../Treeview_layer';
import DGNSimulate from '../DGN/simulate.js'

class Layers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOPen: true,data:[],checked:true};
        this.getModels = this.getModels.bind(this);
        this.getLevels = this.getLevels.bind(this);   
        this.id=null;
    } 
    getModels(){
      let data=  window.Models.modelList.map((item,index)=>{
            item.isModel=true;
            return  {
                name: item.name,
                icon: "locModel",
                fold: "folded",
                loading: true,
                checked:true,
                action: 'fold',
                actionData:item,
                children: [
                    // { name: '输水工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/investmentDisplay/MainView/输水工程'}, fold: "none" },
                    // { name: '地下发电厂房工程Z0666666666666666666666', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/investmentDisplay/MainView/地下发电厂房工程Z06'}, fold: "none" },
                    // { name: '升压变电工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/investmentDisplay/MainView/升压变电工程'}, fold: "none" },
                    // { name: '其他电工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/investmentDisplay/MainView/其他电工程'}, fold: "none" },
                ]
            }
        })
      console.log(data);
      this.setState({data:data});
    }
    getLevels(){

      this.state.data.map((item,index)=>{
            if(item.actionData.id===this.id){
                let Levels=  window.Levels.map((item1,index)=>{
                    item1.isModel=false;
                    return  {name: item1.name, icon: "locModel", action: 'set', actionData:item1, fold: "none",checked:item.checked,}
                })
                item.children=Levels;
            }
        })
        this.forceUpdate();
    }
    componentDidMount() {
        if(window.Models){
            this.getModels();
        }
        document.addEventListener("getModels",this.getModels,false);
        document.addEventListener("getLevels",this.getLevels,false);
    }

    componentWillUnmount(){
        document.removeEventListener("getModels",this.getModels,false);
        document.removeEventListener("getLevels",this.getLevels,false);
        this.state.data.map((item,index)=>{
            if(index==this.state.data.length-1){
                DGNSimulate.ChangeModelDisplayById(item.actionData.id,true,true)
            }else{
                DGNSimulate.ChangeModelDisplayById(item.actionData.id,true,false)
            }
        })
    }
    onSelection(text,pk,name,itemState){
        this.props.onSelection(text,pk,name,itemState);
    }
    Close(){
        this.props.onClose();
    }
    onAction = (data) =>{ 
        // DGNSimulate.ChangeModelDisplayById(data.actionData.id,false,true);
        this.id=data.actionData.id;
        DGNSimulate.GetLevelListByModelId(data.actionData.id);
        // console.dir(data);
    }
    onSelect = (checked,data) =>{ 
        DGNSimulate.ChangeModelDisplayById(data.actionData.id,false,true);
// data.checked=checked;
        if(data.actionData.isModel==true){
           this.state.data.map((item)=>{
                if(item.actionData.id===data.actionData.id){
                    item.checked=checked;
                    item.children.map((item1)=>{
                        item1.checked=checked;
                    })
                }
            })
            DGNSimulate.ChangeModelDisplayById(data.actionData.id,checked,true)
        }else{
            this.state.data.map((item)=>{
                 item.children.map((item1)=>{
                    if(item1.actionData.id===data.actionData.id){
                        item1.checked=checked;
                    }
                })
            }) 
            DGNSimulate.ChangeLevelDisplay(data.actionData.id,checked,true)
        }
        this.forceUpdate();
    }
    onChange = (e) => {

        this.state.data.map((item,index)=>{
            item.checked=e.target.checked;
        })
        console.dir(this.state.data)
        this.setState({checked:e.target.checked,data:this.state.data});
        if(e.target.checked==true){
            this.state.data.map((item,index)=>{
                if(index==this.state.data.length-1){
                    DGNSimulate.ChangeModelDisplayById(item.actionData.id,true,true)
                }else{
                    DGNSimulate.ChangeModelDisplayById(item.actionData.id,true,false)
                }
            })
        }else{
            this.state.data.map((item,index)=>{
                if(index==this.state.data.length-1){
                    DGNSimulate.ChangeModelDisplayById(item.actionData.id,false,true)
                }else{
                    DGNSimulate.ChangeModelDisplayById(item.actionData.id,false,false)
                }
            })
        }

    }
    // setAllChack(isChecked){
    //     this.state.data.map((item,index)=>{
    //         if(index==this.state.data.length-1){
    //             DGNSimulate.ChangeModelDisplayById(item.actionData.id,true,true)
    //         }else{
    //             DGNSimulate.ChangeModelDisplayById(item.actionData.id,true,false)
    //         }
    //     })
    // }
    render() {
        console.log(2222222)
        console.dir(this.state.data)
        let isOPen=this.state.isOPen==true?'show':'hidden';
        return (
            <div className={styles.box}>
                <div className={styles.title}>
                <input type="checkbox" onChange={this.onChange} checked={this.state.checked} />全选
                <button onClick={this.Close.bind(this)}>></button>
                </div>
                <div className={styles.all}>
                    
                </div>
                
                <TreeView onAction={this.onAction} onSelect={this.onSelect} selectable={true} data={this.state.data} style={{top:'0px'}}/>     
            </div>
        );
    }
}
// layers.propTypes = {
//     List: React.PropTypes.array,
// };

export default Layers;

