const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/:slug");
routes.add("admin", "/admin/:slug");
routes.add("blog", "/blog/:slug", "admin.js");
routes.add("about", "/about-us/:foo(bar|baz)");
