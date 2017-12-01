import React from "react";
import { string } from "prop-types";
import { Carousel } from "antd";
// import styleSheet from "@style/scss/carousel.scss";

const CarouselWrapper = props => {
    return (
        <div>
            {/* <style dangerouslySetInnerHTML={{ __html: styleSheet }} /> */}
            <Carousel autoplay className="box">
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        </div>
    );
};

CarouselWrapper.propTypes = {
    title: string
};

export default CarouselWrapper;
