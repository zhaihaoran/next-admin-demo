const Koa = require("koa");
const { createServer } = require("http");
const next = require("next");
const mobxReact = require("mobx-react");
const Logger = require("mini-logger");
// util
const config = require("../config/config");
// routes
const routes = require("../routes/router");
const { dev, port } = config;
console.log(dev);
const app = next({ dev });
const handler = routes.getRequestHandler(app);

mobxReact.useStaticRendering(true);

// logger
const logger = Logger({
	dir: config.logDir, //指定日志存放的地方
	categories: ["router", "model", "controller", "test"], //自定义日志分类
	format: "YYYY-MM-DD-[{category}][.log]" // 日志文件名格式
});

app.renderError((err, req, res) => {
	// 记录错误日志
	logger.error(err);
});

app.prepare().then(() => {
	createServer(handler).listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
	// const server = new Koa();
	// server.use(async ctx => {
	// 	await handler(ctx.req, ctx.res);
	// 	ctx.respond = false;
	// });

	// server.listen(port, err => {
	// 	if (err) throw err;
	// 	console.log(`> Ready on http://localhost:${port}`);
	// });
});
