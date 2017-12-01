import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

NProgress.configure({ showSpinner: true });

Router.onRouteChangeStart = url => {
    console.log(`Loading:${url}`);
    NProgress.set(0.4).start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children }) => (
    <div>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link
                href="//cdn.bootcss.com/antd/3.0.0-rc.3/antd.css"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="/static/nprogress.css"
            />
        </Head>
        <style jsx global>{`
            body {
            }
        `}</style>
        {children}
    </div>
);
