import React from "react";
import {
  EventsCard,
  Text,
  EventFade,
  SmallHeading,
  UnderSubHeading,
} from "../style/style";

const climatecard = (props) => {
  return (
    <EventsCard>
      {props.img && <img src={props.img} alt="" />}
      {props.heading && <UnderSubHeading> {props.heading}</UnderSubHeading>}
      {props.para && <Text>{props.para}</Text>}
      {props.subheading && props.subpara && (
        <EventFade>
          <SmallHeading>{props.subheading}</SmallHeading>
          <Text>{props.subpara}</Text>
        </EventFade>
      )}
    </EventsCard>
  );
};

export default climatecard;
