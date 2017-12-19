const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("admin", "/admin/:slug", "admin");
// routes.add({ name: "admin", pattern: "/admin", page: "admin" });
// 详情页用这个
routes.add("blog", "/blog/:slug");
routes.add("about", "/about-us/:foo(bar|baz)");
