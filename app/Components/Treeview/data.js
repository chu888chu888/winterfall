'use strict';

export default [{
    name: '设计模型',
    icon: "folder",
    fold: "expanded",
    action: 'fold',
    checked: true,
    actionData:{},
    children: [
        {
            name: '土建系统',
            icon: "folder",
            fold: "folded",
            action: 'fold',
            actionData:{},
            children: [
                { name: '饮水系统', icon: "file", action: 'link', actionData:{linkURL:'/baseData/baseData/MainBox/饮水系统'},  fold: "none" },
                { name: '主房厂', icon: "file", action: 'link', actionData:{linkURL:'/baseData/baseData/MainBox/主房厂'},  fold: "none" },
                { name: '副房厂', icon: "file", action: 'link', actionData:{linkURL:'/baseData/baseData/MainBox/副房厂'},  fold: "none" },
                { name: '大坝', icon: "file", action: 'link', actionData:{linkURL:'/baseData/baseData/MainBox/大坝'},  fold: "none" },
            ]
        },
        {
            name: '机电系统',
            icon: "folder",
            fold: "folded",
            loading: true,
            action: 'fold',
            actionData:{},
	    highLight:true,
            children: [
                { name: '一次系统', icon: "file", action: 'link', actionData:{linkURL:'/baseData/baseData/MainBox/一次系统'},  fold: "none" },
                { name: '二次系统', icon: "file", action: 'link', actionData:{linkURL:'/baseData/baseData/MainBox/二次系统'},  fold: "none" },
                { name: '油系统', icon: "file", action: 'link', actionData:{linkURL:'/baseData/baseData/MainBox/油系统'},  fold: "none" },
                { name: '气系统', icon: "file", action: 'link', actionData:{linkURL:'/baseData/baseData/MainBox/气系统'},  fold: "none" },
            ]
        }
        ,
        {
            name: 'src',
            icon: "folder",
            fold: "folded",
            action: 'fold',
            actionData:{},
            children: [
                {
                    name: 'components',
                    icon: "folder",
                    fold: "folded",
                    action: 'set',
                    children: [
                        { name: 'decorators.js', icon: "file", action: 'set', actionData:{},  fold: "none" },
                        { name: 'treebeard.js', icon: "file", action: 'set', actionData:{},  fold: "none" }
                    ]
                },
                { name: 'index.js', icon: "file", action: 'set', actionData:{},  fold: "none" }
            ]
        },
        {
            name: 'themes',
            icon: "folder",
            fold: "expanded",
            action: 'fold',
            actionData:{},
            children: [
                { name: 'animations.js', icon: "file", action: 'set', actionData:{},  fold: "none", highLight:true },
                { name: 'default.js', icon: "file", action: 'set', actionData:{},  fold: "none" }
            ]
        },
        { name: 'Gulpfile.js', icon: "folder", fold:"folded", action: 'fold', actionData:{},  loading:"loading" },
    ]
}];
