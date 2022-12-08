import React from "react";
import { ProfileSection, Text, SmallHeading, Title } from "../style/style";

export const ProfileCard = () => {
  return (
    <ProfileSection>
      <img src="img/not-smiling.jpg" alt="" />
      <Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          explicabo. Magnam porro dolorum blanditiis impedit o Lorem ipsum dolor
          sit amet Lorem ipsum dolor sit amet
        </Text>
        <SmallHeading color>
          ANSHU KUMAR
        </SmallHeading>
        <Text>FOUNDER</Text>
      </Title>
    </ProfileSection>
  );
};
