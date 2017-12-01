import React from "react";
import Wrapper from "@comps/Head/Common";

const posts = [
    { slug: "course", title: "课程概要", content: "aaabbbccc" },
    { slug: "activity", title: "活动介绍", content: "cccdddeee" },
    { slug: "item", title: "名师介绍", content: "导师A" }
];

export default class extends React.Component {
    static async getInitialProps({ query, res }) {
        const post = posts.find(post => post.slug === query.slug);

        if (!post && res) {
            res.statusCode = 404;
        }

        return { post };
    }

    render() {
        const { post } = this.props;

        if (!post) return <h1>Post not found</h1>;

        return (
            <Wrapper>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </Wrapper>
        );
    }
}
