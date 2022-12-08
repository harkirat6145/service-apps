import React from "react";
import EmailBar from "./emailBar";
import {
  LetterBar,
  UnderSubHeading,
  SubText,
  SubSection,
} from "../style/style";

export const NewLetter = () => {
  return (
    <LetterBar>
      <SubSection wid padding>
        <UnderSubHeading cols>Newsletter</UnderSubHeading>
        <SubText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
          ullam dolorum repellat nulla assumenda eius.
        </SubText>
        <EmailBar />
      </SubSection>
    </LetterBar>
  );
};
