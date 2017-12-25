const dev = process.env.NODE_ENV !== 'production';

// 全局配置
module.exports = {
	port: parseInt(process.env.PORT, 10) || 9999,
	env: dev ? 'development' : 'production', // 开发环境，development 本地 production 线上
	logDir: './logger',
	dev: dev,
	db: {
		user: 'zhaihaoran',
		password: '111111',
		database: 'tumeng',
		port: '3306',
		host: '127.0.0.1'
	},
	cookie: {
		maxAge: '', // cookie有效时长
		expires: '', // cookie失效时间
		path: '', // 写cookie所在的路径
		domain: '', // 写cookie所在的域名
		httpOnly: false, // 是否只用于http请求中获取
		overwrite: true, // 是否允许重写
		secure: '',
		sameSite: '',
		signed: true // 是否加密
	}
	// "process.env.BACKEND_URL": prod
	//     ? "https://api.example.com"
	//     : "https://localhost:8080",
};
