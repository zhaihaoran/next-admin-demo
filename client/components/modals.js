import { Component } from "react";
import { createPortal } from "react-dom";

export default class extends Component {
	componentWillMount() {
		// get the mount point, is because of this why the modal
		// can't be used server side, we need access to the DOM
		this.modalRoot = document.getElementById("context");
	}

	render() {
		const { title, children } = this.props;

		return createPortal(
			<div className="overlay">
				<div className="modal">
					<h2>{title}</h2>
					{children}
				</div>
			</div>,
			this.modalRoot
		);
	}
}
