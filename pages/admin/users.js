import React from 'react';
import { initStore } from '@store/admin';
import Layout from '@comps/Head/admin';
import dynamic from 'next/dynamic';
import Loading from '@comps/Util/Loading';
import {
	List,
	Avatar,
	Icon,
	Spin,
	Card,
	Button,
	Input,
	Select,
	Radio
} from 'antd';
import BackTop from '@comps/Admin/BackTop';
// import TabContent from '@comps/Admin/TabContent';

const DynamicComponent = dynamic(import('@comps/Admin/ListSlider'), {
	loading: Spin
});

const CardCube = () => (
	<Card
		hoverable
		style={{ flexDirection: 'row', display: 'flex', marginBottom: 20 }}
		cover={
			<img
				style={{ maxWidth: 200 }}
				alt="example"
				src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
			/>
		}
	>
		<Button style={{ position: 'absolute', right: 20, top: 20 }}>
			邀约
		</Button>
		<p>清华大学</p>
		<p>简称清华，全国重点大学</p>
		<p>
			简介：巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉
		</p>
	</Card>
);

export default class extends React.Component {
	static async getInitialProps({ query, res, req }) {
		const isServer = !!req;
		console.log(query, 'query');
		const entry = isServer ? req.url : '';
		const store = initStore(isServer);
		return { isServer, collapsed: store.collapsed };
	}

	constructor(props) {
		super(props);
		const { collapsed, isServer } = this.props;
		this.store = initStore(isServer, collapsed);
	}

	render() {
		const lists = Array.from({ length: 7 });
		return (
			<Layout title="users" store={this.store}>
				<div className="search-wapper">
					<Radio.Group>
						<Radio.Button value="large">Large</Radio.Button>
						<Radio.Button value="default">Default</Radio.Button>
						<Radio.Button value="small">Small</Radio.Button>
					</Radio.Group>
					<Input.Search
						placeholder="input search text"
						onSearch={value => console.log(value)}
						className="search-input"
					/>
				</div>
				<BackTop />
				{lists.map((v, i) => <CardCube key={`card${i}`} />)}
				<style>{`
					.wrapper {
						display: flex;
						flex-direction: row;
					}
					.wr-left {
						display: flex;
						flex: 1;
					}
					.wr-right {
						display: flex;
						flex: 3;
						flex-direction: column;
					}
					.search-wrapper {
						display: flex;
						margin-bottom:20px;
						flex-direction:row;
					}
					.search-input {
						width:200px;
						margin-left:20px;
					}
				`}</style>
			</Layout>
		);
	}
}
