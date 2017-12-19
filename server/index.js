const Koa = require("koa");
const next = require("next");
const Router = require("koa-router");
const mobxReact = require("mobx-react");
const views = require("koa-view");
const path = require("path");

// middleware
const bodyParser = require("koa-bodyparser");
const koaLogger = require("koa-logger");
const convert = require("koa-convert");
// util
const config = require("../config/config");
const { dev, port } = config;
const app = next({ dev });
const handle = app.getRequestHandler();
console.log(dev);
mobxReact.useStaticRendering(true);

app.prepare().then(() => {
	const server = new Koa();
	const router = new Router();

	router.get("/a", async ctx => {
		await app.render(ctx.req, ctx.res, "/a", ctx.query);
		ctx.respond = false;
	});
	// 配合单页应用
	router.get("/aaa", async ctx => {
		await app.render(ctx.req, ctx.res, "/admin", ctx.query);
		ctx.respond = false;
	});

	router.get("/bbbb", async ctx => {
		ctx.state = {
			title: "app"
		};

		await ctx.render("user", {
			title: "John"
		});
	});

	router.get("/b", async ctx => {
		await app.render(ctx.req, ctx.res, "/b", ctx.query);
		ctx.respond = false;
	});

	router.post("/api/user/login", async ctx => {
		let postData = ctx.request.body;
		// 设置cookie
		ctx.cookies.set("cid", "tumeng", {
			domain: "localhost:9999", // 写cookie所在的域名
			path: "/index", // 写cookie所在的路径
			maxAge: 10 * 60 * 1000, // cookie有效时长
			expires: new Date("2017-02-15"), // cookie失效时间
			httpOnly: false, // 是否只用于http请求中获取
			overwrite: false // 是否允许重写
		});
		ctx.body = postData;
	});

	router.get("*", async ctx => {
		await handle(ctx.req, ctx.res);
		ctx.respond = false;
	});

	server.use(async (ctx, next) => {
		ctx.res.statusCode = 200;
		await next();
	});

	// 配置静态资源加载中间件
	server.use(convert(koaLogger()));

	// 配置ctx.body解析中间件
	server.use(bodyParser());

	// 配置服务端模板渲染引擎中间件 --- nunjucks
	server.use(views(path.join(__dirname, "./views")));

	server.use(router.routes());
	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
