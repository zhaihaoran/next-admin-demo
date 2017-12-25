const next = require('next');
const mobxReact = require('mobx-react');
const path = require('path');
// koa
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
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
console.log(dev ? '开发模式' : '线上模式');
mobxReact.useStaticRendering(true);

app.prepare().then(() => {
	const server = new Koa();
	const router = new Router();
	// 设置一个cookie的签名密钥，密钥只有在signed参数为真时，才生效。
	server.keys = ['tumeng'];
	// 使用session中间件
	server.use(
		session({
			key: 'tumeng',
			store: new MysqlSession(config.db),
			cookie: config.cookie
		})
	);
	// 捕获错误
	// server.on('error', err => {
	// 	log.error('server error', err);
	// });
	// server.use(passport.initialize());
	// server.use(passport.session());

	// template render
	router.get('/setcookie', async ctx => {
		ctx.session = {
			isLogin: true,
			userId: Math.random()
				.toString(36)
				.substr(2),
			userName: 'zhaihaoran'
		};
		await ctx.render('user', {
			title: 'John',
			session: ctx.session
		});
	});

	// get 可以种下cookie，post不行，question.1
	router.post('/api/user/login', ctx => {
		const { username, password } = ctx.request.body;
		console.log(username, password);
		if (username === '123' && password === '123') {
			// 没有种下cookieId？
			// 设置session。保存登陆状态
			ctx.session.userName = 'zhaihaoran';
			ctx.session.isLogin = true;
			ctx.session.userId = Math.random()
				.toString(36)
				.substr(2);

			console.log('------');
			console.log(ctx.session);
			ctx.body = { status: 0, msg: '登陆成功' };
		} else {
			ctx.body = { status: 101, msg: '账号或密码错误！' };
		}
	});
	router.get('/api/user/login', ctx => {
		// query 拿到数据
		const { username, password } = ctx.query;
		console.log(username, password);
		if (username === '123' && password === '123') {
			// 没有种下cookieId？
			// 设置session。保存登陆状态
			ctx.session.userName = 'zhaihaoran';
			ctx.session.isLogin = true;
			ctx.session.userId = Math.random()
				.toString(36)
				.substr(2);

			console.log('------');
			console.log(ctx.session);
			ctx.body = { status: 0, msg: '登陆成功' };
		} else {
			ctx.body = { status: 101, msg: '账号或密码错误！' };
		}
	});

	// 如果是后台的话需要登陆，才能查看
	router.get('/admin/:module', async ctx => {
		console.log(ctx.session);
		if (
			ctx.session &&
			ctx.session.isLogin &&
			ctx.session.userName === 'zhaihaoran'
		) {
			await handle(ctx.req, ctx.res);
		} else {
			ctx.response.redirect();
			ctx.redirect('/login');
		}
	});
	// 登出
	router.get('/signout', async ctx => {
		ctx.session = null;
		ctx.body = { status: 0, msg: '已注销' };
	});

	// 处理未匹配路由
	router.get('*', async ctx => {
		await handle(ctx.req, ctx.res);
		ctx.respond = false;
	});

	// 配置ctx.body解析中间件
	server.use(bodyParser());

	// 配置服务端模板渲染引擎中间件 --- nunjucks
	server.use(views(path.join(__dirname, './views')));
	server.use(router.routes());
	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
