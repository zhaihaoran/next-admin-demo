const Koa = require("koa");
const next = require("next");
const Router = require("koa-router");
const mobxReact = require("mobx-react");
const Logger = require("mini-logger");
// util
const _ = require("underscore");

const config = require("../config/local");

// if (process.env.NODE_ENV === "local") {
//     config = require("../config/local");
// } else {
//     config = require("../config/prod");
// }

// routes
const adminRoute = require("./routes/admin");
const indexRoute = require("./routes/index");

const port = parseInt(process.env.PORT, 10) || 9999;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

mobxReact.useStaticRendering(true);

// logger
const logger = Logger({
    dir: config.logDir, //指定日志存放的地方
    categories: ["router", "model", "controller", "test"], //自定义日志分类
    format: "YYYY-MM-DD-[{category}][.log]" // 日志文件名格式
});
// 记录错误日志
logger.error(new Error("error"));

app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();

    router.get("*", async ctx => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });

    router.use("/", indexRoute.routes(), indexRoute.allowedMethods());
    router.use("/admin", adminRoute.routes(), adminRoute.allowedMethods());

    server.use(router.routes()).use(router.allowedMethods());

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
