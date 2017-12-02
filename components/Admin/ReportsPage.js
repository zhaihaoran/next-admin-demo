import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class ReportsPage extends Component {
    render() {
        return (
            <div className="not-found">
                <h1>ReportsPage</h1>
                <p>
                    <Link to="/">Go back to the main page</Link>
                </p>
            </div>
        );
    }
}

export default withRouter(ReportsPage);
