import { Tabs, Form, Input, Icon } from "antd";
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

function callback(key) {
	console.log(key);
}

const Tab = props => (
	<Tabs defaultActiveKey="1" onChange={callback}>
		<TabPane
			tab={
				<span>
					<Icon type="apple" />通用
				</span>
			}
		>
			<Form layout="inline">
				<FormItem label="学校">
					<Input placeholder="Basic usage" />
				</FormItem>
			</Form>
		</TabPane>
		<TabPane
			tab={
				<span>
					<Icon type="apple" />画廊
				</span>
			}
			key="2"
		>
			Content of Tab Pane 2
		</TabPane>
	</Tabs>
);

export default Tab;
