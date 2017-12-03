import React, { Component } from "react";
import Link from "@comps/Util/ActiveLink";

class ShipmentsPage extends Component {
    render() {
        return (
            <div className="not-found">
                <h1>ShipmentsPage</h1>
                <p>
                    <Link href="/">Go back to the main page</Link>
                </p>
            </div>
        );
    }
}

export default ShipmentsPage;
