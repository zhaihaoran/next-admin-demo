import React, { Component } from "react";
import Link from "@comps/Util/ActiveLink";

class ReturnsPage extends Component {
    render() {
        return (
            <div className="not-found">
                <h1>ReturnsPage</h1>
                <p>
                    <Link href="/admin">Go back to the main page</Link>
                </p>
            </div>
        );
    }
}

export default ReturnsPage;
