import React from "react";
import Climatecard from "./climatecard";

import { FooterWrapper } from "../style/style";

export const NewsEvent = () => {
  return (
    <>
      <FooterWrapper>
        <Climatecard
          heading="News and Events"
          para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
        explicabo. Magnam porro dolorum blanditiis impedit o"
        />
        <Climatecard
          img="img/radiation_e.jpg"
          subheading="Little invaders"
          subpara=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          explicabo. Magnam porro dolorum blanditiis impedit o"
        />
        <Climatecard
          img="img/radiation_e.jpg"
          subheading="Little invaders"
          subpara=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          explicabo. Magnam porro dolorum blanditiis impedit o"
        />
      </FooterWrapper>
    </>
  );
};
