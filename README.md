# next-admin-app

A configurable admin app with [nextjs](https://github.com/leeluolee/puer) and [Koa](https://github.com/nuysoft/Mock) and [antd](https://github.com/leeluolee/puer)

## Features

* Completed Configured NextJS application and
* configurable RESTful API route
  * API request
  * API response mock data
  * validate API request params
* effective immediately when config changed
* JSONP support
* CORS support
* built-in API doc

## Install

```bash
git clone git@github.com:zhaihaoran/next-admin-app.git
cd next-admin-app
npm install or yarn install
```


## Usage

get inside this project root and run the following words

#### local enviroment for development

```bash
npm run dev 
```

you can get

> - Hot code reloading
> - Automatic transpilation and bundling (with webpack and babel)
> - global scss wrapper in the components
> - mock server make your fake data become easy

#### build

```bash
npm run build 
``` 

## Directory

```
next-admin-app
├── components   -- 通过组件
├── config       -- 服务器配置项
├── logger       -- 日志存放区
├── mock         -- puer-mock 假数据存放区
├── pages        -- 页面入口
├── routes       -- 路由区
├── server       -- 服务器配置区
├── node_modules -- node包
├── store        -- models和action存放区
├── styles       -- scss样式区
├── .babelrc     -- babel配置
├── .gitignore
├── .editorconfig
├── next.config.js
├── package.json
├── postcss.config.js  -- css预处理配置项
├── README.md
└── static       -- 静态资源存放区
    └── favicon.ico
    └── index.html
    └── manifest.json

```

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```