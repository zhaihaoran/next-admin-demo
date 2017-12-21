import React from 'react';
import { initStore } from '@store/admin';
import Layout from '@comps/Head/admin';
import dynamic from 'next/dynamic';
import Loading from '@comps/Util/Loading';

import VideoWrapper from '@comps/Admin/Video';
import Components from '@comps/Admin/Components';

const DynamicComponent = dynamic(import('@comps/Admin/AccountPage'), {
	loading: Loading,
	ssr: false
});

export default class extends React.Component {
	static async getInitialProps({ query, res, req, pathname }) {
		const isServer = !!req;
		const store = initStore(isServer);
		return { pathname, isServer, collapsed: store.collapsed };
	}

	constructor(props) {
		super(props);
		const { pathname, collapsed, isServer } = this.props;
		this.store = initStore(isServer, collapsed);
	}

	render() {
		const videoJsOptions = {
			autoplay: true,
			controls: true,
			sources: [
				{
					src: 'http://vjs.zencdn.net/v/oceans.mp4',
					type: 'video/mp4'
				}
			]
		};
		return (
			<Layout title="b" store={this.store}>
				<DynamicComponent />
				<VideoWrapper {...videoJsOptions} />
				<Components />
			</Layout>
		);
	}
}
