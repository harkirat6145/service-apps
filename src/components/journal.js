import React from "react";
import { JournalCard } from "./journalCard";
import { Wrapper, Title } from "../style/style";

export const Journal = () => {
  return (
    <>
      <Title>E-Journal</Title>
      <Wrapper>
        <JournalCard
          img="img/06153fe3e_screen.jpg"
          subheading="E-journal Nov Dec 2019"
          btn="view"
        />
        <JournalCard
          img="img/06153fe3e_screen.jpg"
          subheading="E-journal Nov Dec 2019"
          btn="view"
        />
        <JournalCard
          img="img/06153fe3e_screen.jpg"
          subheading="E-journal Nov Dec 2019"
          btn="view"
        />
      </Wrapper>
    </>
  );
};
