import React, { Component } from "react";
import ActiveLink from "@comps/Util/ActiveLink";

class ReturnsPage extends Component {
	render() {
		return (
			<div className="not-found">
				<h1>ReturnsPage</h1>
				<p>
					<ActiveLink as="/a" href="/b">
						AccountPage
					</ActiveLink>
				</p>
			</div>
		);
	}
}

export default ReturnsPage;
