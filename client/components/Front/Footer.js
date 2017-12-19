import React from "react";
import { string } from "prop-types";
import { Layout } from "antd";
import qrcode from "@static/favicon1.png";
const { Footer } = Layout;

const FrontFooter = ({ title, url }) => {
	return (
		<Footer className="tum-footer">
			<div className="container">
				<div className="footer-logo">
					<img src={qrcode} alt="tumeng_qrcode" />
				</div>
				<div className="footer-content">
					<ul className="footer-item">
						<li>关于我们</li>
						<li>联系我们</li>
						<li>公示信息</li>
						<li>招聘</li>
					</ul>
				</div>
				<div className="footer-qrcode">
					<img src={qrcode} alt="tumeng_qrcode" />
				</div>
			</div>
		</Footer>
	);
};

FrontFooter.propTypes = {
	title: string,
	url: string
};

export default FrontFooter;
