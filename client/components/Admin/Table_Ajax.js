import { Table } from "antd";
import "isomorphic-fetch";
import Util from "@comps/Util/utils";

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		sorter: true,
		render: name => `${name.first} ${name.last}`,
		width: "20%"
	},
	{
		title: "Gender",
		dataIndex: "gender",
		filters: [
			{ text: "Male", value: "male" },
			{ text: "Female", value: "female" }
		],
		width: "20%"
	},
	{
		title: "Email",
		dataIndex: "email"
	}
];

class App extends React.Component {
	state = {
		data: [],
		pagination: {},
		loading: false
	};
	handleTableChange = (pagination, filters, sorter) => {
		const pager = { ...this.state.pagination };
		pager.current = pagination.current;
		this.setState({
			pagination: pager
		});
		this.getTableData({
			results: pagination.pageSize,
			page: pagination.current,
			sortField: sorter.field,
			sortOrder: sorter.order,
			...filters
		});
	};
	getTableData = async (params = {}) => {
		console.log("params:", params);
		this.setState({ loading: true });
		const query = Util.urlEncode({
			results: 10,
			...params
		});
		const res = await fetch(`https://randomuser.me/api?${query}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			type: "json"
		});

		const data = await res.json();
		console.log(data);
		const pagination = { ...this.state.pagination };
		pagination.total = 200;
		this.setState({
			loading: false,
			data: data.results,
			pagination
		});
	};
	componentDidMount() {
		this.getTableData();
	}
	render() {
		return (
			<Table
				columns={columns}
				rowKey={record => record.registered}
				dataSource={this.state.data}
				pagination={this.state.pagination}
				loading={this.state.loading}
				onChange={this.handleTableChange}
			/>
		);
	}
}

export default App;
