import React from 'react';
import Link from 'next/link';
import { string } from 'prop-types';
import { Carousel } from 'antd';
import VideoWrapper from '@comps/Admin/Video';

import image1 from '@static/1.jpg';
import image2 from '@static/2.jpg';
import image3 from '@static/3.jpg';

class CarouselWrapper extends React.Component {
	handlePrev() {
		this.carousel.prev();
	}
	handleNext() {
		this.carousel.next();
	}

	render() {
		const videoJsOptions = {
			autoplay: false,
			controls: true,
			sources: [
				{
					src: 'http://vjs.zencdn.net/v/oceans.mp4',
					type: 'video/mp4'
				}
			]
		};
		const carouselOptions = {
			dots: true,
			slidesToScroll: 1,
			lazyLoad: true
		};
		return (
			<div className="tumeng-carousel">
				<Carousel
					{...carouselOptions}
					ref={node => (this.carousel = node)}
				>
					<div>
						<Link href="/login">
							<a>
								<img
									src={image1}
									alt="image1"
									className="carousel-image"
								/>
							</a>
						</Link>
					</div>
					<div>
						<img
							src={image2}
							alt="image2"
							className="carousel-image"
						/>
					</div>
					<div>
						<img
							src={image3}
							alt="image3"
							className="carousel-image"
						/>
					</div>
					<div>
						<VideoWrapper {...videoJsOptions} />
					</div>
				</Carousel>
				<div className="carousel-tooltip">
					<div
						className="carousel-item"
						onClick={this.handlePrev.bind(this)}
					/>
					<div
						className="carousel-item"
						onClick={this.handleNext.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

CarouselWrapper.propTypes = {
	title: string
};

export default CarouselWrapper;
