import React from "react";
import {
  TextCard,
  UnderSubHeading,
  Text,
  SmallHeading,
  Wrapper,
  Profile,
  Span,
  SubButton,
} from "../style/style";

export const SingleCard = (props) => {
  return (
    <TextCard>
      <UnderSubHeading>{props.heading}</UnderSubHeading>
      <Wrapper className="p-0" Display wid>
        {props.img && (
          <Profile Profile>
            <img src={props.img} alt="" />
          </Profile>
        )}
        {props.position && props.name && (
          <Profile>
            <SmallHeading cols>{props.name}</SmallHeading>
            <Text color>{props.position}</Text>
          </Profile>
        )}
      </Wrapper>

      {props.subheading && <SmallHeading>{props.subheading}</SmallHeading>}
      <Text>
        {props.text}
        {props.short && <Span>{props.short}</Span>}
      </Text>
    
        {props.btn && <SubButton> {props.btn}</SubButton>}
    
    </TextCard>
  );
};
