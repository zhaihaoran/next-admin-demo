const dev = process.env.NODE_ENV !== "production";

// 全局配置
module.exports = {
	port: parseInt(process.env.PORT, 10) || 9999,
	env: dev ? "development" : "production", // 开发环境，development 本地 production 线上
	logDir: "./logger",
	dev: dev
	// "process.env.BACKEND_URL": prod
	//     ? "https://api.example.com"
	//     : "https://localhost:8080",
};
