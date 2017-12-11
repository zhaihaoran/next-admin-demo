import Link from "next/link";
import Head from "next/head";

import NProgress from "nprogress";
import Router from "next/router";
import { Provider } from "mobx-react";

import commonScss from "@style/scss/admin.common.scss";

NProgress.configure({ showSpinner: true });

Router.onRouteChangeStart = url => {
	NProgress.set(0.4).start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

import Layout from "@comps/Admin/Layout";

const Wrapper = ({ children, title = "This is the default title", store }) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<link
				href="//cdn.bootcss.com/antd/3.0.0-rc.3/antd.css"
				rel="stylesheet"
			/>
			<link rel="icon" href="/static/favicon.ico" />
			<link
				rel="stylesheet"
				type="text/css"
				href="/static/nprogress.css"
			/>
			<style dangerouslySetInnerHTML={{ __html: commonScss }} />
		</Head>
		<Provider store={store}>
			<Layout>{children}</Layout>
		</Provider>
	</div>
);

export default Wrapper;
