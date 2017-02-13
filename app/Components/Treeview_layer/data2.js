'use strict';

export default [{
    name: '全部',
    icon: "folder",
    fold: "expanded",
    action: 'fold',
    actionData:{},
    children: [
        {
            name: '引水发电工程',
            icon: "folder",
            fold: "folded",
            action: 'fold',
            actionData:{},
            children: [
                { name: '副厂房设备室', icon: "file", action: 'link', actionData:{linkURL:'/qualityMana/unitProjectReport/divided'}, fold: "none" },
                { name: '地下发电厂房工程Z06', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '升压变电工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
            ]
        },
        {
            name: '机电设备工程',
            icon: "folder",
            fold: "folded",
            loading: true,
            action: 'fold',
            actionData:{},
            children: [
                { name: '配电设备', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '污水处理工程', icon: "file", action: 'set', actionData:{}, fold: "none" }
            ]
        }
        ,
        {
            name: '辅助工程',
            icon: "folder",
            fold: "folded",
            action: 'fold',
            actionData:{},
            children: [
                { name: '公路与桥梁工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '导截流工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '麦地龙承包商营地工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '高线混凝地拌和及制冷系统', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '缆机工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '上铺子沟砂石加工系统工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '施工期水情测报工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '其他辅助工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
            ]
        },
        {
            name: '环境保护和水土保持工程',
            icon: "folder",
            fold: "folded",
            action: 'fold',
            actionData:{},
            children: [
                { name: '过鱼设施工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '鱼类增殖站工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '环境工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '水土保持工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
            ]
        },
        { name: '其他项目', icon: "file", action: 'fold', actionData:{}, loading:"loading", fold: "folded",
            children: [
                { name: '运行管理项目', icon: "file", action: 'set', actionData:{}, fold: "none" },
                { name: '其他项目', icon: "file", action: 'set', actionData:{}, fold: "none" },
        
            ] 
        },
    ]
}];

const data=[{
    name: '总模型',
    icon: "folder",
    fold: "expanded",
    action: 'link',
    actionData:{linkURL:'/allDisplay/designModel/MainView/test3.dgn'},
       children: [{
                name: '测绘模型',
                    icon: "folder",
                    fold: "expanded",
                    action: 'fold',
                    actionData:{},
                    children: [
                        { name: 'test1.dgn', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test1.dgn'}, fold: "none" },
                        { name: 'test2.dgn', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test2.dgn'}, fold: "none" },
                        { name: 'test3.dgn', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test3.dgn'}, fold: "none" },
                        { name: '测试模型2', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/测试模型2'}, fold: "none" },
                        { name: '测试模型', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/测试模型'}, fold: "none" },
                    ]
            },
            {
                name: '地质模型',
                icon: "folder",
                fold: "expanded",
                action: 'fold',
                actionData:{},
                children: [
                    { name: 'test5.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test5.imodel'}, fold: "none" }
                ]
            },
            {
                name: '枢纽模型',
                icon: "folder",
                fold: "expanded",
                action: 'fold',
                actionData:{},
                children: [
                    { name: 'test6.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test6.imodel'}, fold: "none" },
                    { name: 'test7.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test7.imodel'}, fold: "none" }
                ]
            },
            {
                name: '发电系统模型',
                icon: "folder",
                fold: "expanded",
                action: 'fold',
                actionData:{},
                children: [
                    { name: 'test8.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test8.imodel'}, fold: "none" },
                    { name: 'test9.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test9.imodel'}, fold: "none" },
                    { name: 'test10.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test10.imodel'}, fold: "none" },
                    { name: 'test11.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test11.imodel'}, fold: "none" },
                    { name: 'test12.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test12.imodel'}, fold: "none" },
                    { name: 'test13.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test13.imodel'}, fold: "none" },
                ]
            },
            {
                name: '大坝模型',
                icon: "folder",
                fold: "expanded",
                action: 'fold',
                actionData:{},
                children: [
                    { name: 'test14.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test14.imodel'}, fold: "none" },
                    { name: 'test15.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test15.imodel'}, fold: "none" },
                    { name: 'test16.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test16.imodel'}, fold: "none" },
                    { name: 'test17.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test17.imodel'}, fold: "none" },
                    { name: 'test18.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test18.imodel'}, fold: "none" },
                    { name: 'test19.imodel', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test19.imodel'}, fold: "none" },
                ]
            }
        ]
    }
]
