const Router = require("koa-router");
const router = new Router();
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

router.get("/", async ctx => {
    await app.render(ctx.req, ctx.res, "/", ctx.query);
    ctx.respond = false;
});

router.get("/course", async ctx => {
    await app.render(ctx.req, ctx.res, "/course", ctx.query);
    ctx.respond = false;
});

module.exports = router;
