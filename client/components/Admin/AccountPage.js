import React, { Component } from "react";
import ActiveLink from "@comps/Util/ActiveLink";

class AccountPage extends Component {
	render() {
		return (
			<div className="not-found">
				<h1>AccountPage</h1>
				<p>
					<ActiveLink href="/admin">ReturnsPage</ActiveLink>
				</p>
			</div>
		);
	}
}

export default AccountPage;
