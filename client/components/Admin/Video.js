import React from 'react';
import videojs from 'video.js';
import videoCss from '../../../static/video.css';

class VideoWrapper extends React.Component {
	componentDidMount() {
		// instantiate Video.js
		this.player = videojs(
			this.videoNode,
			this.props,
			function onPlayerReady() {
				console.log('onPlayerReady', this);
			}
		);
	}
	// destory player on unmount
	componentWillUnmount() {
		if (this.player) {
			this.player.dispose();
		}
	}
	render() {
		return (
			<div data-vjs-player>
				<video
					ref={node => (this.videoNode = node)}
					className="video-js"
				/>
				<style dangerouslySetInnerHTML={{ __html: videoCss }} />
			</div>
		);
	}
}

export default VideoWrapper;
