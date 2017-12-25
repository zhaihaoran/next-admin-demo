import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '@comps/Head/common';

// components
import CardsContainer from '@comps/Front/Card';
import SignModal from '@comps/lib/SignModal';
import TimeLine from '@comps/lib/TimeLine';

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
			<div className="container">
				<CardsContainer />
				<SignModal />
				<TimeLine />
			</div>
			<ul>
				<li>
					<Link href="/login">
						<a
							onMouseEnter={() => {
								Router.prefetch('/login');
								console.log('prefetching /login!');
							}}
						>
							login
						</a>
					</Link>
				</li>
				<li>
					<Link href="/register">
						<a>register</a>
					</Link>
				</li>
				<PostLink id="hello-nextjs" title="Hello Next.js" />
				<PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
				<PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
			</ul>
			<div className="jiathis_style">
				<span className="jiathis_txt">分享到：</span>
				<a className="jiathis_button_qzone">QQ空间</a>
				<a className="jiathis_button_tsina">新浪微博</a>
				<a className="jiathis_button_tqq">腾讯微博</a>
				<a className="jiathis_button_renren">人人网</a>
				<a className="jiathis_button_kaixin001">开心网</a>
				<a className="jiathis_button_email">邮件</a>
				<a className="jiathis_counter_style" />
			</div>
			<script
				type="text/javascript"
				src="http://v3.jiathis.com/code_mini/jia.js?uid=2152168"
				charSet="utf-8"
			/>
		</Layout>
	);
};
