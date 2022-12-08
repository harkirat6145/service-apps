import React from "react";
import {
  Heading,
  Wrapper,
  SubWrapper,
  Text,
  Size,
  IntroCard,
  Button,
} from "../style/style";

export const About = () => {
  return (
    <Wrapper>
      <SubWrapper>
        <Size>
          <img
            src="img/Bench-Park-Sunlight-Summer-2780x2780-768x768.jpg"
            alt=""
          />
        </Size>
      </SubWrapper>
      <SubWrapper>
        <IntroCard>
          <Heading>ABOUT US</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            voluptatum atque harum eius mollitia, suscipit consequuntur expedita
            neque quia nihil blanditiis voluptate quasi, saepe exercitationem
            nobis quas natus illum nisi Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed accusamus alias saepe unde quaerat autem nihil
            illo placeat error officia! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam, rerum?
          </Text>
          <Button>Learn More</Button>
        </IntroCard>
      </SubWrapper>
    </Wrapper>
  );
};
