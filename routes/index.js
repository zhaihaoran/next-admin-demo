const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add({
    name: "admin",
    pattern: "/admin/:slug",
    page: "admin"
});
// routes.add("admin", "/admin/:slug");
routes.add("blog", "/blog/:slug", "admin.js");
routes.add("about", "/about-us/:foo(bar|baz)");
