import Head from "next/head";
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
        </Head>
        <style jsx global>{`
            body {
            }
        `}</style>
        {children}
    </div>
);
