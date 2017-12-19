import React from "react";
import loadingScss from "@style/scss/loading.scss";

const LoadingElement = {
	// 吃豆人
	pacman: [
		'<div class="loader-inner pacman">',
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"</div>"
	].join(""),

	ballPulse: [
		'<div class="loader-inner ball-pulse">',
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"</div>"
	].join(""),

	ballGridPulse: [
		'<div class="loader-inner ball-grid-pulse">',
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"</div>"
	].join(""),

	ballClipRotate: [
		'<div class="loader-inner ball-clip-rotate">',
		"<div></div>",
		"</div>"
	].join(""),

	squareSpin: [
		'<div class="loader-inner square-spin">',
		"<div></div>",
		"</div>"
	].join(""),

	ballClipRotateMultiple: [
		'<div class="loader-inner ball-clip-rotate-multiple">',
		"<div></div>",
		"<div></div>",
		"</div>"
	].join(""),

	ballTrianglePath: [
		'<div class="loader-inner ball-triangle-path">',
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"</div>"
	].join(""),

	ballRotate: [
		'<div class="loader-inner ball-rotate">',
		"<div></div>",
		"</div>"
	].join(""),

	ballSpinFadeLoader: [
		'<div class="loader-inner ball-spin-fade-loader">',
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"</div>"
	].join(""),

	ballScaleRippleMultiple: [
		'<div class="loader-inner ball-scale-ripple-multiple">',
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"</div>"
	].join(""),

	lineScalePulseOutRapid: [
		'<div class="loader-inner line-scale-pulse-out-rapid">',
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"<div></div>",
		"</div>"
	].join("")
};
const LoadingNames = Object.keys(LoadingElement);

class Loading extends React.Component {
	constructor() {
		super();
	}

	selectElement(LoadingName) {
		return LoadingName
			? LoadingElement[LoadingName]
			: LoadingElement[
					LoadingNames[
						Math.floor(Math.random() * (LoadingNames.length - 1))
					]
				];
	}

	render() {
		return (
			<div>
				<style dangerouslySetInnerHTML={{ __html: loadingScss }} />
				<div
					className="loader"
					dangerouslySetInnerHTML={{ __html: this.selectElement() }}
				/>
			</div>
		);
	}
}

export default Loading;
