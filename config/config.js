const prod = process.env.NODE_ENV === "production";

// 全局配置
module.exports = {
    port: parseInt(process.env.PORT, 10) || 9999,
    env: prod ? "production" : "local", // 开发环境，local 本地 production 线上
    logDir: "./logger",
    "process.env.BACKEND_URL": prod
        ? "https://api.example.com"
        : "https://localhost:8080"
};
