import React from "react";
import { Card, Avatar } from "antd";
const { Grid, Meta } = Card;

const context = [
	{
		title: "如何快速有效的掌握英语学习的窍门",
		description: "www.iqidao.com",
		author: "张小山",
		count: 9999,
		src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
	},
	{
		title: "如何快速有效的掌握英语学习的窍门",
		description: "www.iqidao.com",
		author: "张小山",
		count: 9999,
		src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
	},
	{
		title: "如何快速有效的掌握英语学习的窍门",
		description: "www.iqidao.com",
		author: "张小山",
		count: 9999,
		src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
	},
	{
		title: "如何快速有效的掌握英语学习的窍门",
		description: "www.iqidao.com",
		author: "张小山",
		count: 9999,
		src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
	}
];

const gridStyle = {
	width: "25%",
	textAlign: "center"
};

const Cards = props => (
	<div className="speaker-container">
		{context.map((v, i) => (
			<Card
				key={i + "card"}
				hoverable="true"
				cover={
					<img
						src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
						alt="example"
					/>
				}
				className="card-item"
			>
				<Meta
					avatar={
						<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					}
					title="Card title"
					description="This is the description"
				/>
			</Card>
		))}
	</div>
);

export default Cards;
