import React from "react";
import {
  UnderSubHeading,
  SubText,
  SmallHeading,
  EventsCard,
} from "../style/style";

export const FooterCard = (props) => {
  return (
    <EventsCard height margin>
      <UnderSubHeading line>{props.Heading}</UnderSubHeading>
      <SmallHeading  marg>
        {props.subHeading}
      </SmallHeading>
      <SubText line subColor>
        {props.paraA}
      </SubText>
      <SubText line subColor>
        {props.paraB}
      </SubText>
      <SubText line subColor>
        {props.paraC}
      </SubText>
    </EventsCard>
  );
};
