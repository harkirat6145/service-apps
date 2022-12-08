import React, { Component } from "react";
import Slider from "react-slick";
import { ProfileCard } from "../components/profileCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Jar, Title } from "../style/style";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <Jar>
        <Title>Founder Team</Title>
        <Slider {...settings} className="arrow">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </Slider>
      </Jar>
    );
  }
}
