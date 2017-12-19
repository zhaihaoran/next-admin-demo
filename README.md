```
├── client 前端开发文件夹
│   ├── assets 前端自测试打包资源生成地址
│   │   └── dist 打包生成的资源文件, 包含js,img,css
│   │       └── js
│   │       └── css
│   │       └── img
│   ├── config webpack配置文件目录
│   └── src 开发目录
│       ├── actions redux的action文件存放目录
│       ├── data 测试数据存放文件
│       ├── dist 资源文件存放目录
│       │   ├── css
│       │   └── img
│       │   └── js
│       ├── reducers redux的reducers文件存放目录
│       ├── route 前端路由存放地址
│       ├── store 前端redux状态控制存放目录
│       └── view 前端视图存放目录
├── public 服务器所使用的前端打包文件夹
│   └── dist
│       ├── css
│       ├── img
│       └── js
└── server 后端开发目录夹
    ├── auth 权限验证目录 用来存放用户验证部分
    ├── config 后端例如数据库等配置文件的存放目录
    ├── containers 后端控制层 C 层的代码存放目录
    ├── models 后端数据库控制代码存放目录
    ├── route 后端路由存放目录
    └── view 后端页面生成外套层存放目录,由于界面同步, 后端只负责生成页面时的外套嵌套
```