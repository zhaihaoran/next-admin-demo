const Router = require("koa-router");
const router = new Router();
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

router.get("/", async ctx => {
    await app.render(ctx.req, ctx.res, "/", ctx.query);
    ctx.respond = false;
});

router.get("/about", async ctx => {
    await app.render(ctx.req, ctx.res, "/about", ctx.query);
    ctx.respond = false;
});

router.get("/users", async ctx => {
    await app.render(ctx.req, ctx.res, "/", ctx.query);
    ctx.respond = false;
});

router.get("/orders", async ctx => {
    await app.render(ctx.req, ctx.res, "/a", ctx.query);
    ctx.respond = false;
});

module.exports = router;
