import { Component } from "react";
import AccountPage from "@comps/Admin/AccountPage";
import ReturnsPage from "@comps/Admin/ReturnsPage";
import NotFoundPage from "@comps/Admin/NotFoundPage";
import dynamic from "next/dynamic";

const Modal = dynamic(import("@comps/modals"));

const routes = [
	{
		path: "a",
		component: AccountPage
	},
	{
		path: "b",
		component: ReturnsPage
	},
	{
		path: "c",
		component: NotFoundPage
	}
];

const Context = ({ component, path }) => <div>{component}</div>;

class Post extends Component {
	state = { path: "/" };
	query = () => {};

	render() {
		const { url } = this.props;
		return (
			<div>
				<h1>{url.query.title}</h1>
				<p>This is the blog post content.</p>
				<Modal title="My Modal Portal">
					<p>This is a portal rendered from Next.js</p>
					<button type="button">Close</button>
				</Modal>
				<div id="context" />
			</div>
		);
	}
}

export default Post;
