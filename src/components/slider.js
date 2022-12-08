import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SubSlider } from "../style/style";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <SubSlider>
          <img src="img/istockphoto-517188688-612x612.jpg" alt="" />
          </SubSlider>
          <SubSlider>
            <img src="img/istockphoto-517188688-612x612.jpg" alt="" />
          </SubSlider>
          <SubSlider>
            <img src="img/istockphoto-517188688-612x612.jpg" alt="" />
          </SubSlider>
          <SubSlider>
            <img src="img/istockphoto-517188688-612x612.jpg" alt="" />
          </SubSlider>
        </Slider>
      </div>
    );
  }
}
