import { Button, Modal, Form, Input, Radio, DatePicker } from 'antd';
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(props => {
	const { visible, onCancel, onCreate, form } = props;
	const { getFieldDecorator } = form;

	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 8 }
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 16 }
		}
	};

	const config = {
		rules: [
			{ type: 'object', required: true, message: 'Please select time!' }
		]
	};

	return (
		<Modal
			visible={visible}
			title="Create a new collection"
			okText="Create"
			onCancel={onCancel}
			onOk={onCreate}
		>
			<Form layout="vertical">
				<FormItem {...formItemLayout} label="DatePicker">
					{getFieldDecorator('date-picker', config)(<DatePicker />)}
				</FormItem>
				<FormItem label="Title">
					{getFieldDecorator('title', {
						rules: [
							{
								required: true,
								message: 'Please input the title of collection!'
							}
						]
					})(<Input />)}
				</FormItem>
				<FormItem label="Description">
					{getFieldDecorator('description')(
						<Input type="textarea" />
					)}
				</FormItem>
				<FormItem className="collection-create-form_last-form-item">
					{getFieldDecorator('modifier', {
						initialValue: 'public'
					})(
						<Radio.Group>
							<Radio value="public">Public</Radio>
							<Radio value="private">Private</Radio>
						</Radio.Group>
					)}
				</FormItem>
			</Form>
		</Modal>
	);
});

class CollectionsPage extends React.Component {
	state = {
		visible: false
	};
	showModal = () => {
		this.setState({ visible: true });
	};
	handleCancel = () => {
		this.setState({ visible: false });
	};
	handleCreate = () => {
		const form = this.form;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}

			console.log('Received values of form: ', values);
			form.resetFields();
			this.setState({ visible: false });
		});
	};
	saveFormRef = form => {
		this.form = form;
	};
	render() {
		return (
			<div>
				<Button type="primary" onClick={this.showModal}>
					New Collection
				</Button>
				<CollectionCreateForm
					ref={this.saveFormRef}
					visible={this.state.visible}
					onCancel={this.handleCancel}
					onCreate={this.handleCreate}
				/>
			</div>
		);
	}
}

export default CollectionsPage;
