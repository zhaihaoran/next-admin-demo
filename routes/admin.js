import dynamic from "next/dynamic";
import ReturnsPage from "@comps/Admin/ReturnsPage";
import OrdersPage from "@comps/Admin/OrdersPage";
import AccountPage from "@comps/Admin/AccountPage";

const routes = [
	{
		slug: "about",
		title: "about",
		context: ReturnsPage
	},
	{
		slug: "orders",
		title: "orders",
		context: OrdersPage
	},
	{
		slug: "users",
		title: "users",
		context: AccountPage
	},
	{
		slug: "",
		title: "首页",
		context: AccountPage
	}
];

// export const comp_modules = (importModule, ssr = true) => {
// 	const Components = dynamic(importModule, {
// 		loading: () => <p>...</p>,
// 		ssr
// 	});
// 	return <Components />;
// };

export default routes;
