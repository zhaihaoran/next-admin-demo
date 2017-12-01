import React from "react";
import Link from "next/link";

export default () => (
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
    </ul>
);
