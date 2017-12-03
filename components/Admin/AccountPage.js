import React, { Component } from "react";
import Link from "@comps/Util/ActiveLink";

class AccountPage extends Component {
    render() {
        return (
            <div className="not-found">
                <h1>AccountPage</h1>
                <p>
                    <Link href="/">Go back to the main page</Link>
                </p>
            </div>
        );
    }
}

export default AccountPage;
