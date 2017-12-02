import React from "react";
import { Route, IndexRoute, withRouter } from "react-router-dom";

import Layout from "@comps/Admin/Layout";
import OrdersPage from "@comps/Admin/OrdersPage";
import ShipmentsPage from "@comps/Admin/ShipmentsPage";
import ReturnsPage from "@comps/Admin/ReturnsPage";
// import ReportsPage from "@comps/Admin/ReportsPage";
// import AccountPage from "@comps/Admin/AccountPage";
// import NotFoundPage from "@comps/Admin/NotFoundPage";

const routes = [
    {
        path: "/order",
        component: OrdersPage,
        name: "Home",
        exact: true
    },
    {
        path: "/about",
        component: ShipmentsPage,
        name: "About",
        exact: true
    },
    {
        path: "/users",
        component: ReturnsPage,
        name: "Users"
    }
];

export default routes;
