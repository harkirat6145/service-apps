import React from "react";
import {
  ImageCard,
  FadeBlock,
  Text,
  JournalButton,
  SubSize,
} from "../style/style";

export const JournalCard = (props) => {
  return (
    <ImageCard>
      <SubSize>
        <img src={props.img} alt="" />
      </SubSize>
      <FadeBlock>
        <Text color>{props.subheading}</Text>
        <JournalButton>{props.btn}</JournalButton>
      </FadeBlock>
    </ImageCard>
  );
};
