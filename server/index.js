const next = require('next');
const mobxReact = require('mobx-react');
const path = require('path');
// koa
const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-view');

// session
const session = require('koa-session-minimal');
const MysqlSession = require('koa-mysql-session');
const passport = require('koa-passport');

// util
const config = require('../config/config');
const { dev, port } = config;
const app = next({
	dev
});
const handle = app.getRequestHandler();
console.log('开发模式', dev);
mobxReact.useStaticRendering(true);

app.prepare().then(() => {
	const server = new Koa();
	const router = new Router();
	// 设置一个cookie的签名密钥，密钥只有在signed参数为真时，才生效。
	app.keys = ['tumeng'];
	// 使用session中间件
	server.use(
		session({
			key: 'USER_SID',
			store: new MysqlSession(config.db),
			cookie: config.cookie
		})
	);
	// 捕获错误
	// server.on('error', err => {
	// 	log.error('server error', err);
	// });
	server.use(passport.initialize());
	server.use(passport.session());

	// template render
	router.get('/bbbb', async ctx => {
		await ctx.render('user', {
			title: 'John',
			session: ctx.session
		});
	});

	router.post('/api/user/login', async ctx => {
		let postData = ctx.request.body;
		let { username, password, isLogin } = postData;
		if (username === '123' && password === '123') {
			// 设置session。保存登陆状态
			ctx.session = {
				isLogin: true,
				userId: Math.random()
					.toString(36)
					.substr(2),
				userName: 'zhaihaoran',
				count: 0
			};
			ctx.body = { status: 0, msg: '登陆成功' };
		} else {
			ctx.body = { status: 101, msg: '账号或密码错误！' };
		}
	});

	router.get('/(login|register)', async ctx => {
		await handle(ctx.req, ctx.res);
	});
	router.get('/signout', async ctx => {
		ctx.session = null;
		ctx.body = { status: 0, msg: '已注销' };
	});

	router.get(
		'*',
		(ctx, next) => {
			// 判断是否有session，做处理
			if (ctx.session && ctx.session.isLogin && ctx.session.userName) {
				next();
			}
			ctx.redirect('/login');
		},
		async ctx => {
			await handle(ctx.req, ctx.res);
			ctx.respond = false;
		}
	);

	server.use(async (ctx, next) => {
		ctx.res.statusCode = 200;
		await next();
	});

	// 配置服务端模板渲染引擎中间件 --- nunjucks
	server.use(views(path.join(__dirname, './views')));
	server.use(router.routes());
	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
