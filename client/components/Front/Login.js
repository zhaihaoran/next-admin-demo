import React from "react";
import PropTypes from "prop-types";
import Link from "@comps/Util/ActiveLink";
import Util from "@comps/Util/utils";
import { Card, Form, Icon, Input, Button, Checkbox } from "antd";

const FormItem = Form.Item;
// polyfill fetch
import "isomorphic-fetch";

class NormalLoginForm extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
				// fetch 请求接口

				const res = await fetch("/api/user/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					// body 不能使对象，必须是url参数形式传递
					body: Util.urlEncode(values)
				});
				const statusCode =
					res.statusCode > 200 ? res.statusCode : false;
				const json = await res.json();
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Card className="login-card">
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem>
						{getFieldDecorator("userName", {
							rules: [
								{
									required: true,
									message: "请输入你的姓名!"
								}
							]
						})(
							<Input
								prefix={
									<Icon
										type="user"
										style={{ color: "rgba(0,0,0,.25)" }}
									/>
								}
								placeholder="用户名"
							/>
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator("password", {
							rules: [
								{
									required: true,
									message: "请输入密码"
								}
							]
						})(
							<Input
								prefix={
									<Icon
										type="lock"
										style={{ color: "rgba(0,0,0,.25)" }}
									/>
								}
								type="password"
								placeholder="密码"
							/>
						)}
					</FormItem>
					<FormItem style={{ marginBottom: 0 }}>
						{getFieldDecorator("remember", {
							valuePropName: "checked",
							initialValue: true
						})(<Checkbox>保存密码？</Checkbox>)}

						<Link
							className="login-form-forgot"
							href="/forgetPassword"
						>
							忘记密码？
						</Link>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							登录
						</Button>
						<Link href="/register">注册账户</Link>
					</FormItem>
				</Form>
			</Card>
		);
	}
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;