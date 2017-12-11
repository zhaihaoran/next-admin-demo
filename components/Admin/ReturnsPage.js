import React, { Component } from "react";
import { Link, Router } from "@route/router";

class ReturnsPage extends Component {
	render() {
		return (
			<div className="not-found">
				<h1>ReturnsPage</h1>
				<p>
					<Link route="index" params={{ slug: "index" }}>
						Go back to the main page
					</Link>
				</p>
			</div>
		);
	}
}

export default ReturnsPage;
