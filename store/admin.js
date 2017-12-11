import { action, observable } from "mobx";

let store = null;

class Admin {
	@observable collapsed = false;

	@action
	toggle = () => {
		this.collapsed = !this.collapsed;
	};
}

export function initStore(isServer, collapsed = false) {
	if (isServer) {
		return new Admin(isServer, collapsed);
	} else {
		if (store === null) {
			store = new Admin(isServer, collapsed);
		}
		return store;
	}
}
