import { Timeline, Icon } from 'antd';

export default props => {
	return (
		<Timeline>
			<Timeline.Item>2015-09-01 创建涂梦</Timeline.Item>
			<Timeline.Item color="green">2015-09-01 解决问题</Timeline.Item>
			<Timeline.Item
				dot={
					<Icon
						type="clock-circle-o"
						style={{ fontSize: '16px', background: 'inherit' }}
					/>
				}
				color="red"
			>
				2015-09-01 开始测试
			</Timeline.Item>
			<Timeline.Item color="red">2015-09-01 提交上线</Timeline.Item>
		</Timeline>
	);
};
