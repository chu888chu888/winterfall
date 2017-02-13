class TreeTools{
	//设置高亮，传入的两个参数分别是完整树的数据和需要高亮节点的数据
	static setHighLight(data,node){
		this.clearHighLight(data);
		node.highLight = true;
	}

	//设置高亮，传入的参数是完整树的数据
	static clearHighLight(data){
		for (let i in data){
			data[i].highLight = null;
			if(data[i].children != null && data[i].children != [])
			{
				this.clearHighLight(data[i].children);
			}
		}
	}
}

export default TreeTools;
