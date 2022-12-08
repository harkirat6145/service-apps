import React from "react";
import { SingleCard } from "../components/singleCard";
import { Wrapper } from "../style/style";

const TopCard = () => {
  return (
    <Wrapper>
      <SingleCard
        heading="Latest Discussion Topic"
        subheading="Heat Dissipiation From Electrical Panels"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        btn="View All"
      />
      <SingleCard
        heading="Upcomming Program"
        subheading="Event1"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        btn="View All Events"
        top
      />
      <SingleCard
        heading="Presedent Message"
        img="img/istockphoto-1309328823-170667a.jpg"
        name="Mr.Vikaram murthy"
        position="(National Presedent)"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum
          dolor sit, amet consectetur elit."
        short="Read more"
        top
      />
    </Wrapper>
  );
};

export default TopCard;
