import React from "react";
import Wrapper from "@comps/Head/Common";
import { Link, Router } from "@route/router";

export default () => (
    <Wrapper>
        <ul>
            <li>
                {/* 请求的是/b,显示的是/a */}
                <Link href="/b" as="/a">
                    <a>a</a>
                </Link>
            </li>
            <li>
                <Link href="/a" as="/b">
                    <a>b</a>
                </Link>
            </li>
            <li>
                <Link href="/admin">
                    <a>后台</a>
                </Link>
            </li>
            <li>
                <Link route="blog" params={{ slug: "course" }}>
                    <a>课程概要</a>
                </Link>
            </li>
            <li>
                <Link route="blog" params={{ slug: "activity" }}>
                    <a>活动介绍</a>
                </Link>
            </li>
            <li>
                <Link route="blog" params={{ slug: "item" }}>
                    <a>名师介绍</a>
                </Link>
            </li>
            <li>
                <button
                    onClick={() => Router.pushRoute("about", { foo: "bar" })}
                >
                    About foo bar
                </button>
            </li>
            <li>
                <button
                    onClick={() => Router.pushRoute("about", { foo: "baz" })}
                >
                    About foo baz
                </button>
            </li>
        </ul>
    </Wrapper>
);
