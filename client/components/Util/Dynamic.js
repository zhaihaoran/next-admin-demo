import React from "react";
import PropTypes from "prop-types";

/**
 * 去除属性   代理HOC
 * @param {*React.Component} WrappedComponent 传入的react元素
 * @param {*Object} attrs 需要去除的属性
 *
 * eg. const NewComponent = removeAttrComponent(SampleComponent,[user,age])
 */
export const removeAttrComponent = (WrappedComponent, attr) => {
	return class WrappedComponent extends React.Component {
		render() {
			const { attr, ...oherProps } = this.props;
			return <WrappedComponent {...oherProps} />;
		}
	};
};

/**
 * 实现倒计时的HOC
 *
 * eg.<CountDown startCount={10}>{count => <div>{count}</div>}</CountDown>;
 */

export class CountDown extends React.Component {
	constructor() {
		super(...arguments);
		this.state = { count: this.props.startCount };
	}

	componentWillMount() {
		if (this.intervalHandle) {
			window.clearInterval(this.intervalHandle);
		}
	}
	// 组件优化，充分利用shouldComponentUpdate
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.count !== this.state.count;
	}

	componentDidMount() {
		this.intervalHandle = setInterval(() => {
			const newCount = this.state.count - 1;
			if (newCount >= 0) {
				this.setState({ count: newCount });
			} else {
				window.clearInterval(this.intervalHandle);
			}
		}, 1000);
	}

	render() {
		const { children, count } = this.props;
		return children(count);
	}
}

CountDown.propTypes = {
	children: React.PropTypes.func.isRequired,
	startCount: React.PropTypes.number.isRequired
};

/**
 * Dynamic 封装
 */
