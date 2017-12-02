import React, { Component } from "react";

export default WrappedComponent => {
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = { data: null };
        }

        render() {
            return <WrappedComponent data={this.state.data} />;
        }
    }
    return NewComponent;
};
