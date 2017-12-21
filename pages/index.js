import React from 'react';
import Link from 'next/link';
import Layout from '@comps/Head/common';

// components
import CardsContainer from '@comps/Front/Card';

const PostLink = props => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default props => {
    return (
        <Layout>
            <CardsContainer />
            <ul>
                <li>
                    <Link prefetch href="/b">
                        <a>a</a>
                    </Link>
                </li>
                <li>
                    <Link prefetch href="/admin">
                        <a>admin</a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <a>login</a>
                    </Link>
                </li>
                <li>
                    <Link href="/register">
                        <a>register</a>
                    </Link>
                </li>
                <li>
                    <Link prefetch href="/a">
                        <a>b</a>
                    </Link>
                </li>
                <PostLink id="hello-nextjs" title="Hello Next.js" />
                <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
                <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
            </ul>
        </Layout>
    );
};
