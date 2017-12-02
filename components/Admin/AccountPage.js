import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class AccountPage extends Component {
    render() {
        return (
            <div className="not-found">
                <h1>AccountPage</h1>
                <p>
                    <Link to="/">Go back to the main page</Link>
                </p>
            </div>
        );
    }
}

export default withRouter(AccountPage);
