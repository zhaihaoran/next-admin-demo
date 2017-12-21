import { Select, Upload, Button, Icon, message } from 'antd';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
	children.push(
		<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
	);
}

function handleChange(value) {
	console.log(`selected ${value}`);
}

class MyUpload extends React.Component {
	state = {
		fileList: [
			{
				uid: -1,
				name: 'xxx.png',
				status: 'done',
				url: 'http://www.baidu.com/xxx.png'
			}
		]
	};
	handleChange = info => {
		let fileList = info.fileList;

		// 1. Limit the number of uploaded files
		//    Only to show two recent uploaded files, and old ones will be replaced by the new
		fileList = fileList.slice(-2);

		// 2. read from response and show file link
		fileList = fileList.map(file => {
			if (file.response) {
				// Component will show file.url as link
				file.url = file.response.url;
			}
			return file;
		});

		// 3. filter successfully uploaded files according to response from server
		fileList = fileList.filter(file => {
			if (file.response) {
				return file.response.status === 'success';
			}
			return true;
		});

		this.setState({ fileList });
	};
	render() {
		const props = {
			action: '//jsonplaceholder.typicode.com/posts/',
			onChange: this.handleChange,
			multiple: true
		};
		return (
			<Upload {...props} fileList={this.state.fileList}>
				<Button>
					<Icon type="upload" /> upload
				</Button>
			</Upload>
		);
	}
}

function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}

function beforeUpload(file) {
	const isJPG = file.type === 'image/jpeg';
	if (!isJPG) {
		message.error('You can only upload JPG file!');
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error('Image must smaller than 2MB!');
	}
	return isJPG && isLt2M;
}

class Avatar extends React.Component {
	state = {
		loading: false
	};
	handleChange = info => {
		if (info.file.status === 'uploading') {
			this.setState({ loading: true });
			return;
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, imageUrl =>
				this.setState({
					imageUrl,
					loading: false
				})
			);
		}
	};
	render() {
		const uploadButton = (
			<div>
				<Icon type={this.state.loading ? 'loading' : 'plus'} />
				<div className="ant-upload-text">Upload</div>
			</div>
		);
		const imageUrl = this.state.imageUrl;
		return (
			<Upload
				name="avatar"
				listType="picture-card"
				className="avatar-uploader"
				showUploadList={false}
				action="//jsonplaceholder.typicode.com/posts/"
				beforeUpload={beforeUpload}
				onChange={this.handleChange}
			>
				{imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
			</Upload>
		);
	}
}

export default props => {
	return (
		<div className="box">
			<Select
				mode="tags"
				style={{ width: '100%' }}
				placeholder="Tags Mode"
				onChange={handleChange}
			>
				{children}
			</Select>
			<MyUpload />
			<Avatar />
		</div>
	);
};
