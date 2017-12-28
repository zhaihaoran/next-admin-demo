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
					style={{ width: '100%' }}
				/>
				<style dangerouslySetInnerHTML={{ __html: videoCss }} />
				<style>{`
					.video-js .vjs-big-play-button {
						top: 50%;
						margin-top: -24px;
						left: 50%;
						margin-left: -45px;
					}
				`}</style>
			</div>
		);
	}
}

export default VideoWrapper;
