import { withRouter } from "next/router";
// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.
const ActiveLink = ({ children, router, href, as }) => {
	const handleClick = e => {
		e.preventDefault();
		// 拿到的是当前的url
		router.push(href, as);
	};
	return (
		<a href={href} onClick={handleClick}>
			{children}
		</a>
	);
};
export default withRouter(ActiveLink);
