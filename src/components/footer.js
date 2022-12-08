import React from "react";
import { Galary } from "../components/galary";
import { FooterCard } from "./footerCard";
import { FooterWrapper, EventsCard } from "../style/style";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterCard
        Heading="important links"
        paraA="About us"
        paraB="Objectives"
        paraC="Benifits"
        className="addDecoration"
      />
      <FooterCard
        Heading="Contact"
        subHeading="Mr.Ashok kumar Matta"
        paraA="Lorem ipsum dolor sit amet dolor sit ame consectetur adipisi elit.
     Commodi, ex?"
        paraB="Phone: 465432132"
        paraC="Email: rass@gamil.com"
      />
      <EventsCard margin>
        <Galary />
      </EventsCard>
    </FooterWrapper>
  );
};
