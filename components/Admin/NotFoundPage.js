import React, { Component } from "react";
import { Link, Router } from "@route/router";

class NotFoundPage extends Component {
	render() {
		return (
			<div className="not-found">
				<h1>NotFoundPage</h1>
				<p>
					<Link route="index" params={{ slug: "index" }}>
						Go back to the main page
					</Link>
				</p>
			</div>
		);
	}
}

export default NotFoundPage;
